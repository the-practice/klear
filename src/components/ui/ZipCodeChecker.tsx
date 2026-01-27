"use client";

import { useState } from "react";

export default function ZipCodeChecker() {
  const [zipCode, setZipCode] = useState("");
  const [availability, setAvailability] = useState<"available" | "unavailable" | "checking" | null>(null);
  const [showWaitlist, setShowWaitlist] = useState(false);

  const checkAvailability = () => {
    if (zipCode.length !== 5) return;
    
    setAvailability("checking");
    
    // ZIP code ranges for Florida and Washington
    // Florida: 32000-34999, Washington: 98000-99499
    const zip = parseInt(zipCode);
    const isFloridaZip = zip >= 32000 && zip <= 34999;
    const isWashingtonZip = zip >= 98000 && zip <= 99499;
    
    setTimeout(() => {
      if (isFloridaZip || isWashingtonZip) {
        setAvailability("available");
      } else {
        setAvailability("unavailable");
        setShowWaitlist(true);
      }
    }, 500);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md mx-auto lg:mx-0">
      <label htmlFor="zip-check" className="block text-sm font-medium text-[var(--klear-neutral-700)] mb-2">
        Check availability in your area
      </label>
      <div className="flex gap-2">
        <input
          id="zip-check"
          type="text"
          value={zipCode}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "").slice(0, 5);
            setZipCode(value);
            if (availability) setAvailability(null);
          }}
          placeholder="Enter ZIP code"
          className="flex-1 px-4 py-3 rounded-xl border border-[var(--klear-neutral-300)] focus:ring-2 focus:ring-[var(--klear-primary-500)] focus:border-transparent"
        />
        <button
          onClick={checkAvailability}
          disabled={zipCode.length !== 5}
          className="px-6 py-3 rounded-xl bg-[var(--klear-primary-600)] text-white font-medium hover:bg-[var(--klear-primary-700)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Check
        </button>
      </div>
      
      {availability === "checking" && (
        <div className="mt-3 text-sm text-[var(--klear-neutral-600)] flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Checking availability...
        </div>
      )}
      
      {availability === "available" && (
        <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-start gap-2">
            <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="text-sm font-medium text-green-800">Great news! Klear® is available in your area.</p>
              <p className="text-xs text-green-700 mt-1">You can get started with treatment today.</p>
            </div>
          </div>
        </div>
      )}
      
      {availability === "unavailable" && (
        <div className="mt-3 p-3 bg-[var(--klear-accent-50)] border border-[var(--klear-accent-200)] rounded-lg">
          <div className="flex items-start gap-2">
            <svg className="w-5 h-5 text-[var(--klear-accent-600)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div className="flex-1">
              <p className="text-sm font-medium text-[var(--klear-accent-800)]">We're not in your area yet.</p>
              <p className="text-xs text-[var(--klear-accent-700)] mt-1">Join our waitlist to be notified when we expand.</p>
              {showWaitlist && (
                <div className="mt-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[var(--klear-accent-300)] focus:ring-2 focus:ring-[var(--klear-accent-500)] focus:border-transparent"
                  />
                  <button className="mt-2 w-full px-4 py-2 text-sm font-medium text-white bg-[var(--klear-accent-600)] hover:bg-[var(--klear-accent-700)] rounded-lg transition-colors">
                    Join Waitlist
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}