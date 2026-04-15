'use client';

import React, { useState } from 'react';
import NewsSubscriptionPage from './newsletterform';
import NewsletterForm from './newsletterform';

interface NewsletterProps {
  btnText: string;
}

const NewsletterButton = ({ btnText }: NewsletterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      {/* Static content above the button */}
      <div className="text-gray-400 mb-4">
        Get my latest projects and see what I am working on.
      </div>

      {/* Trigger button */}
      <button
        onClick={openDrawer}
        className="text-white bg-blue-500 hover:bg-blue-600 rounded-2xl px-4 py-2 transition-colors"
      >
        {btnText}
      </button>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer panel – slides from right */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-black border-l border-gray-800 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Close button */}
          <button
            onClick={closeDrawer}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Drawer content */}
          <div className="pt-16 px-6 pb-6">
            <NewsletterForm btnText={btnText} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterButton;