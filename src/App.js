import React from "react";
import {BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Registration from "./pages/Registration/Registration";
import Prijava from "./pages/Prijava";
import { Container } from 'react-bootstrap';



function App() {
  return (
    <Container className="bg-light">
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='o-nama' element={<About />}/>
          <Route path="kontakt" element={<Contact/>} />
          <Route path="registracija" element={<Registration/>} />
          <Route path="prijava" element={<Prijava/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;
