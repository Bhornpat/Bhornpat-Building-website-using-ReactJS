import React, {useState} from "react";
import './navbar.css';
import { MdOutlineTravelExplore } from "react-icons/md";        //use Terminal "npm i react-icons" 
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";



const Navbar = () => {
    const [active , setActive] = useState('navBar');

    //Fuction to toggle navBar
    const showNav = () => {
        setActive((prevState) => (prevState === 'navBar' ? 'activeNavbar' : 'navBar'));
    }
     //Fuction to toggle navBar
    const removeNavbar = () => {
        setActive((prevState) => (prevState === 'navBar' ? 'removeNavbar' : 'navBar'));
    }

    return (
        <section className="navBarSection">
            <header className="header flex">

                <div className="logoDiv">
                    <a href="#" className="logo">
                        <h1><MdOutlineTravelExplore className="icon"/>        
                         Travel</h1>
                     </a>
                </div>

                <div className={`navBar ${active}`}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li> 

                        <li className="navItem">
                            <a href="#" className="navLink">Packages</a>
                        </li> 

                        <li className="navItem">
                            <a href="#" className="navLink">Shop</a>
                        </li> 

                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Pages</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">News</a>
                        </li> 
                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>

                        <button className="btn">
                            <a href="#">BOOK NOW </a> 
                        </button>
                    </ul>
            
                    <div onClick={removeNavbar} className="closeNavbar">
                        <IoMdCloseCircle className='icon'/>
                    </div>
            </div>
                    <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className='icon'/>
                    </div>
             
            </header>
        </section>
    )
}

export default Navbar

