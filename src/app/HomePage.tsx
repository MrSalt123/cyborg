'use client';

import FloatingBalloons from '@/components/WavyBalloon'; // Or your component name
import CyborgTicker from '@/components/CyborgTicker';
import MeetTheCyborg from '@/components/MeetTheCyborg';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      {/* SECTION 1: THE HERO
        NEW STRATEGY: The section's ONLY job is to be a full-screen container
        that centers ONE single content block. We achieve this with flexbox.
      */}
      <section className="relative flex min-h-screen p-4">

        {/* THE CONTENT BLOCK
          This is the single div being centered. It contains ALL our hero content.
          We use flex-col here to stack the items vertically inside it.
        */}
        <div className="flex w-full max-w-sm flex-col items-center">

          {/* 1. Ticker */}
          <div className="w-full">
            <CyborgTicker />
          </div>

          {/* 2. Balloons Container */}
          {/* We add a margin-top (mt-4) for a SMALL, CONTROLLED space below the ticker */}
          {/* We use a defined height (h-56) to ensure the container has a predictable size */}
          <div className="mt-4 w-full h-56 md:h-80">
            <FloatingBalloons />
          </div>

          {/* 3. CTA Button */}
          {/* The negative margin (-mt-12) pulls the button UP for the desired overlap */}
          {/* This is now predictable because its position is relative to the h-56 container above it */}
          <a href="/coming-soon" className="block mt-12">
            <button className="relative px-8 py-4 bg-[#facc15] skew-x-[-12deg] hover:translate-x-1 hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute inset-0 border-[4px] border-black -z-10 rounded-none shadow-[4px_4px_0_#000]" />
              <div className="text-black text-2xl md:text-3xl font-extrabold inline-block skew-x-[12deg]">
                CA
              </div>
            </button>
          </a>
        </div>

        {/* Monkeys (These are positioned relative to the <section> and are unaffected) */}
        <div className="absolute hidden md:block top-0 left-[10%] w-32 md:w-48 z-10">
          <Image src="/monkey2.png" alt="Cyborg Monkey Left" width={192} height={192} priority />
        </div>
        <div className="absolute top-0 right-[10%] w-32 md:w-48 z-10">
          <Image src="/monkey_swinging.png" alt="Cyborg Monkey Right" width={192} height={192} priority />
        </div>
        <div className="absolute hidden md:block bottom-0 right-[5%] w-32 md:w-48 z-10">
          <Image src="/monkeyreading.png" alt="Cyborg Monkey Reading" width={192} height={192} priority />
        </div>
        <div className="absolute bottom-0 md:bottom-[7%] left-0 w-32 md:w-48 z-10">
          <Image src="/rope.png" alt="Rope" width={192} height={192} priority />
        </div>
      </section>

      {/* SECTION 2 */}
      <div className='h-screen'>
        <MeetTheCyborg />
      </div>
    </div>
  );
}