import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';

import './App.css';


import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route> 
          <Route exact path='/About' element={<About />}></Route>
          <Route exact path='/Services' element={<Services />}></Route>
          <Route exact path='/Profile' element={<Profile />}></Route>
          <Route exact path='/Contact' element={<Contact />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
