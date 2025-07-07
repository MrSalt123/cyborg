'use client';

import FloatingBalloons from '@/components/WavyBalloon';
import CyborgTicker from '@/components/CyborgTicker';
import MeetTheCyborg from '@/components/MeetTheCyborg';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      <section className="relative flex min-h-[100dvh] items-start justify-center p-4">
        <div className="flex w-full max-w-sm flex-col items-center">
          <div className="w-full">
            <CyborgTicker />
          </div>

          {/* Reduced height and margins for mobile */}
          <div className='flex flex-col h-full items-center -mt-24 md:mt-0'>
          <div className="mt-1 md:mt-4 w-full h-32 sm:h-40 md:h-80">
            <FloatingBalloons />
          </div>
          
          <a href="/coming-soon" className="block mt-72 md:mt-24">
            <button className="relative px-8 py-4 bg-[#facc15] skew-x-[-12deg] hover:translate-x-1 hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute inset-0 border-[4px] border-black -z-10 rounded-none shadow-[4px_4px_0_#000]" />
              <div className="text-black text-2xl md:text-3xl font-extrabold inline-block skew-x-[12deg]">
                CA
              </div>
            </button>
          </a>
          </div>
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

      <div className='h-screen'>
        <MeetTheCyborg />
      </div>
    </div>
  );
}