import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

interface LoginProps {
  onFormSwitch: (formName: string) => void;
}

export const Login: React.FC<LoginProps> = (props) => {
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
   const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(email);
      console.log(pass);
      navigate('/Home');
  }

  return (
    <div className="Login-auth-form-container">
      <h2>Welcome to RxPlanation</h2>
      <h2>Login</h2>
      <form className="Login-auth-form" onSubmit={handleSubmit}>
        <label className="Login-label" htmlFor="email">Email</label>
        <input className="Login-input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label className="Login-label" htmlFor="password">Password</label>
        <input className="Login-input" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <button className="Login-button" type="submit">Log In</button>
      </form>
      <button className="Login-link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>
  )
}


/* 
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

*/

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