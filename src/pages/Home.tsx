import React from 'react';
import COLORS from '../styles/colors';

const Home: React.FC = () => {
  return (
    <div
      className="relative min-h-screen pt-20 px-4 sm:px-6 md:px-8 flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: COLORS.bgFrom,
        backgroundImage: `
          radial-gradient(900px 420px at 80% 92%, rgba(245,158,11,0.06), transparent 60%),
          linear-gradient(135deg, ${COLORS.bgFrom}, ${COLORS.bgVia}, ${COLORS.bgTo})
        `,
      }}
    >
      <div
        className="relative aspect-square rounded-full flex flex-col items-center justify-center text-center"
        style={{
          width: '70vmin', 
          border: '1px solid rgba(34,197,94,0.20)',
        }}
      >
        {/* longitude lines */}
        <div
          className="absolute inset-0 rounded-full"
          style={{ border: '1px solid rgba(34,197,94,0.10)', transform: 'rotate(45deg)' }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{ border: '1px solid rgba(34,197,94,0.10)', transform: 'rotate(-45deg)' }}
        />
        {/* latitude lines */}
        <div
          className="absolute inset-0 rounded-full"
          style={{ border: '1px solid rgba(34,197,94,0.10)', transform: 'scaleY(0.75)' }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{ border: '1px solid rgba(34,197,94,0.10)', transform: 'scaleY(0.50)' }}
        />

        {/* Text inside globe */}
        <div className="relative z-10 px-4">
          <h1
            className="font-extrabold mb-4 tracking-tight"
            style={{
              color: COLORS.textPrimary,
              fontSize: 'clamp(1.25rem, 4vmin, 3rem)',
              lineHeight: 1.1,
            }}
          >
            Interactive Globe Coming Soon
          </h1>
          <p
            style={{
              color: COLORS.textSecondary,
              fontSize: 'clamp(0.875rem, 2vmin, 1.5rem)',
              lineHeight: 1.5,
            }}
          >
            Get ready to explore my journey through an interactive 3D globe experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
