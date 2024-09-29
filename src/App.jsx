import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <Aboutus/>
    </>
  )
}

export default App
