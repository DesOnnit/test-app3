import React, {useEffect, useState} from 'react'
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Services from '../Services/Services'
import './App.css';

function App() {

  const [isVisitable,setIsVisitable] = useState(true);
  useEffect(() => {
    window.addEventListener(`resize`, () => {
      let size = window.innerWidth
      size <=1750? setIsVisitable(false):setIsVisitable(true);
    })},[])
  return (
    <div className="App">
      <NavBar
      hiden={isVisitable}/>
      <Header/>
      <Services/>  
    </div>
  );
}

export default App;
