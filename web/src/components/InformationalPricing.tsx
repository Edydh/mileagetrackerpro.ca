'use client';

import React from 'react';

type Currency = 'CAD' | 'USD' | 'EUR' | 'GBP' | 'JPY';

const reference: Record<'monthly'|'yearly'|'lifetime', number> = {
  monthly: 8.99,
  yearly: 49.99,
  lifetime: 74.99,
};

function detectCurrency(): Currency {
  try {
    const region = new Intl.Locale(navigator.language).region || 'CA';
    switch (region) {
      case 'US': return 'USD';
      case 'GB': return 'GBP';
      case 'JP': return 'JPY';
      case 'DE':
      case 'FR':
      case 'ES':
      case 'IT': return 'EUR';
      default: return 'CAD';
    }
  } catch {
    return 'CAD';
  }
}

export default function InformationalPricing() {
  const [currency, setCurrency] = React.useState<Currency>('CAD');
  const [rates, setRates] = React.useState<Record<string, number> | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const detected = detectCurrency();
    setCurrency(detected);
    const symbols = ['CAD','USD','EUR','GBP','JPY'].join(',');
    fetch(`/api/exchange?base=CAD&symbols=${symbols}`)
      .then(async (r) => {
        if (!r.ok) throw new Error('rate_error');
        return r.json();
      })
      .then((json) => {
        setRates(json.rates || null);
      })
      .catch(() => setError('Unavailable'))
      .finally(() => setLoading(false));
  }, []);

  const toCurrency = (cadAmount: number): string => {
    if (!rates || currency === 'CAD') {
      return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'CAD' }).format(cadAmount);
    }
    const rate = rates[currency];
    const converted = rate ? cadAmount * rate : cadAmount;
    return new Intl.NumberFormat(undefined, { style: 'currency', currency: currency }).format(converted);
  };


  const plans = [
    { name: 'Premium Monthly', key: 'monthly' as const, description: 'Best for trying it out' },
    { name: 'Premium Yearly', key: 'yearly' as const, description: 'Save more with annual' },
    { name: 'Lifetime', key: 'lifetime' as const, description: 'One-time purchase' },
  ];

  return (
    <div>
      <div className="text-center text-sm text-gray-500 mb-4">Reference base: CAD — auto‑adapted estimates for your location. No checkout here.</div>
      {loading && (
        <div className="text-center text-gray-600">Loading local pricing…</div>
      )}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => {
            const isPopular = p.key === 'yearly';
            return (
              <div
                key={i}
                className={`relative p-6 rounded-xl border bg-white transition transform hover:-translate-y-1 ${
                  isPopular
                    ? 'border-blue-600 ring-2 ring-blue-100 shadow-lg bg-gradient-to-b from-white to-blue-50'
                    : 'border-gray-200'
                }`}
                aria-current={isPopular ? 'true' : undefined}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold rounded-full text-white" style={{backgroundColor:'#2F4062'}}>Most Popular</div>
                )}
                <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
                <div className="text-3xl font-bold mb-2">
                  {(() => {
                    // compute live to ensure it reacts to dropdown change without memo pitfalls
                    return toCurrency(reference[p.key]);
                  })()}
                </div>
                <div className="text-gray-500 mb-4">{p.description}</div>
                <button
                  className="w-full py-2 rounded-lg font-semibold text-white"
                  style={{ backgroundColor: isPopular ? '#2F4062' : '#e57138' }}
                  disabled
                >
                  Informational
                </button>
              </div>
            );
          })}
        </div>
      )}
      {error && <div className="text-center text-red-600 mt-3">Exchange rates unavailable; showing CAD.</div>}
    </div>
  );
}


