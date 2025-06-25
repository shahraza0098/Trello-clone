'use client';

import React from 'react';
import { UserButton, SignedIn } from '@clerk/nextjs';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-indigo-600">Logo</span>
          </div>

          {/* Show user profile button when signed in */}
          <div className="flex items-center space-x-4">
            <SignedIn>
              <UserButton afterSignOutUrl="/sign-in" />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
