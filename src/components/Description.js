/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import despImage from '../assets/img/undraw_web_devices_ad58.svg';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const defaultProps = {
    despContentArray:[{
        p:"Making the most of the ever-growing",
        p1:"Managed by a team of professional experts with extensive experience and",
        bg:"black"
    },
    {
        p:"Making the most of the ever-growing",
        p1:"Managed by a team of professional experts with extensive experience and",
        bg:"white"
    },
    {
        p:"Making the most of the ever-growing",
        p1:"Managed by a team of professional experts with extensive experience and",
        bg:"orange"
    },
    {
        p:"Making the most of the ever-growing",
        p1:"Managed by a team of professional experts with extensive experience and",
        bg:"green"
    },
    {
        p:"Making the most of the ever-growing",
        p1:"Managed by a team of professional experts with extensive experience and",
        bg:"red"
    }
    ]
}

const Description = (props) => {
    return (
        <Carousel controls={true} className="description-carousel">
            {
                props.despContentArray && props.despContentArray.map((data,index) => {
                    return <Carousel.Item key={index}>
                         <div style={{backgroundColor:`${data.bg}`}} className="description-page desktop-pad flex-style">
                            <div className="desp-block">
                                <p className="brand-desp">
                                    {data.p}  <span className="h-color">Information Technology</span>
                                </p>
                                <p className="desp-second">
                                {data.p1} </p>
                                <a className="read-more">Read More</a>
                            </div>
                            <div>
                                <img className="desp-image" src={despImage} alt="orizon description" />
                            </div>
                        </div>         
                    </Carousel.Item>
                })
            }
        </Carousel>
    );
};

Description.defaultProps=defaultProps;
export default Description;
