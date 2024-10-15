import React from 'react';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Login from './Login';

import Home from './home';
import UserProfile1 from './newprofile';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="/profile" element={<UserProfile1 />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
   
  </BrowserRouter>
  
  );
}

export default App;
