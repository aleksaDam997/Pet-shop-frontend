import React from "react";
import {BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home/Home";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer";
import Registration from "./pages/Registration";
import Prijava from "./pages/Login/Login";
import PetKlub from "./pages/PetKlub";
import Ljubimac from "./pages/Ljubimac";



function App() {
  return (
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='o-nama' element={<About />}/>
          <Route path="kontakt" element={<Contact/>} />
          <Route path="registracija" element={<Registration/>} />
          <Route path="prijava" element={<Prijava/>} />
          <Route path="pet-klub" element={<PetKlub/>} />
          <Route path="ljubimac" element={<Ljubimac/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
