import React from "react";
import {BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home/Home";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer";
import Form from "./pages/Registration/Form";
import Prijava from "./pages/Login/LoginPage";
import PetKlub from "./pages/PetKlub";
import Ljubimac from "./pages/Ljubimac";
import PetsAndProducts from "./pages/PetsAndProducts/PetsAndProducts";



function App() {
  return (
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='o-nama' element={<About />}/>
          <Route path="kontakt" element={<Contact/>} />
          <Route path="registracija" element={<Form/>} />
          <Route path="prijava" element={<Prijava/>} />
          <Route path="pet-klub" element={<PetKlub/>} />
          <Route path="ljubimac" element={<Ljubimac/>} />
          <Route path="pats-and-products" element={<PetsAndProducts/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
