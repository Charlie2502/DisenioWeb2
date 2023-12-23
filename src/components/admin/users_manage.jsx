import React, { useEffect, useState } from "react";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../../config/firebase-config";
import btnCellRenderer from "./btnCellRenderer";
import { AgGridReact } from "ag-grid-react";
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Users_Manage = () => {
  const [users, setUsers] = useState([]);
  const [rowData, setRowData] = useState([]);

  const [registroEmail, setRegistroCorreo] = useState('');
  const [registroPass, setRegistroCon] = useState('');
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState(0);
  const [newRol, setNewRol] = useState('');

  const usersCollectionRef = collection(db, "Users");

  //Table Definitions
  const colmunDefs = [
    { field: "id" },
    { field: "cellphone" },
    { field: "email" },
    { field: "name" },
    { field: "rol" },
    { field: "created_at" },
  ]

  /* Show Users */
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      const rowData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setRowData(rowData);

    };
    getUsers();
  }, []);

  // Add Users
  const registro = async () => {
    try {
      await addDoc(usersCollectionRef, { name: newName, cellphone: Number(newPhone), email: registroEmail, rol: newRol })
      const user = await createUserWithEmailAndPassword(auth, registroEmail, registroPass);
      Swal.fire({
        title: "Usuario Creado!",
        icon: "success"
      });
    } catch (error) {
      Swal.fire({
        title: "Algo salio mal",
        text: error.message,
        icon: "error"
      });
    }
  }

  /* Modify Users */

  /* Delete Users */
  const deleteUser = async (id) => {
    const userDoc = doc(db, "Users", id);
    await deleteDoc(userDoc);
  };

  return (
    <>
      {/* NAVBAR */}
      <div style={{ paddingBottom: "60px" }}>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container-fluid" style={{ padding: 10 }}>
            <a className="navbar-brand" style={{ paddingLeft: 20 }} href="#">
              Larry
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor02"
              aria-controls="navbarColor02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav me-auto">
                <li className="nav-item" style={{ paddingLeft: 20 }}>
                  <a
                    className="nav-link"
                    href="/admin/stores"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Tiendas
                  </a>
                </li>
                <li className="nav-item" style={{ paddingLeft: 20 }}>
                  <a
                    className="nav-link"
                    href="/admin/billing_admin"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Transacciones
                  </a>
                </li>
                <li className="nav-item" style={{ paddingLeft: 20 }}>
                  <a className="nav-link" href="/admin/users_manage">
                    Usuarios
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div
        class="input-group mb-3"
        style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
      >
        <button
          type="button"
          class="btn btn-outline-secondary"
          style={{ marginLeft: "20px" }}
          data-bs-toggle="modal"
          data-bs-target="#addUserModal"
        >
          Añadir Usuario
        </button>
      </div>

      <div>
        <div
          className={"ag-theme-quartz-dark"}
          style={{ width: "65%", height: "250px", margin: 'auto' }}
        >
          <AgGridReact
            rowData={rowData}
            columnDefs={colmunDefs}
          />
        </div>
      </div>

      {/* Add User Modal */}
      <div
        class="modal fade"
        id="addUserModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        onSubmit={registro.handleSubmit}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Datos de la Tienda
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                value={newName}
                class="form-control"
                placeholder="Nombre"
                id="name"
                required
                onChange={(event) => setNewName(event.target.value)}
              />
              <input
                type="text"
                value={registroEmail}
                class="form-control"
                placeholder="Correo"
                id="industry"
                required
                onChange={(event) => setRegistroCorreo(event.target.value)}
              />
              <input
                type="text"
                value={newPhone}
                class="form-control"
                placeholder="Telefono"
                id="served_area"
                required
                onChange={(event) => setNewPhone(event.target.value)}
              />
              <input
                type="text"
                value={newRol}
                class="form-control"
                placeholder="Rol"
                id="img"
                required
                onChange={(event) => setNewRol(event.target.value)}
              />
              <input
                type="password"
                value={registroPass}
                class="form-control"
                placeholder="Contraseña"
                id="img"
                required
                onChange={(event) => setRegistroCon(event.target.value)}
              />
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    registro();
                  }}
                >
                  Agregar Usuario
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users_Manage;
