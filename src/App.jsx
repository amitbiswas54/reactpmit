
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from "../src/components/About"
import Contact from './components/Contact'
import Hero from './components/pages/Hero'
import WorkProces from './components/pages/WorkProces'
import Home from './components/pages/Home'
import ServiceProvider from './components/pages/ServiceProvider'
import Header from './components/Header'
import Footer from './components/Footer'



function App() {
  
  return (
    <>
<BrowserRouter > 
<Header/>
<Home/>


  <Routes>

    <Route exact="/" element={<Home/>} />
    <Route exact="/workspace" element={<WorkProces/>} />
    <Route exact="/serviceprovider" element={<ServiceProvider/>} />
  
    <Route exact="/contact" element={<Contact/>} />

  </Routes>
    <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
