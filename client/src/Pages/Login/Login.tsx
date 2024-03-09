import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({
      appState: { target: '/Home' } // Customize the target URL
    });
  };

  return <button onClick={handleLogin}>Log In</button>;
};

export default LoginButton;

//export default function Login(){

/*const LoginButton = () =>{
  const login = async () => {
    const domain = "dev-xo2t3urnf411ozm0.us.auth0.com";
    const audience = "";
    const clientId = "18pwbDRgJaFWrqqyv7TbzOvSBkFlZ1zx";
    const responseType = "code";
    const redirectUri = "http://localhost:3000/Home";

    const response = fetch(
      `https://${domain}/authorize?` + 
      `client_id = ${clientId}&` + 
      `response_type = ${responseType}&` +
      `redirect_uri = ${redirectUri}&`,{
        redirect: "manual"
      }
    );
  };
  return (
    <button onClick={()=>login}>  
      Log In
    </button>
    );
  };

export default LoginButton;

*/