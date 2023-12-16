import { MDBContainer, MDBFooter } from 'mdb-react-ui-kit'
import React, { Component } from 'react'

export default class Billing extends Component {
  render() {
    return (
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
                                <a className="nav-link" href="/admin/stores" role="button" aria-haspopup="true" aria-expanded="false">Tiendas</a>
                            </li>
                            <li className="nav-item" style={{paddingLeft:20}}>
                                <a className="nav-link" href="/admin/billing_admin" role="button" aria-haspopup="true" aria-expanded="false">Transacciones</a>
                            </li>
                            <li className="nav-item" style={{paddingLeft:20}}>
                                <a className="nav-link" href="/admin/users_manage">Usuarios</a>
                            </li>
                            </ul>
                            <form className="d-flex" style={{paddingRight:20}}>
                            <input className="form-control me-sm-2" type="search" placeholder="Search"/>
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>

            {/* BILLING TABLE */}

            <table class="table table-hover" id='billing-table' style={{}}>
                <thead>
                    <tr>
                    <th scope="col">Bill ID</th>
                    <th scope="col">Store ID</th>
                    <th scope="col">Store Name</th>
                    <th scope="col">User ID</th>
                    <th scope="col">Shipment Type</th>
                    <th scope="col">Total Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-active">
                    <th scope="row">9001</th>
                    <td>01</td>
                    <td>Perimercados</td>
                    <td>451</td>
                    <td>Land</td>
                    <td>150000</td>
                    </tr>
                </tbody>
                </table>


            {/* FOOTER */}
            <MDBFooter className='text-center text-white' style={{ backgroundColor: '#21081a' }}>
                <MDBContainer className='p-4'>Larry</MDBContainer>
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright: 
                <a className='text-white' href='https://habbo.com/'>
                NotLarry.com
                </a>      
                </div>
            </MDBFooter>  
      </>
    )
  }
}
