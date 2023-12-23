import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import btnCellRenderer from "./btnCellRenderer";
import { AgGridReact } from "ag-grid-react";

export const Users_Manage = () => {
  const [users, setUsers] = useState([]);
  const [rowData, setRowData] = useState([]);

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
    </>
  );
};

export default Users_Manage;
