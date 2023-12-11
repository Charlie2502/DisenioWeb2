import React from "react";

import '../css/table.css'

export const Stores_Manage = () => {

    return(
        <>

            {/* NAVBAR */}
            <div style={{paddingBottom: '60px'}}>
                <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                    <div className="container-fluid" style={{padding:10}}>
                        <a className="navbar-brand" style={{paddingLeft:20}} href="#">Not HURRY</a>
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
            <div>
                <table class="table table-hover" id="prod_table">
                    <thead>
                        <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Disponibilidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-active">
                            <th scope="row">Active</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>
                                <button type="button" class="btn btn-light">Modificar</button>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                    <tr>
                        <td colSpan={4}>
                            <div class="d-grid gap-2" style={{margin: '0px 50px'}}>
                                <button class="btn btn-lg btn-primary" type="button">Agregar Producto</button>
                            </div>
                        </td>
                    </tr>
                </table>         
            </div>

        </>
    )

}

export default Stores_Manage;