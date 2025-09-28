import React from 'react';
import COLORS from '../styles/colors';

const Home: React.FC = () => {
  return (
    <div
      className="relative min-h-screen pt-20 md:pt-24 px-4 sm:px-6 md:px-8 flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: COLORS.bgFrom,
        backgroundImage: `
          radial-gradient(900px 420px at 80% 92%, rgba(245,158,11,0.06), transparent 60%),
          linear-gradient(135deg, ${COLORS.bgFrom}, ${COLORS.bgVia}, ${COLORS.bgTo})
        `,
      }}
    >
      {/* Size never exceeds the smaller viewport side => no page scroll */}
      <div
        className="relative"
        style={{
          width: 'min(96vmin, 92vw)',
          aspectRatio: '1 / 1',
        }}
      >
        {/* Outer ring */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{ border: '2px solid rgba(34,197,94,0.28)' }}
        />

        {/* Clipped circle content */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {/* Stronger, clearer arcs */}
          <div
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              border: '2px solid rgba(34,197,94,0.22)',
              transform: 'rotate(45deg)',
              boxShadow: 'inset 0 0 20px rgba(34,197,94,0.08)',
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              border: '2px solid rgba(34,197,94,0.22)',
              transform: 'rotate(-45deg)',
              boxShadow: 'inset 0 0 20px rgba(34,197,94,0.08)',
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              border: '2px solid rgba(34,197,94,0.18)',
              transform: 'scaleY(0.75)',
              boxShadow: 'inset 0 0 18px rgba(34,197,94,0.06)',
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              border: '2px solid rgba(34,197,94,0.18)',
              transform: 'scaleY(0.50)',
              boxShadow: 'inset 0 0 18px rgba(34,197,94,0.06)',
            }}
          />

          {/* Content centered inside circle with safe padding */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <div
              className="text-center"
              style={{
                width: '72%',
                paddingInline: '6%',
                margin: '0 auto',
                overflowWrap: 'anywhere',
                wordBreak: 'break-word',
                hyphens: 'auto',
              }}
            >
              <h1
                className="font-extrabold tracking-tight mb-3"
                style={{
                  color: COLORS.textPrimary,
                  fontSize: 'clamp(1rem, 5.4vw, 2.4rem)',
                  lineHeight: 1.15,
                }}
              >
                Interactive Globe Coming Soon
              </h1>
              <p
                className="mx-auto"
                style={{
                  color: COLORS.textSecondary,
                  fontSize: 'clamp(0.9rem, 3.6vw, 1.3rem)',
                  lineHeight: 1.5,
                  maxWidth: '42ch',
                }}
              >
                Get ready to explore my journey through an interactive 3D globe experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
