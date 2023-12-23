import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import btnCellRenderer from "./btnCellRenderer";
import { AgGridReact } from "ag-grid-react";

export const Users_Manage = () => {
  const [users, setUsers] = useState([]);

  const usersCollectionRef = collection(db, "Users");

  /* Show Users */
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

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
        >
          Añadir Usuario
        </button>
      </div>

      <div>
        {users.map((user) => {
          const gridOptions = {
            rowData: [
              {
                ID: user.id,
                Nombre: user.name,
                Email: user.email,
                Telefono: user.cellphone,
              },
            ],
            colmunDefs: [
              { field: "ID", type: "editable" },
              { field: "Nombre", type: "editable" },
              { field: "Email", type: "editable" },
              { field: "Telefono", type: "editableNum" },
              {
                field: "acciones",
                cellRenderer: btnCellRenderer,
                cellRendererParams: {
                  clicked: function () {
                    const deleteUserDocRef = doc(db, "Users", user.id);
                    deleteDoc(deleteUserDocRef);
                  },
                },
              },
            ],
            columnTypes: {
              editable: {
                editable: true,
              },
              editableNum: {
                editable: true,
                valueParser: "Number(newValue)",
                filter: "agNumberColumnFilter",
              },
            },
          };

          return (
            <div
              className={"ag-theme-quartz-dark"}
              style={{ width: "75%", height: "350px", margin: "auto"}}
            >
              <AgGridReact
                rowData={gridOptions.rowData}
                columnDefs={gridOptions.colmunDefs}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Users_Manage;
