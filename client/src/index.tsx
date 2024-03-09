import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Auth0Provider
    domain="dev-xo2t3urnf411ozm0.us.auth0.com" 
    clientId="18pwbDRgJaFWrqqyv7TbzOvSBkFlZ1zx"
    authorizationParams={{
      redirect_uri: window.location.origin
  }}
  >
    <App />
  </Auth0Provider>
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
