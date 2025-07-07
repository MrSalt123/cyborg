'use client';

// Assuming you've renamed or will import MonkeyBalloonNavbar as FloatingBalloons
import FloatingBalloons from '@/components/WavyBalloon'; // Use the correct path
import CyborgTicker from '@/components/CyborgTicker';
import MeetTheCyborg from '@/components/MeetTheCyborg';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      <section className="relative flex flex-col items-center min-h-[100dvh] justify-start py-8 px-4 gap-y-8">
        {/* Ticker */}
        <div className="w-full">
          <CyborgTicker />
        </div>

        {/* --- THIS IS THE FIX --- */}
        {/* 1. We wrap the Balloons and Button in a Div to group them. */}
        <div className="flex flex-col items-center gap-y-8">
          
          {/* 2. We put the component inside a Div with a FIXED HEIGHT (h-64). */}
          {/* This forces the tall SVG to shrink to fit, removing the gap. */}
          {/* You can adjust h-64 (256px) to any value you like. */}
          <div className="w-full max-w-sm h-64 md:h-80">
            <FloatingBalloons />
          </div>

          {/* 3. The Button now sits directly below the contained balloons. */}
          <a href="/coming-soon" className="block">
            <button className="relative px-8 py-4 bg-[#facc15] skew-x-[-12deg] hover:translate-x-1 hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute inset-0 border-[4px] border-black -z-10 rounded-none shadow-[4px_4px_0_#000]" />
              <div className="text-black text-2xl md:text-3xl font-extrabold inline-block skew-x-[12deg]">
                CA
              </div>
            </button>
          </a>
        </div>
        {/* --- END OF FIX --- */}


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

      <div className='h-screen'>
        <MeetTheCyborg />
      </div>
    </div>
  );
}