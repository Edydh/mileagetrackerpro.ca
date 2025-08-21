'use client';

import React from 'react';

export default function HeroCTA() {
  const handleSoon = () => alert('Coming soon!');
  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
      <a
        href="https://apps.apple.com/ca/app/mileage-tracker-pro-d6080f/id6742725029"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transform"
      >
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="Download on the App Store"
          className="h-12"
          loading="lazy"
        />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.edydhm.mileagetrackerpro&pcampaignid=web_share"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transform"
      >
        <img
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          alt="Get it on Google Play"
          className="h-16"
          loading="lazy"
        />
      </a>
      <a
        href="https://web.mileagetrackerpro.ca/"
        target="_blank"
        rel="noopener noreferrer"
        className="h-12 px-6 text-white font-semibold rounded-lg shadow hover:opacity-95 flex items-center justify-center"
        style={{ backgroundColor: '#e57138' }}
      >
        Web Dashboard
      </a>
    </div>
  );
}


