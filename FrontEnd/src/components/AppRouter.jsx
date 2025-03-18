import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Detail from "../pages/Detail"
import Login from "../pages/Login"
import Product from "../pages/Product"
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';
import Carousel from "./Carousel"
import Register from '../pages/Register';
import ToDo from '../pages/ToDo'
import CardLogIn from './CardLogIn';
// import Register from '../pages/register';
//////////////////////////////////////
const AppRouter = () => {
  return (
    <div>
     
      <BrowserRouter>
      
      <Header></Header>
      <Navbar/>
     
      <Routes>
            <Route path='/' element={<Home/>}> </Route>
            <Route path='home' element={<Home/>}> </Route>
            <Route path='about' element={<About/>}> </Route>
            <Route path='contact' element={<Contact/>}> </Route>
            <Route path='detail' element={<Detail/>}> </Route>
            <Route path='login' element={<Login/>}> </Route>
            <Route path='product' element={<Product/>}> </Route>
            <Route path='register' element={<Register/>}> </Route>
            <Route path='todo' element={<ToDo/>}> </Route>
            <Route path='CardLogIn' element={<CardLogIn/>}> </Route>
      </Routes>   
      </BrowserRouter>
      <div>
      {/* <Carousel/> */}

      <Footer/>
      </div>

    </div>
    
  )
}
export default AppRouter;
