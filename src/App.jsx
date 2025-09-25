import React, { lazy, Suspense } from 'react'
import './App.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Loader from './Components/Loader/Loader'
import NavBar from './Components/NavBar/NavBar'

const HomeDashboard = lazy(() => import('./Pages/HomeDashboard/HomeDashboard'))

function App () {
  return (
    <>
      <Router>
        <NavBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<HomeDashboard />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
