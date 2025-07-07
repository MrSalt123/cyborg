'use client';

import FloatingBalloons from '@/components/WavyBalloon';
import CyborgTicker from '@/components/CyborgTicker';
import MeetTheCyborg from '@/components/MeetTheCyborg';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      <section className="relative flex flex-col items-center h-screen md:justify-center">
        {/* Ticker */}
        <div className='flex flex-col'>
          <div className="w-full">
            <CyborgTicker />
          </div>

          <div className='mt-24 flex flex-col items-center gap-4'>
            {/* Balloons */}
            <div className="w-full max-w-sm">
              <FloatingBalloons />
            </div>

            {/* CTA Button */}
            <div>
              <button
                className="relative px-8 py-4 bg-[#facc15] skew-x-[-12deg] hover:translate-x-1 hover:-translate-y-1 transition-transform duration-300"
              >
                <a href="/coming-soon">
                  <div className="absolute inset-0 border-[4px] border-black -z-10 rounded-none shadow-[4px_4px_0_#000]" />
                  <div className="text-black text-2xl md:text-3xl font-extrabold inline-block skew-x-[12deg]">
                    CA
                  </div>
                </a>
              </button>
            </div>

          </div>
        </div>

        {/* Monkeys */}
        <div className="absolute hidden md:block top-0 left-[10%] w-48 z-10">
          <Image src="/monkey2.png" alt="Cyborg Monkey Left" width={192} height={192} priority />
        </div>

        <div className="absolute top-0 right-[10%] w-48 z-10">
          <Image src="/monkey_swinging.png" alt="Cyborg Monkey Right" width={192} height={192} priority />
        </div>

        <div className="absolute hidden md:block bottom-0 right-[5%] w-48 z-10">
          <Image src="/monkeyreading.png" alt="Cyborg Monkey Reading" width={192} height={192} priority />
        </div>

        <div className="absolute bottom-[7%] left-0 w-48 z-10">
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
