import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const shoppingCart = () => {

  return(
    <>
        {/* NAVBAR */}
        <div style={{paddingBottom: '60px'}}>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid" style={{padding:10}}>
                    {/*<a className="navbar-brand" style={{paddingLeft:20}} href="">Larry</a>*/}
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
                <li className="nav-item" style={{ paddingRight: 20 }}>
                  <a className="nav-link" href="/users_manage">
                    <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        

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

export default shoppingCart;