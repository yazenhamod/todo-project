import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Main CSS
import './App.css';

// Pages
import Home from './Pages/Home/home';
// import Login from './Pages/Login/login';
import Register from './Pages/Register/register';

// Components


// Main Function
function App() {

  return (
    <div className="outer-wrapper">
      <div className='wrapper'>
        <Router>
          <Routes>

          <Route path='' element={Home()} />
          {/* <Route path='/login' element={Login()} /> */}
          <Route path='/register' element={Register()} />

          {/* Backend Disabled */}
          <Route path='/sitenotfound' element={<div>site is under construction</div>} />

          {/* Page Doesnt Exist */}
          <Route path='/*' element={<div>404 not available</div>} />

          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;