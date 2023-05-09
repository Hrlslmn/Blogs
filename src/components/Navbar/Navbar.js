import './Navbar.css'
import { useState } from 'react';

const Navbar = () => {
    const[toggled,setToggled]=useState(false)
    const logo = "--LOGO--"
    return ( 
        <nav className="navbar">
            <h1>My Blog</h1>
            <h2 className="navLogo">{logo}</h2>
            <div className={toggled ? "navLinkShow":"navLink"}>
                <a href="/">Home</a>
                <a href="/Create">New Blog</a>
                <a href="/About">About Us</a>
            </div>
            <button className='toggle-btn' onClick={setToggled[true]}>
                <div className='toggle-line'></div>
                <div className='toggle-line'></div>
                <div className='toggle-line'></div>
            </button>
        </nav>
     );
}
 
export default Navbar;