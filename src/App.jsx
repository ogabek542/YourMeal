import { useState } from 'react'
import './App.css'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import Footer from "./Components/Footer/Footer"

function App() {

  return (
    <div >
        <Navbar/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default App
