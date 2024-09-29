import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Announcements from './Components/Announcements';
import NewsletterPopup from './Components/NewsletterPopup';
import Academics from './Components/Academics';
import Gallery from './Components/Gallery';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <Aboutus/>
      <Academics/>
      <Gallery/>
      <Contactus/>  
      <Announcements/>
    </>

  )
}

export default App
