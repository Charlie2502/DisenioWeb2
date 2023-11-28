import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

export const Menu = () => {

  return(
    <>
      /* NAVBAR */
      <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid" style={{padding:10}}>
          <a class="navbar-brand" style={{paddingLeft:20}} href="#">HURRY</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav me-auto">
              <li class="nav-item" style={{paddingLeft:20}}>
                <a class="nav-link active" href="#">Menu
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item dropdown" style={{paddingLeft:20}}>
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Tiendas</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Añadir Tienda</a>
                  <a class="dropdown-item" href="#">Modificar Tiendas</a>
                  <a class="dropdown-item" href="#">Pedidos</a>
                </div>
              </li>
              <li class="nav-item dropdown" style={{paddingLeft:20}}>
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Inventario</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Añadir Producto</a>
                  <a class="dropdown-item" href="#">Modificar Producto</a>
                </div>
              </li>
              <li class="nav-item dropdown" style={{paddingLeft:20}}>
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Pedidos</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Añadir Envio</a>
                  <a class="dropdown-item" href="#">Modificar Envio</a>
                  <a class="dropdown-item" href="#">Historial de Pedidos</a>
                </div>
              </li>
              <li class="nav-item" style={{paddingLeft:20}}>
                <a class="nav-link" href="#">Mi Perfil</a>
              </li>
            </ul>
            <form class="d-flex"style={{paddingRight:20}}>
              <input class="form-control me-sm-2" type="search" placeholder="Search"/>
              <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      /* Image Carrousel */
      <div 
        className='d-flex justify-content-center align-items-center'
      >
        <Carousel fade>
          <Carousel.Item>
            <img src="https://i0.wp.com/euro-practice.com/wp-content/uploads/2019/01/Usine.jpg?fit=2000%2C1333&ssl=1" alt="" style={{height:650, width:1150}}/>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://tienda.maudestudio.com/wp-content/uploads/2018/11/sap_planificacion.jpg" alt="" style={{height:650, width:1150}}/>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://www.ilen.edu.pe/wp-content/uploads/2021/11/354684565.jpg" alt="" style={{height:650, width:1150}}/>
          </Carousel.Item>
        </Carousel>
      </div>

      /* About Us */

      <div id='about'>
        <div class="card border-light mb-3" style="max-width: 20rem;">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h4 class="card-title">Light card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>

      <MDBFooter className='text-center text-white' style={{ backgroundColor: '#21081a' }}>
        <MDBContainer className='p-4'></MDBContainer>
          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2023 Copyright:
            <a className='text-white' href='https://habbo.com/'>
              HURRY.com
            </a>      
          </div>
        </MDBFooter>  


    </>
  )


}