/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect, useContext } from 'react';
import logo from '../assets/img/Vector.svg';
import union from '../assets/img/Union.svg';
import mail from '../assets/img/mail.svg';
import shuffle from '../assets/img/shuffle.svg';
import { AuthContext } from "../App";
// import { Redirect } from "react-router-dom";
import hamburgericon from '../assets/img/text_align_right.svg';

const Header = (props) => {

    const handleClick = () => {
        const menu = document.querySelector('header div.menu-items');
        menu.classList.toggle('menu-toggle');
    }

    const { state, dispatch } = useContext(AuthContext);
    const [data, setData] = useState({ errorMessage: "", isLoading: false });
    const { client_id, redirect_uri } = state;

    useEffect(() => {
        const url = window.location.href;
        const hasCode = url.includes("?code=");
    
        if (hasCode) {
          const newUrl = url.split("?code=");
          window.history.pushState({}, null, newUrl[0]);
          setData({ ...data, isLoading: true });
          const requestData = {
            code: newUrl[1]
          };
          const proxy_url = state.proxy_url;
    
          fetch(proxy_url, {
            method: "POST",
            body: JSON.stringify(requestData)
          })
            .then(response => response.json())
            .then(data => {
              dispatch({
                type: "LOGIN",
                payload: { user: data, isLoggedIn: true }
              });
            })
            .catch(error => {
              setData({
                isLoading: false,
                errorMessage: "Sorry! Login failed"
              });
            });
        }
      }, [state, dispatch, data]);

      const logOut = () => {
        console.log("Called")
		localStorage.clear()
		window.location.reload(); 
      }

    return (
        <header className="flex-style">
            <div className="flex-style brand-block">
                <img className="brand-logo" src={logo} alt="Vroriys Logo"/>
                <h1>ORIZON</h1>
            </div>
            <div className="menu-items">
				<ul className="flex-style menu-items1">
					<li> <a>Services</a></li>
					<li><a>Product</a></li>
					<li><a>Technology</a></li>
					<li><a>About</a></li>
					<li><a>Client</a></li>
					<li>
						{state.user == null ?
							<a
							className="login-link"
							href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
							onClick={() => {
								setData({ ...data, errorMessage: "" });
							}}
							>
								Login
							</a> : <a onClick={() => logOut()}>Log Out</a>
						}
					</li>
				</ul>
				<ul className="flex-style social-items">
					<li><img src={union}/></li>
					<li><img src={mail}/></li>
					<li><img src={shuffle}/></li>
				</ul>
            </div>
            
            <a onClick={handleClick} className="menu">
                <img src={hamburgericon}/>
            </a>
        </header>
    );
};

export default Header;
