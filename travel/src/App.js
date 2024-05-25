import React from 'react';
import './app.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

const App = () => {
    return (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Main" element={<Main />} />           
          </Routes>
          <Footer/>
        </div>
      );
}
export default App