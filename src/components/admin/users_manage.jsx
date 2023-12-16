import React, { useEffect, useState } from 'react'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { db } from '../../config/firebase-config';

export const Users_Manage = () => {

    const [users, setUsers] = useState([]);

    const usersCollectionRef = collection(db, "Users");

    /* Show Users */
    useEffect(() => {

        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getUsers();
    }, [])

    /* Modify Users */

    /* Delete Users */
    const deleteUser = async (id) => {
        const userDoc = doc(db, "Users", id);
        await deleteDoc(userDoc);
    }

    return (
        <>
            {/* NAVBAR */}
            <div style={{ paddingBottom: '60px' }}>
                <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                    <div className="container-fluid" style={{ padding: 10 }}>
                        <a className="navbar-brand" style={{ paddingLeft: 20 }} href="#">Larry</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor02">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item" style={{ paddingLeft: 20 }}>
                                    <a className="nav-link" href="/admin/stores" role="button" aria-haspopup="true" aria-expanded="false">Tiendas</a>
                                </li>
                                <li className="nav-item" style={{ paddingLeft: 20 }}>
                                    <a className="nav-link" href="/admin/billing_admin" role="button" aria-haspopup="true" aria-expanded="false">Transacciones</a>
                                </li>
                                <li className="nav-item" style={{ paddingLeft: 20 }}>
                                    <a className="nav-link" href="/admin/users_manage">Usuarios</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div class="input-group mb-3" style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
                <input type="text" class="form-control" placeholder="ID - Nombre - Rol" aria-describedby="button-addon2" />
                <button class="btn btn-primary" type="button" id="button-addon2">Buscar</button>

                <button type="button" class="btn btn-outline-secondary" style={{ marginLeft: '20px' }}>Añadir Usuario</button>
            </div>


            <div>
                {users.map((user) => {
                    return (
                        <table class="table table-hover" style={{ width: '75%', marginLeft: 'auto', marginRight: 'auto' }}>
                            <tbody>
                                <tr class="table-active">
                                    <th scope="row" style={{ width: '5%', textAlign: 'center' }}>{user.id}</th>
                                    <td style={{ textAlign: 'center' }}>{user.name}</td>
                                    <td style={{ textAlign: 'center' }}>{user.cellphone}</td>
                                    <td style={{ textAlign: 'center' }}>{user.email}</td>
                                    <td style={{ textAlign: 'center' }}>{user.rol}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <button type="button" class="btn btn-warning">Modificar</button>
                                    </td>
                                    <td style={{ textAlign: 'center' }}>
                                        <button type="button" class="btn btn-danger" onClick={() => { deleteUser(user.id) }}>Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    );
                })}
            </div>

        </>
    )
}

export default Users_Manage