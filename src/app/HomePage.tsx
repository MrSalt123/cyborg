'use client';

import FloatingBalloons from '@/components/WavyBalloon'
import CyborgTicker from '@/components/CyborgTicker'
import MeetTheCyborg from '@/components/MeetTheCyborg'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

// Explicitly typed variant definitions to satisfy TypeScript
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

export default function HomePage() {
  return (
    <motion.div
      className="min-h-screen overflow-hidden relative"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <section className="relative flex flex-col items-center px-4 pt-8 pb-12 gap-8 md:h-screen md:justify-center">
        {/* Ticker */}
        <motion.div className="w-full" variants={fadeIn}>
          <CyborgTicker />
        </motion.div>

        {/* Balloons */}
        <motion.div className="w-full max-w-sm" variants={fadeIn}>
          <FloatingBalloons />
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={fadeIn}>
          <motion.button
            key="ca"
            className="relative px-8 py-4 bg-[#facc15] skew-x-[-12deg] hover:translate-x-1 hover:-translate-y-1 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <a href="/coming-soon">
              <div className="absolute inset-0 border-[4px] border-black -z-10 rounded-none shadow-[4px_4px_0_#000]" />
              <div className="text-black text-2xl md:text-3xl font-extrabold inline-block skew-x-[12deg]">
                CA
              </div>
            </a>
          </motion.button>
        </motion.div>

        {/* Ticker */}


        {/* Monkeys */}
        <motion.div className="absolute hidden md:block top-0 left-[10%] w-48 z-10" variants={fadeIn}>
          <Image src="/monkey2.png" alt="Cyborg Monkey Left" width={192} height={192} priority />
        </motion.div>

        <motion.div className="absolute top-0 right-[10%] w-48 z-10" variants={fadeIn}>
          <Image src="/monkey_swinging.png" alt="Cyborg Monkey Right" width={192} height={192} priority />
        </motion.div>

        <motion.div className="absolute hidden md:block bottom-0 right-[5%] w-48 z-10" variants={fadeIn}>
          <Image src="/monkeyreading.png" alt="Cyborg Monkey Reading" width={192} height={192} priority />
        </motion.div>

        <motion.div className="absolute bottom-0 md:bottom-[7%] left-0 w-48 z-10" variants={fadeIn}>
          <Image src="/rope.png" alt="Rope" width={192} height={192} priority />
        </motion.div>

        {/* Balloons */}

      </section>

      {/* Scrolls into next section */}
      <motion.div variants={fadeIn}>
        <MeetTheCyborg />
      </motion.div>
    </motion.div>
  );
}
