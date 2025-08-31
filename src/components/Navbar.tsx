import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavbarProps {
  onNameClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNameClick }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const firstName = "Myron";
  const lastName = "Ladyjenko";
  const firstNameLetters = firstName.split("");
  const lastNameLetters = lastName.split("");

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/15 backdrop-blur-md z-50 border-b border-white/10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="inline-flex items-center">
            <motion.button
              onClick={onNameClick}
              className="text-white hover:text-yellow-500 transition-colors duration-200 p-0 m-0 border-none bg-transparent appearance-none"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-base sm:text-4xl font-bold flex items-center">
                <span className="flex">
                  {firstNameLetters.map((letter, index) => (
                    <motion.span
                      key={`first-${index}`}
                      initial={{ color: "#FFFFFF" }}
                      animate={{
                        color: ["#FFFFFF", "#EFB000", "#FFFFFF"],
                      }}
                      transition={{
                        duration: 10.0,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: "easeInOut"
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
                <span className="mx-1" />
                <span className="flex">
                  {lastNameLetters.map((letter, index) => (
                    <motion.span
                      key={`last-${index}`}
                      initial={{ color: "#FFFFFF" }}
                      animate={{
                        color: ["#FFFFFF", "#EFB000", "#FFFFFF"],
                      }}
                      transition={{
                        duration: 10.0,
                        repeat: Infinity,
                        delay: (index + firstNameLetters.length) * 0.3,
                        ease: "easeInOut"
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </div>
            </motion.button>
          </div>
          
          <div className="flex items-center space-x-4 sm:space-x-8">
            <Link
              to="/home"
              className={`text-white hover:text-yellow-500 transition-colors duration-200 text-base sm:text-lg font-medium relative
                ${isActive('/home') ? 'text-yellow-500' : ''}`}
            >
              Home
              {isActive('/home') && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-500"
                  layoutId="underline"
                />
              )}
            </Link>
            <Link
              to="/reports"
              className={`text-white hover:text-yellow-500 transition-colors duration-200 text-base sm:text-lg font-medium relative
                ${isActive('/reports') ? 'text-yellow-500' : ''}`}
            >
              Reports
              {isActive('/reports') && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-500"
                  layoutId="underline"
                />
              )}
            </Link>
            <Link
              to="/about"
              className={`text-white hover:text-yellow-500 transition-colors duration-200 text-base sm:text-lg font-medium relative
                ${isActive('/about') ? 'text-yellow-500' : ''}`}
            >
              About
              {isActive('/about') && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-500"
                  layoutId="underline"
                />
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;