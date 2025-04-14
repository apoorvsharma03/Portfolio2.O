import React from 'react'
import Home from './assets/Home';
import Background from './assets/Background';
import NavigationMenu from './assets/NavigationMenu';
import AboutMe from './assets/AboutMe';
import Experiences from './assets/Experiences';
import Projects from './assets/Projects';
import Writings from './assets/Writings';
import Contact from './assets/Contact';

const App = () => {
  return (
    <div>
      <Background />
      <NavigationMenu />
      <Home />
      <AboutMe />
      <Experiences />
      <Projects />
      <Writings />
      <Contact />
    </div>
  )
}

export default App