import '../css/table.css';

export const Stores_Manage = () => {

    return(
        <>

            {/* NAVBAR */}
            <div style={{paddingBottom: '60px'}}>
                <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                    <div className="container-fluid" style={{padding:10}}>
                        <a className="navbar-brand" style={{paddingLeft:20}} href="#">LARRY</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor02">
                            <ul className="navbar-nav me-auto">
                            <li className="nav-item" style={{paddingLeft:20}}>
                                <a className="nav-link" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Tiendas</a>
                            </li>
                            <li className="nav-item" style={{paddingLeft:20}}>
                                <a className="nav-link" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Transacciones</a>
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
            </div>
            <div>
               <table >
                    <tr >
                        <th ></th>
                        <th >Producto</th>
                        <th >Descripcion</th>
                        <th >Categoria</th>
                        <th >Cantidad</th>
                        <th >Precio</th>
                        <th >Manage</th>
                    </tr>

                    <tr >
                        <td >Imagen</td>
                        <td >Cebolla</td>
                        <td >Prueba</td>
                        <td >Prueba</td>
                        <td >Prueba</td>
                        <td >Prueba</td>
                        <td >
                            <button>Editar</button>
                            <button>Eliminar</button>
                        </td>
                    </tr>
               </table>         
            </div>
            <button>Agregar</button>

        </>
    )

}