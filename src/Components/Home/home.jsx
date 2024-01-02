import React, {useEffect} from "react";
import './home.css';
import video from '../Assets/Videobay.mp4';             // video from pixabay
import { CiLocationOn } from "react-icons/ci"; 
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTripadvisor } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import Aos from 'aos';              //npm i aos --save
import 'aos/dist/aos.css';



const Home = () => {
    //create react hook to add a scroll animation..
    useEffect(() => {
        Aos.init({durations: 2000})
    },[])

    return (
        <section className="Home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>
          
            <div className="homeContent">
                <div data-aos="fade-up" className="textDiv">
                    <span data-aos="fade-up" className="smallText">
                        Our Packages
                    </span>
                    <h1 data-aos="fade-up" className="homeTitle">
                        Search Your <br /> Holiday
                    </h1>
                </div>
                
                     <div  data-aos="fade-up" className="cardDiv-grid">
                        <div className="destinationInput">
                            <label htmlFor="city" className="city">Search your destination:</label>
                            <div className="input-flex">
                                <input type="text" placeholder="Enter name here..."/><CiLocationOn className="icon" />
                            </div>
                       </div>

                        <div className="dateInput">
                            <label htmlFor="date" className="date">Select your date:</label>
                            <div className="input-flex">
                                <input type="date" />
                            </div>
                        </div>

                        <div className="priceInput">
                            <div className="label-total-flex">
                                <label  htmlFor="price">Max price:</label>
                                 <h4  className="total">฿100,000</h4>
                            </div>
                            <div className="input-flex">
                                <input className="rangedesign" type="range" max='100000' min='1000' />
                            </div>
                         </div>
                
                            <div className="searchOption flex">
                              <HiFilter className="icon"/>
                              <span>MORE FILTERS</span>
                            </div>                          
                    </div> 
                    
                 <div data-aos="fade-up" className="homeFooeterIcon-flex">
                        <div className="rightIcon">
                        <FiFacebook className='icon'/>
                        <IoLogoInstagram className='icon'/>
                        <FaTripadvisor className='icon'/>
                        </div>
                        <div className="leftIcon">
                        <BsList className='icon'/>
                        <TbApps className='icon'/>
                        </div>
                </div>  
      </div>    
 </section>
   
   
   )
}

export default Home