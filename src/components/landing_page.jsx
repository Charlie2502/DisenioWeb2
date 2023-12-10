import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Swal from 'sweetalert2';

export const Landing_Page = () => {

  return (
    <>
        {/* NAVBAR */}
        <div style={{paddingBottom: '60px'}}>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid" style={{padding:10}}>
                    <a className="navbar-brand" style={{paddingLeft:20}} href="#">Not HURRY</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                        <li className="nav-item" style={{paddingLeft:20}}>
                            <a className="nav-link" href="/stores" role="button" aria-haspopup="true" aria-expanded="false">Tiendas</a>
                        </li>
                        <li className="nav-item" style={{paddingLeft:20}}>
                            <a className="nav-link" href="/billing_admin" role="button" aria-haspopup="true" aria-expanded="false">Transacciones</a>
                        </li>
                        <li className="nav-item" style={{paddingLeft:20}}>
                            <a className="nav-link" href="/users_manage">Usuarios</a>
                        </li>
                        </ul>
                        
                        <button className="btn btn-primary my-2 mx-2 my-sm-0" type="submit">Log In</button>

                        <button className="btn btn-secondary my-2 mx-2 my-sm-0" type="submit">Sign In</button>
                        
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Landing_Page