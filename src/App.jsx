
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


    import '../src/external/assets/js/vendor/jquary-3.6.0.min.js'
    import '../src/external/assets/js/vendor/bootstrap-bundle.js'
    import '../src/external/assets/js/vendor/imagesloaded-pkgd.js'
    import '../src/external/assets/js/vendor/waypoints.min.js'
    import '../src/external/assets/js/vendor/venobox.min.js'   
    import '../src/external/assets/js/vendor/odometer.min.js'  
    import '../src/external/assets/js/vendor/meanmenu.js' 
    import '../src/external/assets/js/vendor/jquery.isotope.js'
    import '../src/external/assets/js/vendor/wow.min.js'
    import '../src/external/assets/js/vendor/swiper.min.js'
    import '../src/external/assets/js/vendor/split-type.min.js'
    import '../src/external/assets/js/vendor/gsap.min.js'
    import '../src/external/assets/js/vendor/scroll-trigger.min.js'
    import '../src/external/assets/js/vendor/scroll-smoother.js'
    import '../src/external/assets/js/vendor/jquery.carouselTicker.js'
    import '../src/external/assets/js/vendor/nice-select.js'
    import '../src/external/assets/js/ajax-form.js'
    import '../src/external/assets/js/contact.js'
    import '../src/external/assets/js/main.js'


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
