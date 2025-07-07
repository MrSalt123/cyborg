'use client';

import FloatingBalloons from '@/components/WavyBalloon'; // Or your component name
import CyborgTicker from '@/components/CyborgTicker';
import MeetTheCyborg from '@/components/MeetTheCyborg';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      {/* SOLUTION:
        1. Reduced main gap from `gap-y-8` to `gap-y-4` to shrink the space after the ticker.
        2. Removed the `min-h-[100dvh]` to prevent overflow scrolling. The content will now define the height.
           We add more padding-bottom (`pb-24`) to give the bottom monkeys space.
      */}
      <section className="relative flex flex-col items-center justify-start pt-8 pb-24 px-4 gap-y-4 h-screen">
        {/* Ticker */}
        <div className="w-full">
          <CyborgTicker />
        </div>

        {/* Wrapper for Balloons and Button */}
        {/* We removed the gap from this wrapper to use a more precise negative margin below. */}
        <div className="flex flex-col items-center">

          {/* SOLUTION:
            3. Reduced the balloon container height from `h-64` to `h-56` to save vertical space on mobile.
          */}
          <div className="w-full max-w-sm h-56 md:h-80">
            <FloatingBalloons />
          </div>

          {/* SOLUTION:
            4. Applied a negative margin (`-mt-12`) to the button's link.
               This pulls the button UP, creating a nice overlap with the bottom of the balloon image.
               You can change -mt-12 to -mt-10 or -mt-14 to get the exact look you want.
          */}
          <a href="/coming-soon" className="block mt-24">
            <button className="relative px-8 py-4 bg-[#facc15] skew-x-[-12deg] hover:translate-x-1 hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute inset-0 border-[4px] border-black -z-10 rounded-none shadow-[4px_4px_0_#000]" />
              <div className="text-black text-2xl md:text-3xl font-extrabold inline-block skew-x-[12deg]">
                CA
              </div>
            </button>
          </a>
        </div>

        {/* Monkeys */}
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


      {/* Scrolls into next section */}
      <div className='h-screen'>
        <MeetTheCyborg />
      </div>
    </div>
  );
}