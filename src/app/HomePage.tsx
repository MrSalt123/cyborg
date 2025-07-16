'use client';

import React from 'react';
import Image from 'next/image';

// --- Import Your Actual Components ---
// These imports are based on your original code.
import CyborgTicker from '@/components/CyborgTicker';
import FloatingBalloons from '@/components/WavyBalloon';
import MeetTheCyborg from '@/components/MeetTheCyborg';


// --- Main HomePage Component ---
export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full min-h-[100dvh] text-white flex flex-col items-center p-4 overflow-hidden">
        
        {/* Top Ticker */}
        <div className="w-full z-0">
          <CyborgTicker />
        </div>

        {/* This new wrapper handles the vertical centering more robustly */}
        <div className="flex-1 flex items-center justify-center w-full">
            {/* Central Content (Balloons and Button) */}
            <div className="flex flex-col items-center w-full max-w-lg z-10">
              <div className="w-full">
                <FloatingBalloons />
              </div>
              
              <a href="/coming-soon" className="block mt-12 md:mt-16">
                <button className="relative px-8 py-4 bg-[#facc15] skew-x-[-12deg] hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 border-[4px] border-black -z-10 shadow-[4px_4px_0_#000]" />
                  <div className="text-black text-2xl md:text-3xl font-extrabold inline-block skew-x-[12deg]">
                    CA
                  </div>
                </button>
              </a>
            </div>
        </div>


        {/* Absolutely Positioned Monkeys */}
        
        {/* Top-Left Monkey (Desktop Only) */}
        <div className="absolute hidden md:block top-[0%] left-[10%] w-32 md:w-48 z-20">
          <Image src="/monkey2.png" alt="Cyborg Monkey Left" width={192} height={192} priority />
        </div>

        {/* Top-Right Monkey (All Screens) */}
        <div className="absolute top-[0%] right-[5%] md:right-[10%] w-32 md:w-48 z-20">
          <Image src="/monkey_swinging.png" alt="Cyborg Monkey Right" width={192} height={192} priority />
        </div>

        {/* Bottom-Right Monkey (Desktop Only) */}
        <div className="absolute hidden md:block bottom-[5%] right-[5%] w-32 md:w-48 z-20">
          <Image src="/monkeyreading.png" alt="Cyborg Monkey Reading" width={192} height={192} priority />
        </div>

        {/* Bottom-Left Monkey & Rope (Desktop Only) */}
        <div className="absolute hidden md:block bottom-[7%] left-0 w-32 md:w-48 z-20">
          <Image src="/rope.png" alt="Rope" width={192} height={192} priority />
        </div>
      </section>

      {/* Following Section */}
      <div className='h-screen'>
        <MeetTheCyborg />
      </div>
    </div>
  );
}
