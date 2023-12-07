import React, { Component } from 'react'
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { auth } from '../config/firebase-config';

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const Login = () => {

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPass, setLoginPass] = useState('');
    
    const [user, setUser] = useState({});


    /* Metodos */
    const registro = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registroEmail, registroPass);
            Swal.fire({
                title: "Usuario Creado!",
                icon: "success"
              });
        } catch (error) {
            Swal.fire({
                title: "Algo salio mal",
                text: error.message,
                icon: "error"
              });
        }
    }

    const login = async () => {
        try {
            setUser(await signInWithEmailAndPassword(auth, loginEmail, loginPass)); 
            Swal.fire({
                title: "Sesion Iniciada!",
                icon: "success"
              });
        } catch (error) {
            Swal.fire({
                title: "Algo salio mal",
                text: error.message,
                icon: "error"
              });
        }
    }

    const logout = async () => {
        await signOut(auth);
        Swal.fire({
            title: "Sesion Cerrada!",
            icon: "success"
          });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [user])

    return (
      
        <>
            <div style={{maxHeight: '100%', maxWidth:'100%', display: 'inline-block', textAlign: 'center', position: 'relative'}}>
                <h2>Not HURRY</h2>
                
                <h3>Log In</h3>

                <form>
                    <fieldset>
                        <div class="form-group">
                            <label class="form-label mt-4">Correo Electronico</label>
                            <input type="email" class="form-control" value={loginEmail} placeholder="Ingresar correo" onChange={ ({target}) => setLoginEmail(target.value)}/>
                            <label class="form-label mt-4">Contraseña</label>
                            <input type="email" class="form-control" value={loginPass} placeholder="Ingresar contraseña" onChange={ ({target}) => setLoginPass(target.value)}/>
                            <button type="button" class="btn btn-dark" onClick={login}>Log In</button>
                        </div>
                    </fieldset>
                </form>
                <p class="lead">No tiene una cuenta con nosotros? Cree una <a href="">aqui!</a></p>
            </div>

            <MDBFooter className='text-center text-white' style={{ backgroundColor: '#21081a' }}>
                <MDBContainer className='p-4'>Not HURRY</MDBContainer>
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright: 
                <a className='text-white' href='https://habbo.com/'>
                NotHURRY.com
                </a>      
                </div>
            </MDBFooter>  
        </>
        
    )
  }

export default Login