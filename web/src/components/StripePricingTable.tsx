'use client';

import React from 'react';

type Props = {
  pricingTableId: string;
  publishableKey: string;
  className?: string;
};

export default function StripePricingTable({ pricingTableId, publishableKey, className }: Props) {
  return React.createElement('stripe-pricing-table', {
    'pricing-table-id': pricingTableId,
    'publishable-key': publishableKey,
    class: className,
  } as unknown as React.HTMLAttributes<HTMLElement>);
}


