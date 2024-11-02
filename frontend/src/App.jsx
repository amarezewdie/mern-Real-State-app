import React from 'react'
 import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Project from './pages/Project';
import About from './pages/About';
import SignUp from './pages/SignUp';
import DashBoard from './pages/DashBoard';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/dashboard' element={<DashBoard />} />
      </Routes>
    </div>
  )
}

export default App
