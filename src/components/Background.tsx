import React from 'react';

interface BackgroundProps {
  isBlurred?: boolean;
}

const Background: React.FC<BackgroundProps> = ({ isBlurred = false }) => {
  return (
    <>
      <div className="fixed inset-0 bg-[url('/world-map-background.jpg')] bg-cover bg-center bg-no-repeat -z-10" />
      <div className={`fixed inset-0 bg-black/30 ${isBlurred ? 'backdrop-blur-sm' : ''} -z-10`} />
    </>
  );
};

export default Background; 