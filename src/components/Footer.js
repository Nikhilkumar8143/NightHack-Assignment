import React from 'react';
import logo from '../assets/img/Vector.svg';
import image7 from '../assets/img/image 7.svg';
import image9 from '../assets/img/image 9.svg';
import image10 from '../assets/img/image 10.svg';
import image11 from '../assets/img/image 11.svg';
import image13 from '../assets/img/image 13.svg';
import image14 from '../assets/img/image 14.svg';


const Footer = (props) => {
    return (
        <footer>
            <ul className="flex-style desktop-pad service-ul">
                <li className="flex-style service-li as">
                    <div className="flex-style brand-block">
                        <img className="brand-logo" src={logo} alt="Vroriys Logo"/>
                        <h1>ORIZON</h1>
                    </div>
                    <p className="title">Orizon Technologies Ltd</p>
                    <p className="footer-list-desp">Ruko Jalur Sutera 29A No. 53 Alam Sutera Serpong, Tangerang 15323</p>
                </li>
                <li className="flex-style service-li as w-50">
                    <h3 className="c-title">Contact</h3>
                    <a href="tel:+62.21.5314.1135">Phone : +62.21.5314.1135</a>
                    <a href={`mailto:community@orizon.com`}>Email : community@orizon.com</a>
                    <a href="tel:+62.21.5314.1135">Fax : +62.21.5314.1135</a>
                </li>
                <li className="flex-style service-li as">
                    <div className="flex-style technologies">
                        <img className="brand-logo" src={image7} alt="Orizon Logo"/>
                        <img className="brand-logo" src={image9} alt="Orizon Logo"/>
                        <img className="brand-logo" src={image10} alt="Orizon Logo"/>
                        <img className="brand-logo" src={image11} alt="Orizon Logo"/>
                        <img className="brand-logo" src={image13} alt="Orizon Logo"/>
                        <img className="brand-logo" src={image14} alt="Orizon Logo"/>
                    </div>
                </li>
            </ul>
            <div className="copyright">
                <p>Copyright © 2021- - Orizon Technologies Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;
