import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Registration from "./pages/Registration";



function App() {
  return (
    <BrowserRouter>
   <div className="App">
     <Header></Header>
    <Routes>
        <Route path='/' index element={<Home />}/>
        <Route path='o-nama' element={<About />}/>
        <Route path="kontakt" element={<Contact/>} />
        <Route path="registracija" element={<Registration/>} />
    </Routes>
    <Footer></Footer>
   </div>
   </BrowserRouter>
  );
}

export default App;
