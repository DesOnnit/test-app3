import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Services from '../Services/Services';
import OurProjects from '../OurProjects/OurProjects'
import Team from '../Team/Team';
import TechnologyMap from '../TechnologyMap/TechnologyMap';
import Contacts from '../Contacts/Contacts';
import Industries from '../Industries/Industries';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  function handleBurgerOpen() {
    setIsOpen(true);
  }
  function handleBurgerClose() {
    setIsOpen(false);
  }

  const [isVisitable, setIsVisitable] = useState(true);
  let size = window.innerWidth
  useEffect(() => {
    window.addEventListener(`resize`, () => {
      size <= 1750 ? setIsVisitable(false) : setIsVisitable(true);
    })
  }, [])

  return (
    <div className="App">
      <NavBar
        hiden={isVisitable}
        open={handleBurgerOpen}
        close={handleBurgerClose}
        isOpen={isOpen} />
      <Header />
      <Services />
      <OurProjects />
      <Industries />
      <Team />
      <TechnologyMap />
      <Contacts />
    </div>
  );
}

export default App;
