import React from "react";
import './styles/style.css';
// import {NavLink} from 'react-router-dom';
import instagramIcon from './styles/instagram-icon.png';
import facebookIcon from './styles/facebook-icon.png';
import twitterIcon from './styles/twitter-icon.png';
import linkedInIcon from './styles/linkedIn-icon.png';
import youtubeIcon from './styles/youtube-icon.png';

function Footer() {
    return (
    <div className="footer">
       <h3>Company Name</h3> 
       <div className = "socialMedia-container">
            <div><img src = {instagramIcon} alt = "Instagram Icon" /></div>
            <div><img src = {facebookIcon} alt="Facebook Icon" /> </div>
            <div><img src = {twitterIcon} alt = "Twitter Icon" /></div>
            <div><img src = {linkedInIcon} alt = "LinkedIn Icon" /></div>
            <div><img src = {youtubeIcon} alt="Youtube Icon" /></div>
        </div>

        <div>
            <div className = "columns-container">
                <div className = "column1-container">
                    <div className="footer-title">Menu</div>
                    <div className="footer-item"><button className="footer-btn-container">Categories</button></div>
                    <div className="footer-item"><button className="footer-btn-container">Deals</button></div>
                    <div className="footer-item"><button className="footer-btn-container">Shop</button></div>
                    <div className="footer-item"><button className="footer-btn-container"> Contacts</button></div>
                </div>

                <div className = "column2-container">
                    <div className="footer-title">Services</div>
                    <div className="footer-item"><button className="footer-btn-container">Terms of Services</button></div>
                    <div className="footer-item"><button className="footer-btn-container">Refund Policy</button></div>
                    <div className="footer-item"><button className="footer-btn-container">Private Policy</button></div>
                    <div className="footer-item"><button className="footer-btn-container">FAQs</button></div>
                </div>

                <div className="column3-container">
                    <div className="footer-title">Contact Us</div>
                    <div className="footer-item"><button>+1 ### ### ###</button></div>
                    <div className="footer-item"><button>companyemail.com</button></div>
                </div>
            </div>
        </div>

        <div>
            <p>2023 Company Name. All Rights Reserved</p>
        </div>
    </div>
    );
}

export default Footer;