import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { auth } from '../config/firebase-config';
import { createUserWithEmailAndPassword} from 'firebase/auth';

export const SignUp = ({isShowSignUp}) => {

    /* HOOKS */

    const [registroEmail, setRegistroCorreo] = useState('');
    const [registroPass, setRegistroCon] = useState('');

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

    return (
      
        <>
            
            <div className={`${isShowSignUp ? "active" : ""} show`}>
                <div className="signup-form">
                    <div className="form-box solid">
                    <form>
                        <h1 className="signup-text">Sign Up</h1>
                        <label>Email</label>
                        <br></br>
                        <input type="email" class="form-control" value={registroEmail} placeholder="Ingresar correo" onChange={ ({target}) => setRegistroCorreo(target.value)}/>
                        <br></br>
                        <label>Password</label>
                        <br></br>
                        <input type="password" class="form-control" value={registroPass} placeholder="Ingresar contraseña" onChange={ ({target}) => setRegistroCon(target.value)}/>
                        <br></br>
                        <button type="button" class="btn btn-dark" onClick={registro}>Sign Up</button>
                    </form>
                    </div>
                </div>
            </div>
              
        </>
        
    )
  }

export default SignUp