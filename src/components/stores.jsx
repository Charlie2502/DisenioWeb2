import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import {walmart} from '../images/walmart.png';
import {vindi} from '../images/vindi.png';
import {peri} from '../images/peri.png';



export const Stores = () => {

  return(
    <>
        <div style={{paddingBottom: '60px'}}>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid" style={{padding:10}}>
                    <a className="navbar-brand" style={{paddingLeft:20}} href="#">HURRY</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                        <li className="nav-item dropdown" style={{paddingLeft:20}}>
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Tiendas</a>
                            <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Añadir Tienda</a>
                            <a className="dropdown-item" href="#">Modificar Tiendas</a>
                            <a className="dropdown-item" href="#">Pedidos</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown" style={{paddingLeft:20}}>
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Inventario</a>
                            <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Añadir Producto</a>
                            <a className="dropdown-item" href="#">Modificar Producto</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown" style={{paddingLeft:20}}>
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Pedidos</a>
                            <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Añadir Envio</a>
                            <a className="dropdown-item" href="#">Modificar Envio</a>
                            <a className="dropdown-item" href="#">Historial de Pedidos</a>
                            </div>
                        </li>
                        <li className="nav-item" style={{paddingLeft:20}}>
                            <a className="nav-link" href="#">Usuarios</a>
                        </li>
                        </ul>
                        <form className="d-flex"style={{paddingRight:20}}>
                        <input className="form-control me-sm-2" type="search" placeholder="Search"/>
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            
            <div className='d-flex justify-content-center align-items-center'>
                <div className="card text-white bg-primary mb-3" style={{maxWidth: "20rem", margin: "30px 45px", alignItems: "center"}}>
                    <div className="card-header">
                        <img src={'peri'} alt="" style={{height:'20px', width:'20px'}}/>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Perimercados</h4>
                        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, consequatur.</p>
                    </div>
                </div>
                <div className="card text-white bg-primary mb-3" style={{maxWidth: "20rem", margin: "30px 45px", alignItems: "center"}}>
                    <div className="card-header">
                        <img src="walmart" alt="" style={{height:'20px', width:'20px'}}/>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Walmart</h4>
                        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, consequatur.</p>
                    </div>
                </div>
                <div className="card text-white bg-primary mb-3" style={{maxWidth: "20rem", margin: "30px 45px", alignItems: "center"}}>
                    <div className="card-header">
                        <img src={'vindi'} alt="" style={{height:'20px', width:'20px'}}/>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Vindi</h4>
                        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, consequatur.</p>
                    </div>
                </div>
                
            </div>
        

            <MDBFooter className='text-center text-white' style={{ backgroundColor: '#21081a', position: 'absolute', left: 0, right:0, bottom:0 }}>
                <MDBContainer className='p-4'></MDBContainer>
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2023 Copyright:
                    <a className='text-white' href='https://habbo.com/'>
                    HURRY.com
                    </a>      
                </div>
            </MDBFooter>
        </div>  

    </>
  )


}

export default Stores;