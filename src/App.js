

import {  Image } from '@chakra-ui/react'
import logo from "./assets/logo-spacex.png";
import './App.css';
import { FooterApp } from './components/FooterApp';
import { Routes, Route} from 'react-router-dom';
import LaunchList from './components/LaunchList';
import LaunchDetails from './components/LaunchDetails';
import RocketDetails from './components/RocketDetails';




function App() {


  return (
    <>
      <Image src={logo} width={300} m={4}  />
      <Routes>
        <Route path='/' element={<LaunchList />} />
        <Route path='launch/:launchId' element={<LaunchDetails />} />
        <Route path='rockets/:rocketId' element={<RocketDetails />} />
      </Routes>

   
      
      <FooterApp />

    </>
  );
}

export default App;
