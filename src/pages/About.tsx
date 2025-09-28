import React from 'react';
import COLORS from '../styles/colors';

const About: React.FC = () => {
  return (
    <div
      className="relative min-h-screen pt-20 md:pt-24 pb-24 px-4 sm:px-6 md:px-8 overflow-x-hidden"
      style={{
        backgroundColor: COLORS.bgFrom,
        backgroundImage: `
          radial-gradient(900px 420px at 80% 92%, rgba(245,158,11,0.06), transparent 60%),
          linear-gradient(135deg, ${COLORS.bgFrom}, ${COLORS.bgVia}, ${COLORS.bgTo})
        `,
      }}
    >
      <div className="mx-auto w-full max-w-5xl">
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{
            backgroundColor: COLORS.surface,
            borderColor: COLORS.surfaceBorderGreen,
            boxShadow: `
              0 12px 36px rgba(0,0,0,0.40),
              0 0 0 1px rgba(34,197,94,0.18),
              0 10px 26px rgba(245,158,11,0.14)
            `,
          }}
        >
          {/* ---------- My Story (photo left, text right) ---------- */}
          <div className="md:grid md:grid-cols-12 md:gap-10 items-start">
            {/* Photo */}
            <div className="md:col-span-5 mb-6 md:mb-0">
              <img
                src="/About.jpg"
                alt="Myron Ladyjenko"
                className="w-full rounded-2xl object-cover border border-green-400/20 shadow-xl"
                style={{
                  aspectRatio: '3 / 4',
                  objectPosition: 'center top',
                  maxHeight: '70vh',
                }}
              />
            </div>

            {/* Text */}
            <div className="md:col-span-7">
              <h2
                className="font-extrabold tracking-tight mb-2"
                style={{
                  color: COLORS.textPrimary,
                  fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                  lineHeight: 1.1,
                }}
              >
                My Story
              </h2>

              <div
                className="h-1 w-24 rounded-full mb-5"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${COLORS.orange}, ${COLORS.primary})`,
                }}
              />

              <p className="mb-6 leading-relaxed" style={{ color: COLORS.textPrimary }}>
                A little about me… In 2019, I participated in the International Tournament of Young
                Mathematicians in Barcelona, Spain. Each team in the competition had to solve ten
                investigative problems and present them to the jury. This competition helped me gain
                experience working as a team leader. At first, we struggled, and when we were at our
                last chance to make it to the finals, we all felt immense pressure. Our team then
                agreed to present my solution. I was nervous but knew it was essential to remain
                calm and focused. We rose to the challenge and won the silver medal.
              </p>

              <p className="leading-relaxed" style={{ color: COLORS.textPrimary }}>
                I demonstrated leadership when it was most needed and helped my team succeed.
                Afterwards, I understood that math was not only about solving thousands of typical
                problems for competition. It was about searching for unknown answers, brainstorming
                solutions for unsolved problems, and bringing your ideas to life. That was when I
                decided to become a software engineer. I would love to apply my mathematical
                background and team skills to developing valuable software.
              </p>
            </div>
          </div>

          {/* Divider between sections */}
          <hr className="my-10 border-t border-green-400/25" />

          {/* ---------- About Me & How I Work ---------- */}
          <div>
            <h2
              className="font-extrabold tracking-tight mb-2"
              style={{
                color: COLORS.textPrimary,
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                lineHeight: 1.1,
              }}
            >
              Who am I today?
            </h2>

            <div
              className="h-1 w-24 rounded-full mb-5"
              style={{
                backgroundImage: `linear-gradient(90deg, ${COLORS.orange}, ${COLORS.primary})`,
              }}
            />

            <p className="leading-relaxed" style={{ color: COLORS.textSecondary }}>
              I am a highly motivated person; whenever I start a task, I give it my full attention
              and effort. My motto is: ‘Don’t practice until you get it right, practice until you
              can’t get it wrong’. I like to learn and explore. My favourite part of software
              engineering is architecture. I love how services communicate with each other and how
              all the different pieces fit together. My favourite programming language is Java. I
              fell in love with it when I read <em>Object-Oriented Analysis and Design with
              Applications</em> by Grady Booch, which introduced me to the object-oriented paradigm
              and design patterns. My dream is to be part of a passionate team building cutting-edge
              tools that have an impact. I am seeking a challenging environment where I can
              collaborate with skilled people to solve meaningful problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
