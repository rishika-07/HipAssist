import React from "react";
import "./Footer.css";
import logo from './Images/logo.png'
import {FaTwitter} from 'react-icons/fa';
import {BiLogoLinkedinSquare} from 'react-icons/bi';
import {FaYoutube} from 'react-icons/fa'

function Footer() {
    return (
        <div className="FooterContainer">
            
            <div className="FooterContent">
                   <div className="logoContentLeft">
                     <img src={logo} style={{width:"50%"}}/>
                      <h2>Build intelligent, secure and accurate GenAI assistants for your customers, support and sales teams</h2>
                      <FaTwitter size={30} color="lightgray"/>
                      <span><BiLogoLinkedinSquare size={30}  color="lightgray"/></span>
                      <span><FaYoutube size={30}  color="lightgray"/></span>
                   </div>

                   <div className="logoContentright">

                      <div className="logoContentRightGrid">
                              <div className="products">
                              <h2>Products</h2>
                                   <ul>
                                    <li>KNO Plus</li>
                                    <li>KNO Widget</li>
                                   </ul>
                             </div>
                              
                              <div className="Company">
                              <h2>Company</h2>
                                   <ul>
                                    <li>About</li>
                                    <li>Careers</li>
                                    <li>Blog</li>
                                    <li>Our values</li>
                                    <li>Contact</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms of Use</li>
                                   </ul>
                              </div>

                     </div>

                  </div>
            </div>

        </div>
    );
}
export default Footer;