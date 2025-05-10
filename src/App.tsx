// import React from 'react';
// import Footer from './components/Footer.jsx';
// import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Reports from './pages/Reports.js';
import { Route, Routes } from 'react-router-dom';
// import Stories from './pages/Stories.jsx'
// import StoryPage from './pages/StoryPage.jsx';
// import Reports from './pages/Reports.jsx';
// import ReportPage from './pages/ReportPage.jsx';
// import { Route, Routes } from 'react-router-dom';
import ReportPage from './pages/ReportPage.js';


const App = () => {
  return (
    <div className="App">
      <div className='NavbarPlusRoutes'>
        {/* <Navbar/> */}
        <div>
            <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="reports" element={<Reports />} />
                <Route path="reports/:reportName" element={<ReportPage />} />
                
                {/* <Route path="stories" element={<Stories />} />
                <Route path="stories/:storyId" element={<StoryPage />} />
                <Route path="reports" element={<Reports />} />
                <Route path="reports/:reportNum" element={<ReportPage />} /> */}
            </Route>
            </Routes>
        </div>
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;