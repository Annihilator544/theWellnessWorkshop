import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HeroSection from './Components/HeroSection';
import AboutUsTestimonial from './Components/AboutUsTestimonial';
import Course from './Components/Course';
import Marquee from './Components/Marquee';
import Navbar from './Components/Navbar';
import AboutUs2 from './Components/AboutUs2';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Navbar/>
  <HeroSection/>
  
  <AboutUsTestimonial/>
  <Marquee/>
  
  <Course/>
  <AboutUs2/>
  </React.StrictMode>,
)
