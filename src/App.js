import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Help from './Components/Help'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import './App.css'

const App = () => {
  
  return (
    <>
      <BrowserRouter>
                <Navbar/>
                  <Routes>
                    <Route path={"/home"} element={<Home />}></Route>
                    <Route path={"/about"} element={<About />}></Route>
                    <Route path={"/contact"} element={<Contact />}></Route>
                    <Route path={"/help"} element={<Help />}></Route>
                </Routes>

            </BrowserRouter>
    </>
  )
}

export default App;
