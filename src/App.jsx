import React, { lazy, Suspense } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './Components/Loader/Loader';
import NavBar from './Components/NavBar/NavBar';

const HomeDashboard = lazy(() => import('./Pages/HomeDashboard/HomeDashboard'));
const Concept = lazy(() => import('./Pages/NavbarScreens/Concept/Concept'));
const Brand = lazy(() => import('./Pages/NavbarScreens/Brand/Brand'));
const Story = lazy(() => import('./Pages/NavbarScreens/Story/Story'));

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomeDashboard />} />
            <Route path="/concept" element={<Concept />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/story" element={<Story />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
