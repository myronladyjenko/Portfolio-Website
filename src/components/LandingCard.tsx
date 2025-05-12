import React from 'react';
import Background from './Background';
import { Download as DownloadIcon } from '@mui/icons-material';
import { Button } from '@mui/material';

interface LandingCardProps {
  onClose: () => void;
}

const LandingCard: React.FC<LandingCardProps> = ({ onClose }) => {
  const buttonStyles = {
    borderRadius: '9999px',
    textTransform: 'none',
    fontSize: '1rem',
    fontWeight: 600,
    px: 4,
    py: 1.5,
    minWidth: '120px',
    height: '48px',
  };

  return (
    <div className="relative min-h-screen">
      <Background isBlurred={true} />

      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-8">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl shadow-black/40 max-w-5xl 
                      w-[95%] md:w-[90%] lg:w-[80%] flex flex-col md:flex-row overflow-hidden border border-white/10 items-stretch relative">
          <div className="p-6 sm:p-8 md:p-10 md:w-2/3 text-white space-y-4 sm:space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Myron Ladyjenko <br />
                <span className="text-yellow-500">Full Stack Developer</span>
              </h1>
            </div>
            <p className="text-gray-200 font-semibold text-sm sm:text-base md:text-lg leading-relaxed">
              Proficient software engineer with a passion of crafting impactful and seemless user experiences. 
              I bring a holistic approach to building effective and scalable software solutions. <br /><br />
              Adaptable and self-driven with a proven ability to quickly master new technologies and work in a team environment.
            </p>
            <div className="flex justify-between items-center">
              <Button
                variant="contained"
                color="primary"
                onClick={onClose}
                size="large"
                sx={{
                  ...buttonStyles,
                  backgroundColor: '#EFB000',
                  '&:hover': {
                    backgroundColor: '#D08600',
                  },
                }}
              >
                Enter
              </Button>
              <Button
                variant="outlined"
                color="primary"
                href="/resume.pdf"
                download
                size="large"
                startIcon={<DownloadIcon />}
                sx={{
                  ...buttonStyles,
                  borderColor: '#EFB000',
                  color: '#EFB000',
                  '&:hover': {
                    borderColor: '#D08600',
                    color: '#D08600',
                    backgroundColor: 'rgba(252, 211, 77, 0.1)',
                  },
                }}
              >
                Resume
              </Button>
            </div>
          </div>

          <div className="md:w-1/3 p-4 sm:p-6 flex flex-col justify-center items-center">
            <img
              src="/dubai.jpg"
              alt="Myron Ladyjenko"
              className="rounded-md object-cover w-full h-full max-h-[300px] md:max-h-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCard; 