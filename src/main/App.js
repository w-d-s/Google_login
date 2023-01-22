import React from 'react'
import "../styles/main.css"
import webPimage from "../assets/webpackLogo.png"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'

const App = () => {
  return (
    <div className='main-container'>
      // For normal outlined button
      <GoogleOAuthProvider clientId="401289267989-9mb2gnrnml6ru7gfjbjq9ete1j5h0ukm.apps.googleusercontent.com">

        <GoogleLogin
          onSuccess={credentialResponse => {
            const details = jwt_decode(credentialResponse.credential);
            console.log(details)
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
      // For filled blude button
      <GoogleOAuthProvider clientId="401289267989-9mb2gnrnml6ru7gfjbjq9ete1j5h0ukm.apps.googleusercontent.com">

        <GoogleLogin
          onSuccess={credentialResponse => {
            const details = jwt_decode(credentialResponse.credential);
            console.log(details)
            console.log(credentialResponse);
          }}
          theme='filled_blue'
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
      // For filled black curved button.
      <GoogleOAuthProvider clientId="401289267989-9mb2gnrnml6ru7gfjbjq9ete1j5h0ukm.apps.googleusercontent.com">

        <GoogleLogin
          onSuccess={credentialResponse => {
            const details = jwt_decode(credentialResponse.credential);
            console.log(details)
            console.log(credentialResponse);
          }}
          theme='filled_black'
          shape='pill'
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
    </div>
  )
}

export default App