import { NextResponse } from 'next/server';

// Simple exchange provider using exchangerate.host (free, no key)
// Example: /api/exchange?base=CAD&symbols=USD,EUR
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const base = searchParams.get('base') || 'CAD';
  const symbols = searchParams.get('symbols') || 'USD,EUR,GBP,JPY,CAD';
  try {
    const res = await fetch(`https://api.exchangerate.host/latest?base=${encodeURIComponent(base)}&symbols=${encodeURIComponent(symbols)}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch rates');
    const data = await res.json();
    return NextResponse.json({ base: data.base, date: data.date, rates: data.rates });
  } catch (_err) {
    return NextResponse.json({ error: 'exchange_fetch_failed' as const }, { status: 500 });
  }
}


