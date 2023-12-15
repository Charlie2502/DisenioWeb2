import React from "react";

function NavBar({ handleLoginClick, handleSignUpClick }) {

  const handleClickLogIn = () => {
    handleLoginClick();
  };

  const handleClickSignUp = () => {
    handleSignUpClick();
  };

  return (
    <div style={{paddingBottom: '60px'}}>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid" style={{padding:10}}>
                    <a className="navbar-brand" style={{paddingLeft:20}} href="#">Not HURRY</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                                                
                        <button className="btn btn-primary my-2 mx-2 my-sm-0" onClick={handleClickLogIn}>Log In</button>
                        <button className="btn btn-secondary my-2 mx-2 my-sm-0" onClick={handleClickSignUp}>Sign Up</button>
                        
                    </div>
                </div>
        </nav>
    </div>
  );
}

export default NavBar;