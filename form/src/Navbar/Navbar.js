// 



import './Navbar.css';
import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";

import Form from '../Form/Form';
import Get from '../Form/Get/Get';
import Prgtheme from '../Prgtheme/Prgtheme';
import Mode from '../Mode/Mode';
import Home from '../Home/Home';
import Coordinater from '../Coordinater/Coordinater';

function Navbar() {
    // State for toggle
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle function
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the state
    };

    return (
        <>
            <div className="navbar">
                <div className="clou">
                    <h2>Event Recorder </h2>
                </div>
                {/* Toggle Button */}
                <div className="menu-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <span id="close-icon" className="icon">✕</span> // Close icon
                    ) : (
                        <span id="menu-icon" className="icon">☰</span> // Hamburger icon
                    )}
                </div>
                {/* Nav List */}
                <nav>
                    <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
                        {/* <li className='she'>  <strong>Event Record </strong></li> */}
                        <li><Link to="/Home" onClick={toggleMenu}>HOME</Link></li>
                        <li><Link to="/Form" onClick={toggleMenu}>FORM</Link></li>
                        <li><Link to="/Get" onClick={toggleMenu}>GET</Link></li>
                        <li><Link to="/Mode" onClick={toggleMenu}>Activity name</Link></li>
                        <li><Link to="/Prgtheme" onClick={toggleMenu}>Program Theme</Link></li>
                        <li><Link to="/Coordinater" onClick={toggleMenu}>Academic Year</Link></li>
                    </ul>
                </nav>
            </div>

            <Routes>
                <Route exact path='/Home' element={<Home />}></Route>
                <Route exact path='/Get' element={<Get />}></Route>
                <Route exact path='/Form' element={<Form />}></Route>
                <Route exact path='/Mode' element={<Mode />}></Route>
                <Route exact path='/Prgtheme' element={<Prgtheme />}></Route>
                <Route exact path='/Coordinater' element={<Coordinater />}></Route>
            </Routes>
        </>
    );
}

export default Navbar;
