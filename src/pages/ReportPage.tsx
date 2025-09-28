import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { reports } from '../data/reports';
import COLORS from '../styles/colors';

const ReportPage: React.FC = () => {
  const { reportName } = useParams<{ reportName: string }>();
  const report = reports.find((r) => r.id === reportName);

  // Not found
  if (!report) {
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
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="font-extrabold mb-3 tracking-tight"
            style={{ color: COLORS.textPrimary, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
          >
            Report Not Found
          </h1>
          <p className="mb-8" style={{ color: COLORS.textSecondary }}>
            The report you're looking for doesn't exist.
          </p>
          <Link
            to="/reports"
            className="inline-block rounded-xl px-5 py-3 border transition-colors"
            style={{
              color: COLORS.textPrimary,
              borderColor: COLORS.surfaceBorderGreen,
              backgroundColor: 'transparent',
            }}
          >
            ← Back to Reports
          </Link>
        </div>
      </div>
    );
  }

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
      <div className="max-w-5xl mx-auto">
        {/* Back link */}
        <Link
          to="/reports"
          className="inline-block mb-8 rounded-lg px-3 py-1 transition-colors"
          style={{ color: COLORS.textPrimary }}
        >
          ← Back to Reports
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
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
          <div className="p-6 sm:p-8 md:p-10">
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
              <div>
                <h1
                  className="font-extrabold tracking-tight mb-2"
                  style={{ color: COLORS.textPrimary, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.1 }}
                >
                  {report.company}
                </h1>
                <h2
                  className="mb-4"
                  style={{ color: COLORS.textSecondary, fontSize: 'clamp(1.125rem, 2.2vw, 1.375rem)' }}
                >
                  {report.position}
                </h2>

                <div className="flex flex-col gap-1.5">
                  <span
                    className="font-semibold"
                    style={{ color: '#FFE1A6', fontSize: 'clamp(1rem, 1.8vw, 1.1rem)' }} // amber for term
                  >
                    {report.term}
                  </span>
                  <span style={{ color: COLORS.textSecondary, fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)' }}>
                    {report.date}
                  </span>
                </div>
              </div>

              {/* Badges (distinct colors) */}
              <div className="flex md:flex-col gap-3">
                {/* Work Type → Indigo */}
                <span
                  className="px-4 py-2 border rounded-lg text-sm font-medium capitalize text-center"
                  style={{
                    backgroundColor: 'rgba(139,92,246,0.16)',
                    borderColor: 'rgba(139,92,246,0.30)',
                    color: '#DADAFD',
                  }}
                >
                  {report.workType}
                </span>
                {/* Location → Cyan */}
                <span
                  className="px-4 py-2 border rounded-lg text-sm font-medium capitalize text-center"
                  style={{
                    backgroundColor: 'rgba(6,182,212,0.16)',
                    borderColor: 'rgba(6,182,212,0.30)',
                    color: '#B9F4FF',
                  }}
                >
                  {report.location}
                </span>
              </div>
            </div>

            {/* Divider + accent bar */}
            <div className="mb-8">
              <div
                className="h-1 w-24 rounded-full"
                style={{ backgroundImage: `linear-gradient(90deg, ${COLORS.orange}, ${COLORS.primary})` }}
              />
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {report.sections.map((section, idx) => (
                <section key={idx}>
                  <h3
                    className="font-extrabold tracking-tight mb-3"
                    style={{ color: COLORS.textPrimary, fontSize: 'clamp(1.25rem, 2.4vw, 1.6rem)', lineHeight: 1.15 }}
                  >
                    {section.title}
                  </h3>
                  <div
                    className="whitespace-pre-line leading-relaxed"
                    style={{ color: COLORS.textPrimary, fontSize: 'clamp(1rem, 1.6vw, 1.05rem)' }}
                  >
                    {section.content}
                  </div>

                  {section.images?.length ? (
                    <div className="mt-6 grid sm:grid-cols-2 gap-4">
                      {section.images.map((image, imgIndex) => (
                        <figure key={imgIndex} className="rounded-xl overflow-hidden border" style={{ borderColor: COLORS.surfaceBorderGreen }}>
                          <img src={image.src} alt={image.alt} className="w-full h-auto block object-cover" />
                          {image.caption && (
                            <figcaption className="px-3 py-2 text-center" style={{ color: COLORS.textSecondary }}>
                              {image.caption}
                            </figcaption>
                          )}
                        </figure>
                      ))}
                    </div>
                  ) : null}
                </section>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReportPage;
