/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import despImage from '../assets/img/image.png';

const Introduction = (props) => {
    return (
        <div className="introduction-page flex-style">
            <div>
                <img className="int-image" src={despImage} alt="orizon description"/>
            </div>
            <div className="desp-block">
                <h3 className="sub-head">Welcome to <span className="h-color"> Orizon <br></br> Technologies</span></h3>
                <p className="int-desp">Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, 
                    who each of them has a common end objective to innovate new creations by making the most 
                    of the ever-growing information technology through DSI’s distinct front-end based application concept.
                </p>
                <p className="int-desp">
                Managed by a team of professional experts with extensive experience and impressive track records, 
                DSI believes that continuous improvements and innovations assure your business to run effectively 
                and efficiently.
                </p>
            </div>
        </div>
    );
};

export default Introduction;
