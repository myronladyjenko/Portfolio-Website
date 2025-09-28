import React from 'react';
import { Download as DownloadIcon } from '@mui/icons-material';
import { Button } from '@mui/material';
import COLORS from '../styles/colors';

interface LandingCardProps {
  onClose: () => void;
}

// using shared COLORS from src/styles/colors.ts

const LandingCardVariantMerged: React.FC<LandingCardProps> = ({ onClose }) => {
  const buttonBase = {
    borderRadius: '1.25rem',
    textTransform: 'none' as const,
    fontSize: '1rem',
    fontWeight: 700,
    padding: '0.6rem 1.8rem',
    minWidth: '7.5rem',
    height: '2.8rem',
    boxShadow: '0 6px 30px rgba(0,0,0,0.22)',
    transition: 'all 0.16s ease',
  };

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br"
      style={{
        backgroundImage: 
        `
          radial-gradient(900px 420px at 80% 92%, rgba(245,158,11,0.06), transparent 60%),
          linear-gradient(135deg, ${COLORS.bgFrom}, ${COLORS.bgVia}, ${COLORS.bgTo})
        `,
      }}
    >
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 py-12 sm:py-20">
        <div
          className="rounded-[28px] shadow-2xl max-w-6xl w-full md:w-[92%] p-8 md:p-14 flex flex-col md:flex-row items-stretch border backdrop-blur"
          style={{
            backgroundColor: COLORS.surface,
            borderColor: COLORS.surfaceBorderGreen,
            // subtle dual glow: green inner, orange outer

            boxShadow: `
              0 12px 50px rgba(0,0,0,0.45),
              0 0 0 7px ${COLORS.surfaceBorderGreen},
              0 0 0 2px rgba(34,197,94,0.06) inset,
              0 18px 15px ${COLORS.surfaceRingOrange}
            `,

          }}
        >
          {/* Left: text */}
          <div className="md:w-2/3 p-6 sm:p-8 space-y-6">
            <h1 className="font-extrabold leading-tight tracking-tight">
              <span
                className="block text-3xl sm:text-4xl md:text-5xl"
                style={{ color: COLORS.textPrimary }}
              >
                Myron Ladyjenko
              </span>
              <span
                className="block mt-2 text-2xl sm:text-3xl md:text-4xl"
                style={{
                backgroundImage: `linear-gradient(
                      90deg,
                      ${COLORS.primary} 0%,
                      ${COLORS.primary} 15%,  /* green holds to 28% */
                      ${COLORS.orange} 42%,   /* start orange earlier => more orange overall */
                      ${COLORS.orange} 80%
                    )`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  // color: COLORS.textPrimary
                }}
              >
                Full Stack Developer
              </span>
            </h1>


            <p className="font-medium text-base sm:text-lg md:text-xl leading-relaxed" style={{ color: COLORS.textPrimary }}>
              Proficient software engineer with a passion for crafting impactful and seamless user
              experiences. I bring a holistic approach to building effective and scalable software solutions.
            </p>

            {/* small orange accent bar */}
            <div
              style={{
                width: '78px',
                height: '4px',
                borderRadius: '999px',
                background: `linear-gradient(90deg, ${COLORS.orange}, ${COLORS.primary})`,
                boxShadow: `0 6px 22px ${COLORS.surfaceRingOrange}`,
              }}
            />

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2">
              <Button
                variant="contained"
                onClick={onClose}
                size="large"
                sx={{
                  ...buttonBase,
                  backgroundColor: COLORS.primary,
                  color: '#ffffff',
                  '&:hover': { backgroundColor: COLORS.primaryHover },
                  // '&:focus-visible': { boxShadow: `0 0 0 6px ${COLORS.primaryFocusRing}` },
                }}
              >
                Discover
              </Button>

              <Button
                variant="outlined"
                href="/resume.pdf"
                download
                size="large"
                startIcon={<DownloadIcon />}
                sx={{
                  ...buttonBase,
                  borderColor: 'transparent',
                  borderWidth: '3px',
                  color: COLORS.accentText,
                  backgroundColor: '#ffffff',
                  '&:hover': {
                    // borderWidth: '2px',
                    borderColor: COLORS.primaryHover,
                    // backgroundColor: COLORS.accentBg,
                    // color: '#0B1A10',
                    //  color: '#ffffff',
                  },
                  // '&:focus-visible': { boxShadow: `0 0 0 6px ${COLORS.primaryFocusRing}` },
                }}
              >
                Resume
              </Button>
            </div>
          </div>

          {/* Right: photo with orange rim light */}
          <div className="md:w-1/3 p-4 sm:p-6 flex flex-col justify-center items-center">
            <div
              className="w-full rounded-2xl overflow-hidden shadow-lg relative"
              style={{
                boxShadow: `
                  0 10px 30px rgba(0,0,0,0.45),
                  0 0 0 1px rgba(34,197,94,0.18),
                `,
              }}
            >
              <img
                src="/myronladyjenkoPhoto.jpeg"
                alt="Myron Ladyjenko"
                className="object-cover w-full h-full max-h-[420px] md:max-h-none"
                // style={{ filter: 'saturate(1.03)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCardVariantMerged;
