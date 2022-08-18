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
import AboutUs from "./pages/About/AboutUs";
import FirstLocation from "./pages/Location/FirstLocation";
import SecondLocation from "./pages/Location/SecondLocation";
import ThridLocation from "./pages/Location/ThridLocation";
import { PetPage } from "./components/PetPage/PetPage";
import { CartPage } from "./pages/Cart/Cart";
import AdministratorDashboardPage from "./pages/AdministratorDashboardPage/AdministratorDashboardPage";
import AdministratorPetsPage from "./pages/AdministratorPetsPage/AdministratorPetsPage";
import AdministratorAddEditPetPage from "./pages/AddEditPetPage/AddEditPetPage";
import Example from "./components/PetPage/Example/Example";



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
          <Route path="/pet/:id" element={<PetPage/>} />
          <Route path="cart" element={<CartPage />} />

          <Route path='administrator_dashboard' element={<AdministratorDashboardPage />}/>
          <Route path='administrator_dashboard/pets' element={<AdministratorPetsPage />}/>
          <Route path='administrator_dashboard/pet/:id' element={<AdministratorAddEditPetPage />} />
          <Route path='administrator_dashboard/pet' element={<AdministratorAddEditPetPage />} />


          <Route path="example" element={<Example />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
