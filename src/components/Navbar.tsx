import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import COLORS from '../styles/colors';

interface NavbarProps {
  onNameClick: () => void;
}

const NAV_ITEMS = [
  { to: '/home', label: 'Home' },
  { to: '/reports', label: 'Reports' },
  { to: '/about', label: 'About' },
];

const Navbar: React.FC<NavbarProps> = ({ onNameClick }) => {
  const { pathname } = useLocation();
  const isActive = (p: string) => pathname === p;

  return (
    <nav
      style={{
        background: `linear-gradient(180deg, ${COLORS.bgFrom}E6, ${COLORS.surface}E6)`,
        borderBottom: `5px solid ${COLORS.surfaceBorderGreen}`,
      }}
      className="fixed top-0 left-0 right-0 backdrop-blur-md z-50"
      aria-label="Main navigation"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand / Name — clean by default, gradient only on hover */}

          <button
            onClick={onNameClick}
            className="group select-none bg-transparent border-0 p-0 m-0 cursor-pointer"
            aria-label="Go to start"
          >
            <span
              className="text-2xl sm:text-3xl font-extrabold leading-none tracking-tight transition-colors"
              style={{ color: COLORS.textPrimary }}
            >
              <span
                className="inline-block transition-all duration-200 hover:scale-105"
                style={{
                  backgroundImage: `linear-gradient(
                        90deg,
                        ${COLORS.primary} 0%,
                        ${COLORS.primary} 25%,  
                        ${COLORS.orange} 80%,  
                        ${COLORS.orange} 100%
                      )`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                }}
              >
                Myron Ladyjenko
              </span>
            </span>
          </button>


          {/* Text links with active underline */}
          <div className="flex items-center gap-6 sm:gap-8">
            {NAV_ITEMS.map(({ to, label }) => {
              const active = isActive(to);
              return (
                <div key={to} className="relative">
                  <Link
                    to={to}
                    className="text-sm sm:text-base font-semibold"
                    style={{ color: active ? COLORS.textPrimary : COLORS.textSecondary }}
                  >
                    {label}
                  </Link>

                  {/* Active underline (shared layoutId for smooth slide) */}
                  {active && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full"
                      style={{
                        backgroundImage: `linear-gradient(90deg, ${COLORS.orange}, ${COLORS.primary})`,
                      }}
                      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                    />
                  )}

                  {/* Hover underline for inactive links only */}
                  {!active && (
                    <span
                      className="pointer-events-none absolute left-0 right-0 -bottom-1 h-[2px] rounded-full opacity-0 transition-opacity duration-150"
                      style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                    />
                  )}
                  <style>{`
                    .relative:hover > span { opacity: 1; }
                  `}</style>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
