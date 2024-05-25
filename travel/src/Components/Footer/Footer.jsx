import React, {useEffect} from "react";
import './footer.css'
import './footer.scss'
import video from '../../images/video.mp4'
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer =() =>{
    useEffect(() =>{
        Aos.init({duration: 2000})
   }, [])
    return(
        <section className='footer'>
            <div className='videoDiv'>
                <video src =  {video} loop autoPlay muted type ="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small> KEEP IN TOUCH </small>
                        <h2>Travel with us</h2>
                    </div>
                    <div data-aos="fade-up" className="inputDiv flex">
                        <input type ="text"  placeholder='Enter Email Address' />
                        <button className='btn flex' type='submit'>
                           SEND  <FiSend className='icon'/>
                        </button>
                    </div>
                </div>

                <div data-aos="fade-up" className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className='logo flex'>
                               <MdOutlineTravelExplore className="icon"/> VoyageVault 
                            </a>
                        </div>
                        <div className="footerParagraph">
                        Thank You for Visiting
We appreciate your time and interest in our services. If you have any questions or need further assistance, don't hesitate to contact us.

Stay connected with us on social media for the latest updates and offers.
                        </div>
                        <div className="footerSocials flex">
                        <AiOutlineTwitter className="icon"/>
                        <AiFillYoutube className="icon"/>
                        <AiFillInstagram className="icon"/>
                        <FaTripadvisor className="icon"/>
                    </div>
                    </div>
                    <div className= "footerLinks grid">
                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Insurances
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Payment
                            </li>
                        </div>
                        <div className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                London
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                California
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Indonesia
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Europe
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Oceania
                            </li>
                        </div>
                        <div className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Bookings
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Rentcars
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                HostelWorld
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                TripAdvisor
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Trivago
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHT RESERVED </small>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
export default Footer