import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { reports } from '../data/reports';
import COLORS from '../styles/colors';

type RGB = { bg: string; border: string; text: string };

// Simple keyword-based palette for technology chips
const techColor = (t: string): RGB => {
  const x = t.toLowerCase();

  // Languages
  if (/(java|spring|sql|c|python|javascript|go)\b/.test(x))
    return { bg: 'rgba(34,197,94,0.18)', border: 'rgba(34,197,94,0.32)', text: '#BFEFCB' }; // green

  // Tools
  if (/(docker|kubernetes|jenkins|gardener|postgres|mysql|cassandra|redis|kafka|aws|gcp|oracle db)\b/.test(x))
    return { bg: 'rgba(245,158,11,0.18)', border: 'rgba(245,158,11,0.32)', text: '#FFE1A6' }; // amber

  // Frameworks
  if (/(spring boot|nodejs|flask|guice|pytorch|next|junit)\b/.test(x))
    return { bg: 'rgba(59,130,246,0.18)', border: 'rgba(59,130,246,0.32)', text: '#CFE2FF' }; // blue

  // Default
  return { bg: 'rgba(148,163,184,0.16)', border: 'rgba(148,163,184,0.28)', text: '#E5EEF6' }; // slate
};

const Reports: React.FC = () => {
  return (
    <div
      className="min-h-screen pt-20 md:pt-24 pb-20 px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: `
          radial-gradient(900px 420px at 80% 92%, rgba(245,158,11,0.06), transparent 60%),
          linear-gradient(135deg, ${COLORS.bgFrom}, ${COLORS.bgVia}, ${COLORS.bgTo})
        `,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reports.map((report) => (
            <motion.div
              key={report.id}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="rounded-2xl overflow-hidden border"
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
              <Link to={`/reports/${report.id}`} className="block cursor-pointer">
                {/* Top visual */}
                <div
                  className="h-[200px] relative flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, rgba(34,197,94,0.06), rgba(245,158,11,0.06))`,
                    borderBottom: `1px solid ${COLORS.surfaceBorderGreen}`,
                  }}
                >
                  <img
                    src={report.thumbnail}
                    alt={`${report.company} work term`}
                    className="max-w-[70%] max-h-[70%] object-contain"
                    style={{ filter: 'saturate(1.02)' }}
                  />
                </div>

                {/* Body */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="font-semibold text-lg"
                      style={{ color: '#FFE1A6' }}
                    >
                      {report.term}
                    </span>
                    <span className="text-sm" style={{ color: COLORS.textSecondary }}>
                      {report.date}
                    </span>
                  </div>

                  <h2
                    className="font-extrabold mb-1 tracking-tight"
                    style={{
                      color: COLORS.textPrimary,
                      fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)',
                      lineHeight: 1.15,
                    }}
                  >
                    {report.company}
                  </h2>
                  <h3
                    className="mb-4"
                    style={{
                      color: COLORS.textSecondary,
                      fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                    }}
                  >
                    {report.position}
                  </h3>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {report.technologies.map((tech) => {
                      const c = techColor(tech);
                      return (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-full text-sm font-semibold border"
                          style={{
                            backgroundColor: c.bg,
                            borderColor: c.border,
                            color: c.text,
                            letterSpacing: '0.2px',
                          }}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
