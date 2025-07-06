'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function ScrollMonkey() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  // Horizontal monkey movement
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  // Text phase based on scroll
  const textPhases = [
    "Welcome to the jungle...",
    "The Cyborg learns to balance...",
    "He raids while rolling.",
    "Powered by bananas & blockchain."
  ]
  const textIndex = useTransform(scrollYProgress, v => Math.floor(v * textPhases.length))

  return (
    <section ref={ref} className="h-[300vh] relative bg-yellow-100">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-between pt-20 pb-10">
        <motion.h2 className="text-3xl font-bold text-center">
          {textPhases.map((text, i) => (
            <motion.span
              key={i}
              className="absolute"
              style={{ opacity: textIndex.get() === i ? 1 : 0 }}
            >
              {text}
            </motion.span>
          ))}
        </motion.h2>

        <div className="w-full h-[300px] relative">
          <motion.div style={{ x }} className="absolute bottom-0">
            <Image
              src="/monkey-on-ball.png"
              alt="Monkey on Ball"
              width={150}
              height={150}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
