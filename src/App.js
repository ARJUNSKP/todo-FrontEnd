import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Landingpage from './Components/Landingpage';
import Home from './Components/Home';
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
