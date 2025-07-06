'use client'

import Image from 'next/image'

export default function MeetTheCyborg() {
  return (
    <section className="p-4 min-h-screen flex items-center">
      <div className="mx-auto flex flex-col md:flex-row items-stretch justify-between max-w-7xl border-2 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] bg-background">

        {/* Text section */}
        <div className="p-4 md:w-1/2 text-left flex flex-col items-center justify-center">
          <img
            src="/meetcyborgtext2.png"
            alt="Meet The Cyborg"
            className="w-full max-w-[300px] mb-4"
          />
          <p className="flex-1">
            Welcome to the $CYBORG Army — a battalion of blockchain-powered apes led by the legendary @realcyborg786. We're not a community. We're not a cult. We're an army.
            <br />
            <br />
            Brick by brick, raid by raid, we're building a decentralized empire. $CYBORG isn't just a coin. It's a movement. A mindset. A mission to return power to the people.
            <br />
            <br />
            Exclusive drops. Tactical merch. Strategic alliances. Full-scale domination.
            <br />
            <br />
            <strong> Join the army. Claim your place in the future.</strong>
            — @realcyborg786
          </p>
        </div>

        {/* Image section */}
        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            src="/mission.jpeg"
            alt="Cyborg Monkey"
            width={500}
            height={500}
            className="aspect-square w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}
