import React from 'react';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Reports from './pages/Reports';
import ReportPage from './pages/ReportPage';
import Navbar from './components/Navbar';
import LandingCard from './components/LandingCard';

function WithNavbar() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar onNameClick={() => navigate('/')} />
      <main>
        {}
        <Outlet />
      </main>
    </>
  );
}

const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
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
