/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import despImage from '../assets/img/image.png';

const Description = (props) => {
    return (
        <div className="description-page desktop-pad flex-style">
            <div className="desp-block">
                <p className="brand-desp">
                    Making the most of the ever-growing  <span className="h-color">Information Technology</span>
                </p>
                <p className="desp-second">
                    Managed by a team of professional experts with extensive experience and impressive track records </p>
                <a className="read-more">Read More</a>
            </div>
            <div>
                <img className="desp-image" src={despImage} alt="orizon description" />
            </div>
        </div>
    );
};

export default Description;
