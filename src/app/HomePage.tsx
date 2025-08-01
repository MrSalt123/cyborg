'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Copy } from 'lucide-react';          // npm install lucide-react

// --- Import Your Actual Components ---
import CyborgTicker from '@/components/CyborgTicker';
import FloatingBalloons from '@/components/WavyBalloon';
import MeetTheCyborg from '@/components/MeetTheCyborg';

// 👉  Put your real contract address here
const CONTRACT_ADDRESS = '7xadAU5f8grUYLGq6XmsGvj5YkjiSHB6BQrdSy9mj1Ua';

export default function HomePage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy CA:', err);
    }
  };

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

            {/* Text + Copy Icon */}
            <div
              onClick={handleCopy}
              className="flex items-center gap-2 cursor-pointer select-none group mt-4"
            >
              <span className="text-black text-2xl font-extrabold tracking-wider">
              7xadAU5f8grUYLGq6XmsGvj5YkjiSHB6BQrdSy9mj1Ua
              </span>
              <Copy
                size={28}
                className="text-black stroke-2 group-hover:scale-105 transition-transform"
              />
            </div>

            {/* Copied notice */}
            {copied && (
              <p className="mt-2 text-sm font-semibold text-center text-black">
                CA copied to clipboard
              </p>
            )}
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
