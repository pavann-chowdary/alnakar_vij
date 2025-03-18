import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { StrictMode } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import GoogleOAuthProvider
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="750603703129-0cvjrstvjco2tidvnr1drop2e6qdqbg2.apps.googleusercontent.com"> {/* Initialize GoogleOAuthProvider */}
      <App />
    </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
);