import React, { useEffect, useState } from "react";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { Firestore } from "firebase/firestore";

import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import btnCellRenderer from "./btnCellRenderer";

export const Stores = () => {
  /* HOOKS */
  // Display Hooks
  const [stores, setStores] = useState([]);
  const [storeName, setStoreName] = useState("");
  const [products, setProducts] = useState([]);

  // Add Store Hooks
  const [newStoreName, setNewStoreName] = useState("");
  const [newStoreIndustry, setNewStoreIndustry] = useState("");
  const [newStoreServedArea, setNewServedArea] = useState("");
  const [newStoreIMG, setNewStoreIMG] = useState("");

  // Add Products
  const [newProdName, setNewProdName] = useState("");
  const [newProdCategory, setNewProdCategory] = useState("");
  const [newProdAvailable, setNewProdAvailable] = useState(0);
  const [newProdValue, setNewProdValue] = useState(0);

  //Collections
  const productsCollectionRef = collection(db, "Store_Catalog");
  const storesCollectionRef = collection(db, "Store");

  /* METHODS */
  /* Show Stores */
  useEffect(() => {
    const getStores = async () => {
      const data = await getDocs(storesCollectionRef);
      setStores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getStores();
  }, []);

  /* Show Products */
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProducts();
  }, []);

  /* Add Stores */

  const addStore = async () => {
    try {
      const store = await addDoc(storesCollectionRef, {
        name: newStoreName,
        industry: newStoreIndustry,
        served_area: newStoreServedArea,
        img: newStoreIMG,
        created_At: serverTimestamp(),
      });

      Swal.fire({
        title: "Tienda Añadida!",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Algo salio mal",
        text: error.message,
        icon: "error",
      });
    }
  };

  //Add Products to X Store Catalog
  const addProducts = async () => {
    try {
      const product = await addDoc(productsCollectionRef, {
        productName: newProdName,
        category: newProdCategory,
        productValue: newProdValue,
        availability: newProdAvailable,
        storeName: storeName,
      });

      Swal.fire({
        title: "Producto Agregado!",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Algo salio mal",
        text: error.message,
        icon: "error",
      });
    }
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

      {/* DISPLAY STORES */}
      <div style={{display:'block'}}>
        {stores.map((store, index) => {
          return (
            <div
              key={index}
              className="card text-black mb-3"
              style={{
                width: '15%',
                margin: "10px 45px",
                backgroundColor: "#D5D8DC",
                fontFamily: "sans-serif",
                display: 'inline-block'
              }}
            >
              <div className="card-header">
                <img
                  src={store.img}
                  alt=""
                  style={{ height: "50px", width: "120px" }}
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">
                  <b>{store.name}</b>
                </h4>
                <p className="card-text">{store.served_area}</p>
                <p className="card-text">{store.industry}</p>

                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#manageModal"
                  onClick={() => {
                    setStoreName(store.name);
                  }}
                >
                  Administrar
                </button>

              </div>
            </div>
          );
        })}
        <div style={{ marginLeft: "45px" }}>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addStoreModal"
          >
            Agregar Tienda
          </button>
        </div>
      </div>

      {/* Store Catalog Modal */}
      <div
        class="modal fade"
        id="manageModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {storeName}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {products.map((product) => {
                const gridOptions = {
                  rowData: [
                    {
                      producto: product.productName,
                      disponibilidad: product.availability,
                      categoria: product.category,
                      precio: product.productValue,
                    },
                  ],
                  colmunDefs: [
                    { field: "categoria", type: "editable" },
                    { field: "producto", type: "editable" },
                    { field: "disponibilidad", type: "editableNum" },
                    { field: "precio", type: "editableNum" },
                    {
                      field: "acciones",
                      cellRenderer: btnCellRenderer,
                      cellRendererParams: {
                        clicked: function () {
                          const deleteDocRef = doc(
                            db,
                            "Store_Catalog",
                            product.id
                          );
                          deleteDoc(deleteDocRef);
                          toast("Producto Eliminado");
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

                return (<div
                  className={"ag-theme-quartz-dark"}
                  style={{ width: "100%", height: "250px" }}
                >
                  <AgGridReact
                    rowData={gridOptions.rowData}
                    columnDefs={gridOptions.colmunDefs}
                  />
                </div>)

              })}

            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#addProdModal"
              >
                Agregar Producto
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Store Modal */}
      <div
        class="modal fade"
        id="addStoreModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        onSubmit={addStore.handleSubmit}
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
                value={newStoreName}
                class="form-control"
                placeholder="Nombre de la Tienda"
                id="name"
                required
                onChange={(event) => setNewStoreName(event.target.value)}
              />
              <input
                type="text"
                value={newStoreIndustry}
                class="form-control"
                placeholder="Forma de Ventas"
                id="industry"
                required
                onChange={(event) => setNewStoreIndustry(event.target.value)}
              />
              <input
                type="text"
                value={newStoreServedArea}
                class="form-control"
                placeholder="Localidad"
                id="served_area"
                required
                onChange={(event) => setNewServedArea(event.target.value)}
              />
              <input
                type="text"
                value={newStoreIMG}
                class="form-control"
                placeholder="URL Imagen"
                id="img"
                required
                onChange={(event) => setNewStoreIMG(event.target.value)}
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
                    addStore();
                  }}
                >
                  Agregar Tienda
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Product Modal */}
      <div class="modal" id="addProdModal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Datos del Producto</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                value={newProdName}
                class="form-control"
                placeholder="Nombre del Producto"
                id="name"
                required
                onChange={(event) => setNewProdName(event.target.value)}
              />
              <input
                type="text"
                value={newProdCategory}
                class="form-control"
                placeholder="Categoria"
                id="category"
                required
                onChange={(event) => setNewProdCategory(event.target.value)}
              />
              <input
                type="number"
                value={newProdAvailable}
                class="form-control"
                placeholder="Disponibilidad"
                id="availability"
                required
                onChange={(event) => setNewProdAvailable(event.target.value)}
              />
              <input
                type="number"
                value={newProdValue}
                class="form-control"
                placeholder="Precio"
                id="value"
                required
                onChange={(event) => setNewProdValue(event.target.value)}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                  addProducts();
                }}
              >
                Agregar Tienda
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <MDBFooter
        className="text-center text-white"
        style={{
          backgroundColor: "#21081a",
        }}
      >
        <MDBContainer className="p-4"></MDBContainer>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a className="text-white" href="https://habbo.com/">
            Larry.com
          </a>
        </div>
      </MDBFooter>
    </>
  );
};

export default Stores;
