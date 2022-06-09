import React from "react";
import {BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom'
import Contact from "./pages/Contact";
import Home from "./pages/Home/Home";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer";
import Form from "./pages/Registration/Form";
import Prijava from "./pages/Login/LoginPage";
import PetKlub from "./pages/PetKlub";
import Ljubimac from "./pages/Ljubimac";
import PetsAndProducts from "./pages/PetsAndProducts/PetsAndProducts";
import AboutUs from "./pages/AboutUs";
import FirstLocation from "./pages/Location/FirstLocation";
import SecondLocation from "./pages/Location/SecondLocation";
import ThridLocation from "./pages/Location/ThridLocation";



function App() {
  return (
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="kontakt" element={<Contact/>} />
          <Route path="registracija" element={<Form/>} />
          <Route path="prijava" element={<Prijava/>} />
          <Route path="pet-klub" element={<PetKlub/>} />
          <Route path="ljubimac" element={<Ljubimac/>} />
          <Route path="pats-and-products" element={<PetsAndProducts/>} />
          <Route path="o-nama" element={<AboutUs/>} />
          <Route path="prva-prodavnica" element={<FirstLocation/>} />
          <Route path="druga-prodavnica" element={<SecondLocation/>} />
          <Route path="treca-prodavnica" element={<ThridLocation/>} />

        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
