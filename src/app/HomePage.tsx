'use client';

import React from 'react';
import Image from 'next/image';

// --- Import Your Actual Components ---
import CyborgTicker from '@/components/CyborgTicker';
import FloatingBalloons from '@/components/WavyBalloon';
import MeetTheCyborg from '@/components/MeetTheCyborg';

export default function HomePage() {

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full min-h-[100dvh] text-white flex flex-col items-center p-4 overflow-hidden">
        <div className="w-full z-0">
          <CyborgTicker />
        </div>

        <div className="flex-1 flex items-center justify-center w-full">
          <div className="flex flex-col w-full justify-center items-center max-w-lg z-10 -mt-48 md:mt-0">
            <div className="w-full">
              <FloatingBalloons />
            </div>

            {/* CA Button */}
            <a href="/ca" className="block -mt-24 md:mt-24">
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
        <div className="absolute hidden md:block top-[0%] left-[10%] w-32 md:w-48 z-20">
          <Image src="/monkey2.png" alt="Cyborg Monkey Left" width={192} height={192} priority />
        </div>
        <div className="absolute top-[0%] right-[5%] md:right-[10%] w-32 md:w-48 z-20">
          <Image src="/monkey_swinging.png" alt="Cyborg Monkey Right" width={192} height={192} priority />
        </div>
        <div className="absolute hidden md:block bottom-[0%] right-[5%] w-32 md:w-48 z-20">
          <Image src="/monkeyreading.png" alt="Cyborg Monkey Reading" width={192} height={192} priority />
        </div>
        <div className="absolute hidden md:block bottom-[7%] left-0 w-32 md:w-48 z-20">
          <Image src="/rope.png" alt="Rope" width={192} height={192} priority />
        </div>
      </section>

      {/* Following Section */}
      <div className="h-screen">
        <MeetTheCyborg />
      </div>
    </div>
  );
}
