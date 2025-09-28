import React from 'react';
import { Link } from 'react-router-dom';
import { reports } from '../data/reports';
import { motion } from 'framer-motion';
import COLORS from '../styles/colors';

const Reports: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-20" style={{ background: `linear-gradient(180deg, ${COLORS.bgVia}, ${COLORS.bgTo})` }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reports.map((report) => (
            <motion.div
              key={report.id}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl overflow-hidden border shadow-xl"
              style={{
                background: report.id === 'coming-soon' ? `linear-gradient(180deg, rgba(139,92,246,0.06), rgba(59,130,246,0.04))` : 'rgba(255,255,255,0.03)',
                borderColor: report.id === 'coming-soon' ? 'rgba(139,92,246,0.12)' : 'rgba(255,255,255,0.06)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.35)'
              }}
            >
              <Link to={report.id === 'coming-soon' ? '#' : `/reports/${report.id}`} className="block">
                <div className="h-[200px] relative">
                  {report.id === 'coming-soon' ? (
                    <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.06), rgba(59,130,246,0.05))' }}>
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-2">More Experience</h3>
                        <p className="text-gray-300">Coming Soon!</p>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-4">
                      <img
                        src={report.thumbnail}
                        alt={`${report.company} work term`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  )}
                </div>
                
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`${report.id === 'coming-soon' ? 'text-purple-300' : 'text-orange-300'} font-semibold text-lg`}>
                      {report.term}
                    </span>
                    <span className="text-gray-300 text-sm">{report.date}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{report.company}</h2>
                  <h3 className="text-lg mb-4" style={{ color: 'var(--text-secondary)' }}>{report.position}</h3>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`px-4 py-1.5 ${report.id === 'coming-soon' ? 'bg-purple-500/20 border-purple-500/30 text-purple-300' : 'bg-yellow-500/20 border-yellow-500/30 text-yellow-300'} border rounded-lg text-sm font-medium capitalize`}>
                      {report.workType}
                    </span>
                    <span className={`px-4 py-1.5 ${report.id === 'coming-soon' ? 'bg-blue-500/20 border-blue-500/30 text-blue-300' : 'bg-blue-500/20 border-blue-500/30 text-blue-300'} border rounded-lg text-sm font-medium capitalize`}>
                      {report.location}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {report.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-white/15 rounded-full text-sm font-medium text-gray-100"
                      >
                        {tech}
                      </span>
                    ))}
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