import React from 'react'

export const Users_Manage = () => {
  return (
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

    <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button class="btn btn-primary" type="button" id="button-addon2">Buscar</button>
            <div data-lastpass-icon-root="true" style={{position: 'relative !important', height: '0px !important', width: '0px !important', float: 'left !important'}}></div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="userid" checked=""/>
            <label class="form-check-label" for="optionsRadios1">
            User ID
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="username"/>
            <label class="form-check-label" for="optionsRadios2">
            UserName
            </label>
        </div>
    </div>


    </>
  )
}

export default Users_Manage