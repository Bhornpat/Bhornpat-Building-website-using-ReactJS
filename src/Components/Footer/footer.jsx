import React, {useEffect} from "react";
import './footer.css';
import video from '../Assets/sea.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoTripAdvisor } from "react-icons/bi";
import { FiChevronRight } from "react-icons/fi";


import Aos from 'aos';              //npm i aos --save
import 'aos/dist/aos.css';


const Footer = () => {
     //create react hook to add a scroll animation..
     useEffect(() => {
        Aos.init({durations: 2000})
    },[])

    return (
       <section className="footer">
        <div className="videoDiv">
            <video src={video} loop autoPlay muted type="video/mp4"></video>            
        </div>

        <div className="secContent container">
            <div className="contactDiv flex">
                <div data-aos="fade-up" className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with us</h2>
                </div>

                <div className="inputDiv flex">
                    <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
                    <button data-aos="fade-up" className="btn flex" type="submit">
                    SEND<FiSend className="icon"/>
                    </button>
                </div>
            </div>

            <div data-aos="fade-up" className="footerCard flex">
                <div className="footerIntro flex">
                    <div className="logoDiv">
                        <a href="#" className="logo flex">
                        <MdOutlineTravelExplore className="icon" />Travel
                        </a>
                    </div>
                    <div className="footerParagraph">
                    The journey itself becomes a part of the adventure, as airports
                    and roads buzz with the excitement of fellow travelers, each carrying
                    their own traditions and stories. From savoring local holiday delicacies to witnessing 
                    unique customs and decorations, holiday travel creates memories that linger long after 
                    the decorations are packed away, making it a cherished and festive way to usher in the season.
                    </div>
                    <div className="footerSocials">
                    <AiOutlineTwitter className='icon'/>
                    <AiFillYoutube className='icon'/>
                    <AiFillInstagram className='icon'/>
                    <BiLogoTripAdvisor className='icon'/>
                    </div>
                </div>
                     
                <div className="footerLinks grid">
                            {/* Group one */}
                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                            <FiChevronRight className='icon' />Services 
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className='icon' />Insurance 
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className='icon' />Agency 
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className='icon' />Tourism 
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className='icon' />Payment 
                            </li>
                        </div>
                            {/* Group two */}
                        <div className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                            <FiChevronRight className='icon' />Bookings 
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className='icon' />RentCars 
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className='icon' />HotelWorld 
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className='icon' />Trivago 
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className='icon' />TripAdvisor 
                            </li>

                        </div>
                            {/* Group three */}
                        <div className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                            <FiChevronRight className='icon' />Bangkok 
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className='icon' />London 
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className='icon' />California 
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className='icon' />Tokyo 
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className='icon' />Europe 
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className='icon' />Oceania 
                            </li>
                        </div>
                </div>

                <div className="footerDiv flex">
                    <small>BEST TRAVEL WEBSITE THEME</small>
                    <small>COPYRIGHTS RESERVED 2023</small>
                </div>

            </div>

        </div>
       </section>
    )
}

export default Footer