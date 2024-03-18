import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HeroSection from './Components/HeroSection';
import AboutUsTestimonial from './Components/AboutUsTestimonial';
import Marquee from './Components/Marquee';
import Navbar from './Components/Navbar';
import AboutUs2 from './Components/AboutUs2';
import BronzeCourse from './Components/BronzeCourse';
import Gallery from './Components/Gallery';
import WhyUs from './Components/WhyUs';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Navbar/>
  <HeroSection/>
  
  <AboutUsTestimonial/>
  <Marquee/>
  
  <BronzeCourse/>
  <AboutUs2/>
  <WhyUs  />
  <Marquee/>
  <Gallery/>
  
  
  </React.StrictMode>,
)
