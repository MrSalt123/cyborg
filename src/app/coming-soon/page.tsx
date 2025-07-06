'use client'

import Image from 'next/image'

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Image
        src="/coming-soon.png"
        alt="Coming Soon"
        width={400}
        height={200}
        className="object-contain"
        priority
      />
    </div>
  )
}
