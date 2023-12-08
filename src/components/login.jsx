import React from 'react'
import { useState, useEffect } from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import { auth } from '../config/firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import Swal from 'sweetalert2';
import Popup from 'reactjs-popup';




export const Login = () => {

    /* HOOKS */
    const [ISCorreo, setISCorreo] = useState('');
    const [ISPass, setISPass] = useState('');

    const [user, setUser] = useState({});

    /* Metodos */
    const IS = async () => {
        try {
            /* ISCORREO = INICIAR SESION CORREO | ISCON = INICIAR SESION CONTRASEÑA */
            setUser(await signInWithEmailAndPassword(auth, ISCorreo, ISPass)); 
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

    /* Verificar el incio de sesion*/
    useEffect(() => {
        onAuthStateChanged(auth, (UsuarioActivo) => {
            setUser(UsuarioActivo);
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
                            <input type="email" class="form-control" value={ISCorreo} placeholder="Ingresar correo" onChange={ ({target}) => setISCorreo(target.value)}/>
                            <label class="form-label mt-4">Contraseña</label>
                            <input type="email" class="form-control" value={ISPass} placeholder="Ingresar contraseña" onChange={ ({target}) => setISPass(target.value)}/>
                            <button type="button" class="btn btn-dark" onClick={IS}>Log In</button>
                        </div>
                    </fieldset>
                </form>
                <p class="lead">No tiene una cuenta con nosotros? 
                    <Popup
                        trigger={<button className="button"> Open Modal </button>}
                        modal
                        nested
                    >
                        {close => (
                        <div className="modal">
                            <button className="close" onClick={close}>
                            &times;
                            </button>
                            <div className="header"> Modal Title </div>
                            <div className="content">
                            {' '}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                            Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                            delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                            commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                            explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                            </div>
                            <div className="actions">
                            <Popup
                                trigger={<button className="button"> Trigger </button>}
                                position="top center"
                                nested
                            >
                                <span>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                                magni omnis delectus nemo, maxime molestiae dolorem numquam
                                mollitia, voluptate ea, accusamus excepturi deleniti ratione
                                sapiente! Laudantium, aperiam doloribus. Odit, aut.
                                </span>
                            </Popup>
                            <button
                                className="button"
                                onClick={() => {
                                console.log('modal closed ');
                                close();
                                }}
                            >
                                close modal
                            </button>
                            </div>
                        </div>
                        )}
                    </Popup>
                </p>
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