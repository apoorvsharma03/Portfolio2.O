import React from 'react'
import Background from './assets/Background'
import Navbar from './assets/NavigationMenu/Navbar'
import Home from './assets/Home/Home'
import AboutMe from './assets/AboutMe/AboutMe'

const App = () => {
  return (
    <div>
      <Background/>
      <Navbar />
      <Home />
      <AboutMe />
    </div>
  )
}

export default App