'use client'

import { useEffect, useRef } from 'react'

export default function MonkeyBalloonNavbar() {
  const svgRef = useRef<HTMLObjectElement>(null)

  useEffect(() => {
    const objectEl = svgRef.current
    if (!objectEl) return

    const onLoad = () => {
      const svgDoc = objectEl.contentDocument
      if (!svgDoc) return

      const links = svgDoc.querySelectorAll('a')
      links.forEach(link => {
        link.setAttribute('style', 'cursor: pointer;')
      })
    }

    // If already loaded
    if (objectEl.contentDocument) {
      onLoad()
    } else {
      objectEl.addEventListener('load', onLoad)
    }

    return () => {
      objectEl.removeEventListener('load', onLoad)
    }
  }, [])

  return (
    <div className="w-full flex justify-center py-32">
      <object
        ref={svgRef}
        type="image/svg+xml"
        data="/monkeyballoon_3.svg"
        className="w-[60%] md:w-[20vw] h-auto animate-sway"
      >
        Your browser does not support SVG
      </object>

      <style jsx>{`
        @keyframes sway {
          0% {
            transform: rotate(1deg);
          }
          50% {
            transform: rotate(-1.8deg);
          }
          100% {
            transform: rotate(1deg);
          }
        }

        .animate-sway {
          animation: sway 4s ease-in-out infinite;
          transform-origin: top center;
        }
      `}</style>
    </div>
  )
}
