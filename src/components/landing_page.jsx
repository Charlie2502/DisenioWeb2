import React, { useState } from 'react'
import LogIn from './login'
import SignUp from './signUp'
import NavBar from './navbar'

import "./css/loginNavBar.css"

export const Landing_Page = () => {

    const [isShowLogin, setIsShowLogin] = useState(true);
    const [isShowSignUp, setIsShowSignUp] = useState(true);

    const handleLoginClick = () => {
        setIsShowLogin((isShowLogin) => !isShowLogin);
    };

    const handleSignUpClick = () => {
        setIsShowSignUp((isShowSignUp) => !isShowSignUp);
    };

  return (
    <>
        {/* NAVBAR */}
        <div>
            <NavBar handleLoginClick={handleLoginClick} handleSignUpClick={handleSignUpClick}/>
            <LogIn isShowLogin={isShowLogin}/>
            <SignUp isShowSignUp={isShowSignUp}/>
        </div>
                
    </>
  )
}

export default Landing_Page