import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';


export const StoresClient = () => {

  return(
    <>
        {/* NAVBAR */}
        <div style={{paddingBottom: '60px'}}>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid" style={{padding:10}}>
                    <a className="navbar-brand" style={{paddingLeft:20}} href="#">Larry</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                        <li className="nav-item" style={{paddingLeft:20}}>
                            <a className="nav-link" href="/stores" role="button" aria-haspopup="true" aria-expanded="false">Tiendas</a>
                        </li>
                        <li className="nav-item" style={{paddingLeft:20}}>
                            <a className="nav-link" href="/billing_admin" role="button" aria-haspopup="true" aria-expanded="false">Mis Pedidos</a>
                        </li>
                        <li className="nav-item" style={{paddingLeft:20}}>
                            <a className="nav-link" href="/users_manage">Mi Perfil</a>
                        </li>
                        </ul>
                        <ul>
                            <li className="nav-item" style={{paddingRight:20}}></li>
                        </ul>

                    </div>
                </div>
            </nav>
            {/* INFO CARDS */}
            <div className='d-block justify-content-center align-items-center' style={{maxHeight: '100%', maxWidth:'75%' ,border: '2px solid'}}>
                {/* INFO CARD 1 */}
                <div className="card text-black bg-primary mb-3" style={{maxWidth: "20rem", margin: "30px 45px", alignItems: "center"}}>
                    <div className="card-header">
                        <img src={'vindi'} alt="" style={{height:'20px', width:'20px'}}/>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Perimercados</h4>
                        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, consequatur.</p>
                        <button class="btn btn-light" type="button" style={{backgroundColor: 'white'}}>Manage</button>
                    </div>
                </div>
                {/* INFO CARD 2 */}
                <div className="card text-black bg-primary mb-3" style={{maxWidth: "20rem", margin: "30px 45px", alignItems: "center"}}>
                    <div className="card-header">
                        <img src={'vindi'} alt="" style={{height:'20px', width:'20px'}}/>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Walmart</h4>
                        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, consequatur.</p>
                        <button class="btn btn-light" type="button" style={{backgroundColor: 'white'}}>Manage</button>
                    </div>
                </div>
                {/* INFO CARD 3 */}
                <div className="card text-black bg-primary mb-3" style={{maxWidth: "20rem", margin: "30px 45px", alignItems: "center"}}>
                    <div className="card-header">
                        <img src={'vindi'} alt="" style={{height:'20px', width:'20px'}}/>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Vindi</h4>
                        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, consequatur.</p>
                        <button class="btn btn-light" type="button" style={{backgroundColor: 'white'}}>Manage</button>
                    </div>
                </div>
            </div>
        
            {/* FOOTER */}
            <MDBFooter className='text-center text-white' style={{ backgroundColor: '#21081a', position: 'absolute', left: 0, right:0, bottom:0 }}>
                <MDBContainer className='p-4'></MDBContainer>
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2023 Copyright:
                    <a className='text-white' href='https://habbo.com/'>
                    Larry.com
                    </a>      
                </div>
            </MDBFooter>
        </div>  

    </>
  )


}

export default StoresClient;