import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { auth } from '../config/firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const Login = ({isShowLogin}) => {

    let history = useNavigate();

    /* HOOKS */
    const [ISCorreo, setISCorreo] = useState('');
    const [ISPass, setISPass] = useState('');

    //Local Storage
    const [LSCorreo, setLSCorreo] = useState([]);

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

    useEffect(() => {
        localStorage.setItem('LSCorreo', JSON.stringify(LSCorreo));
    }, [LSCorreo])


    return (
      
        <>
            
            <div className={`${isShowLogin ? "active" : ""} show`}>
                <div className="login-form">
                    <div className="form-box solid">
                    <form>
                        <h1 className="login-text">Log In</h1>
                        <label>Email</label>
                        <br></br>
                        <input type="email" class="form-control" value={ISCorreo} placeholder="Ingresar correo" onChange={ ({target}) => setISCorreo(target.value)}/>
                        <br></br>
                        <label>Password</label>
                        <br></br>
                        <input type="password" class="form-control" value={ISPass} placeholder="Ingresar contraseña" onChange={ ({target}) => setISPass(target.value)}/>
                        <br></br>
                        <button type="button" class="btn btn-dark" id='login-btn' onClick={IS}>Log In</button>
                    </form>
                    </div>
                </div>
            </div>
              
        </>
        
    )
  }

export default Login