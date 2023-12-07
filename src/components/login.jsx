import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      
        <>
            <div style={{maxHeight: '100%', maxWidth:'100%', display: 'inline-block', textAlign: 'center', position: 'relative'}}>
                <h2>Not HURRY</h2>
                
                <h3>Log In</h3>

                <form>
                    <fieldset>
                        <div class="form-group">
                            <label for="exampleInputEmail1" class="form-label mt-4">Correo Electronico</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar correo"/>
                            <label for="exampleInputEmail1" class="form-label mt-4">Contraseña</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar contraseña"/>
                            <button type="button" class="btn btn-dark">Log In</button>
                        </div>
                    </fieldset>
                </form>
                <p class="lead">No tiene una cuenta con nosotros? Cree una <a href="">aqui!</a></p>
            </div>
        </>
        
    )
  }
}

export default Login