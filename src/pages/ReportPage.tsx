import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { reports } from '../data/reports';
import { motion } from 'framer-motion';
// import type { WorkTermReport } from '../types/report';

const ReportPage: React.FC = () => {
  const { reportName } = useParams<{ reportName: string }>();
  const report = reports.find(r => r.id === reportName);

  if (!report) {
    return (
      <div className="min-h-screen pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Report Not Found</h1>
            <p className="text-gray-300 mb-8">The report you're looking for doesn't exist.</p>
            <Link to="/reports" className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              Back to Reports
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-4xl mx-auto">
        <Link to="/reports" className="inline-block mb-8 text-gray-300 hover:text-white transition-colors">
          ← Back to Reports
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 shadow-xl shadow-black/20"
        >
          <div className="p-8 sm:p-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{report.company}</h1>
                <h2 className="text-xl sm:text-2xl text-gray-200 mb-4">{report.position}</h2>
                <div className="flex flex-col gap-2 mb-6">
                  <span className="text-yellow-500 font-semibold text-lg">{report.term}</span>
                  <span className="text-gray-300 text-lg">{report.date}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-3">
                <span className="px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 rounded-lg text-sm font-medium capitalize">
                  {report.workType}
                </span>
                <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-lg text-sm font-medium capitalize">
                  {report.location}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {report.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/15 hover:bg-white/20 transition-colors rounded-lg text-sm font-medium text-gray-100"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              {report.sections.map((section, index) => (
                <section key={index}>
                  <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                  <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                  {section.images && section.images.length > 0 && (
                    <div className="mt-6 space-y-4">
                      {section.images.map((image, imgIndex) => (
                        <figure key={imgIndex} className="my-6 flex flex-col items-center">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="rounded-lg w-1/2 h-auto"
                          />
                          {image.caption && (
                            <figcaption className="text-center text-gray-400 mt-2">
                              {image.caption}
                            </figcaption>
                          )}
                        </figure>
                      ))}
                    </div>
                  )}
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