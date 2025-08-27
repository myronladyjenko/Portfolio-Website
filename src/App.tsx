import React from 'react';
import { Routes, Route, useNavigate, useLocation, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Reports from './pages/Reports';
import ReportPage from './pages/ReportPage';
import Navbar from './components/Navbar';
import LandingCard from './components/LandingCard';
import Background from './components/Background';

function WithNavbar() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar onNameClick={() => navigate('/')} />
      <main>
        {/* Children will be rendered here */}
        <Outlet />
      </main>
    </>
  );
}

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const shouldBlur = !location.pathname.startsWith('/reports');
  const atRoot = location.pathname === '/';

  return (
    <div className="relative min-h-screen">
      {!atRoot && <Background isBlurred={shouldBlur} />}

      <Routes>
        <Route
          path="/"
          element={
            <LandingCard
              onClose={() => {
                navigate('/home');
              }}
            />
          }
        />

        <Route element={<WithNavbar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/reports/:reportName" element={<ReportPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
