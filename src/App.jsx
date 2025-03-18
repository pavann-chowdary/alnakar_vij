import React from 'react'

import {jwtDecode} from 'jwt-decode'

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom' 
import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import AppRoutes from './Components/routes'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [decodedToken, setDecodedToken] = useState(null);
  
  const navigate = useNavigate(); 

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;
    if (token) {
      // local sttorage 
      localStorage.setItem('googleToken', token); 
      setIsLoggedIn(true);
      const decoded = jwtDecode(token);
      setDecodedToken(decoded);
      console.log(decoded)
      const given_name=decoded.given_name;
      const email=decoded.email;
      navigate('/welcome',{state:{given_name,email}})
    }
  };

  const handleGoogleLoginError = () => {
    console.error('Google login failed');
  };

  return (
    <GoogleOAuthProvider clientId="750603703129-0cvjrstvjco2tidvnr1drop2e6qdqbg2.apps.googleusercontent.com">
      <div className="app-container">
        <h1>Welcome to Alankar</h1>
          <Routes>
            <Route
              path="/*" 
              element={
                isLoggedIn ? (
                  <AppRoutes />
                ): 
                (
                  <GoogleLogin
                    onSuccess={handleGoogleLoginSuccess}
                    onError={handleGoogleLoginError}
                  />
                )
              }
            />
          </Routes>
      </div>
    </GoogleOAuthProvider>
  );
}
export default App;