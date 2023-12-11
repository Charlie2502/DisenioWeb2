import React from 'react'
import { useState, useEffect } from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import { auth } from '../config/firebase-config';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import Swal from 'sweetalert2';
import Popup from 'reactjs-popup';

export const Login = () => {

    let history = useNavigate();

    /* HOOKS */
    const [ISCorreo, setISCorreo] = useState('');
    const [ISPass, setISPass] = useState('');

    const [registroEmail, setRegistroCorreo] = useState('');
    const [registroPass, setRegistroCon] = useState('');

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
            if(ISCorreo.includes('@admin.com')){
                history('/admin/stores');
            } else {
                history('/buyer/stores');
            }
            
        } catch (error) {
            Swal.fire({
                title: "Algo salio mal",
                text: error.message,
                icon: "error"
            });
        }
    }

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
                            <input type="password" class="form-control" value={ISPass} placeholder="Ingresar contraseña" onChange={ ({target}) => setISPass(target.value)}/>
                            <button type="button" class="btn btn-dark" onClick={IS}>Log In</button>
                        </div>
                    </fieldset>
                </form>

                <div class="form-group">
                    <label class="form-label mt-4">Correo</label>
                    <input type="Correo" class="form-control" placeholder="Correo" value={registroEmail} onChange={ ({target}) => setRegistroCorreo(target.value)}/>
                    <label class="form-label mt-4">Contraseña</label>
                    <input type="Contraseña" class="form-control" placeholder="Contraseña" value={registroPass} onChange={ ({target}) => setRegistroCon(target.value)}/>
                    <button type="button" class="btn btn-success" onClick={registro}>Registrar</button>
                </div>
                <p class="lead">No tiene una cuenta con nosotros? 
                    
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