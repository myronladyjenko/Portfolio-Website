import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[url('/world-map-background.jpg')] bg-cover bg-center bg-no-repeat bg-fixed overflow-x-hidden">

      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10" />


      <div className="relative z-20 flex items-center justify-center h-screen px-6">

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl shadow-black/40 max-w-5xl w-full flex flex-col md:flex-row overflow-hidden border border-white/10">
          <div className="p-10 md:w-2/3 text-white space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Myron Ladyjenko <br />
                <span className="text-orange-400">Full Stack Developer</span>
              </h1>
            </div>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Proficient software engineer with 2+ years of experience across all stages of the development lifecycle. <br /><br />
              {/* Demonstrated technical and collaborative skills through 5+ coding competitions, 4 hackathons, and 10+ self-driven projects. <br /><br /> */}
              Adaptable and self-driven with a proven ability to quickly master new technologies and build scalable systems.
            </p>
            <div>
              <a
                href="/Myron_Ladyjenko_Resume.pdf"
                download
                className="inline-block bg-orange-400 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:bg-orange-500 transition"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="md:w-1/3 h-full p-4 flex justify-center items-center bg-white/10">
            <img
              src="/dubai.jpg"
              alt="Myron Ladyjenko"
              className="rounded-l-none rounded-r-2xl object-cover w-full"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;