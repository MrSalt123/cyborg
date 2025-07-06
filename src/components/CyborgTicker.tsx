'use client'

export default function CyborgTicker() {
  return (
    <div className="wrapper">
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className={`item item${i + 1}`}>
          <img src="/cyborg_ticker.png" alt="cyborgticker" />
        </div>
      ))}

      <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
        }

        .wrapper {
          width: 100%;
          max-width: 1536px;
          margin-inline: auto;
          position: relative;
          height: 70px;
          overflow: hidden;
      
        }

        @keyframes scrollLeft {
          to {
            left: -140px;
          }
        }

        .item {
          width: 140px;
          height: 70px;
          position: absolute;
          left: max(calc(180px * 7), 100%);
          animation-name: scrollLeft;
          animation-duration: 15s; /* Fast scroll */
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .label {
          color: #facc15;
          font-size: 1.75rem;
          font-weight: 800;
          background-color: transparent;
        }

        ${Array.from({ length: 7 })
          .map(
            (_, i) => `
          .item${i + 1} {
            animation-delay: calc(15s / 7 * (7 - ${i + 1}) * -1);
          }
        `
          )
          .join('\n')}
      `}</style>
    </div>
  )
}
