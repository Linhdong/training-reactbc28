import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import './index.css'
//Cấu hình react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Contact from './page/Contact/Contact';
import Home from './page/Home/Home';
import About from './page/About/About'
import ReactForm from './page/ReactForm/ReactForm'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<App />}>
        {/* <Route path='' element={<Home />}> </Route> */}
        <Route index element={<Home />}> </Route>
        <Route path='contact' element={<Contact />}> </Route>
        <Route path='about' element={<About />}> </Route>
        <Route path='reactform' element={<ReactForm />}> </Route>
        <Route path="*" element={<Navigate to="" />}></Route>
      </Route>
      {/* <Route path='contact' element={<Contact />}>

      </Route> */}
    </Routes>
  </BrowserRouter>
);

