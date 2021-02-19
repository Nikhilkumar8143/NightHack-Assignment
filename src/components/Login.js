import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../App";


export default function Login() {
	const { state, dispatch } = useContext(AuthContext);
    const [data, setData] = useState({ errorMessage: "", isLoading: false });
    console.log(state)
    const { client_id, redirect_uri } = state;

    useEffect(() => {
        const url = window.location.href;
        const hasCode = url.includes("?code=");

        if (hasCode) {
          const newUrl = url.split("?code=");
          window.history.pushState({}, null, newUrl[0]);
          setData({ ...data, isLoading: true });
          console.log(state.proxy_url)
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
              console.log(data)
              fetch(data.repos_url,{
                method:"GET"
            }).then(data => data.json())
            .then(data => console.log(data))
            })
            .catch(error => {
              setData({
                isLoading: false,
                errorMessage: "Sorry! Login failed"
              });
            });
        }
      }, [state, dispatch, data]);

    if (state.isLoggedIn) {
    return <Redirect to="/login" />;
    }

  return (
			<a
				className="login-link"
				href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
				onClick={() => {
				setData({ ...data, errorMessage: "" });
				}}
			>
				<span>Login</span>
			</a>
  );
}


