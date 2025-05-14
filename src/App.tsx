import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Reports from './pages/Reports';
import ReportPage from './pages/ReportPage';
import Navbar from './components/Navbar';
import LandingCard from './components/LandingCard';
import Background from './components/Background';

const App: React.FC = () => {
  const [showLanding, setShowLanding] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Reset to root path when landing card is shown
  // useEffect(() => {
  //   if (showLanding && location.pathname !== '/') {
  //     navigate('/', { replace: true });
  //   }
  // }, [showLanding, location.pathname, navigate]);

  const handleCloseLanding = () => {
    setShowLanding(false);
    navigate('/home');
  };

  const handleNameClick = () => {
    setShowLanding(true);
    navigate('/');
  };

  // Determine if background should be blurred based on current route
  const shouldBlur = !location.pathname.startsWith('/reports');

  return (
    <div className="relative min-h-screen">
      <Background isBlurred={shouldBlur} />
      
      {showLanding ? (
        <LandingCard onClose={handleCloseLanding} />
      ) : (
        <>
          <Navbar onNameClick={handleNameClick} />
          <main>
            <Routes>
              <Route index element={<LandingCard onClose={handleCloseLanding} />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/reports/:reportName" element={<ReportPage />} />
            </Routes>
          </main>
        </>
      )}
    </div>
  );
};

export default App;