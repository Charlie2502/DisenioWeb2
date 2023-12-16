import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { auth } from '../config/firebase-config';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import {db} from '../../src/config/firebase-config';
import { addDoc, collection } from 'firebase/firestore';

export const SignUp = ({isShowSignUp}) => {

    /* HOOKS */

    const [registroEmail, setRegistroCorreo] = useState('');
    const [registroPass, setRegistroCon] = useState('');
    const [newName, setNewName] = useState("");
    const [newPhone, setNewPhone] = useState(0);

    const rol = "Cliente";

    const usersCollectionRef = collection(db, "Users");

    /* Metodos */

    const registro = async () => {
        try {
            await addDoc(usersCollectionRef, { name: newName, cellphone: Number(newPhone), email: registroEmail, rol: rol})
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
                        <label>Nombre</label>
                        <br></br>
                        <input class="form-control" placeholder="Ingresar nombre completo" onChange={ (event) => setNewName(event.target.value) }/>
                        <br></br>
                        <label>Telefono</label>
                        <br></br>
                        <input type="number" class="form-control" placeholder="Ingresar telefono" onChange={ (event) => setNewPhone(event.target.value) } />
                        <br></br>
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