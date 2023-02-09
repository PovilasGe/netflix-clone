import React from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen';
import { useState } from 'react';

function LoginScreen() {
const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
        <div className='loginScreen_background'>
            <img className='loginScreen_logo' src='not_netflix.png' alt=''/>
            <button className='loginScreen_button'
            onClick={() => setSignIn(true)}>Sign In</button>
              <div className='loginScreen_gradient'/>
        </div>

        <div className='loginScreen_body'>
          {signIn ? (
          <SignupScreen />
          ) :(
            <>
            <h1>Unlimited films, Tv programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time</h2>
            <h3>Ready to watch? Enter your em,ail to create or restart your membership.</h3>
  
            <div className='loginScreen_input'>
              <form>
                <input type='email' placeholder='Email Address' />
                <button className='loginScreen_getStarted'
                onClick={() => setSignIn(true)}>GET STARTED</button>
              </form>
            </div>
            </>
          )}

        </div>
    </div>
  )
}

export default LoginScreen