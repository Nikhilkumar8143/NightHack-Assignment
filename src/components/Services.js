/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import despImage from '../assets/img/image.png';

const Services = (props) => {
    return (
        <div className="desktop-pad">
            <h3 className="p-title">Product and Services</h3>
            <ul className="flex-style service-ul">
                <li className="flex-style service-li">
                    <img className="service-img" src={despImage}/>
                    <h3 className="service-title">Our Product</h3>
                    <p className="service-desp">Our product is made on the base of our team’s careful research
                    and analyses, ranging from internet based application.</p>
                    <a className="read-more rm">Read More</a>
                </li>
                <li className="flex-style service-li">
                    <img className="service-img" src={despImage}/>
                    <h3 className="service-title">Our Service</h3>
                    <p className="service-desp">DSI’s shared service solutions focus on the front-end
                     based software development, designed specifically for the banking and financial sectors.
                    </p>
                    <a className="read-more rm">Read More</a>
                </li>
                <li className="flex-style service-li">
                    <img className="service-img" src={despImage}/>
                    <h3 className="service-title">Our Technology</h3>
                    <p className="service-desp">First JAVA, runs on more than 850 million personal 
                    computers worldwide, and on billions of devices worldwide, including mobile and TV devices.</p>
                    <a className="read-more rm">Read More</a>
                </li>
            </ul>
        </div>
    );
};

export default Services;
