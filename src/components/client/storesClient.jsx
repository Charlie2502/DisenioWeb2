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

import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const StoresClient = () => {
    /* HOOKS */
    // Display Hooks
    const [stores, setStores] = useState([]);
    const [storeName, setStoreName] = useState("");
    const [products, setProducts] = useState([]);

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


    //Add Products to Shopping Cart


    return (
        <>
            {/* NAVBAR */}
            <div style={{ paddingBottom: '60px' }}>
                <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                    <div className="container-fluid" style={{ padding: 10 }}>
                        <a className="navbar-brand" style={{ paddingLeft: 20 }} href="">Larry</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor02">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item" style={{ paddingLeft: 20 }}>
                                    <a className="nav-link" href="/buyer/stores" role="button" aria-haspopup="true" aria-expanded="false">Tiendas</a>
                                </li>
                                <li className="nav-item" style={{ paddingLeft: 20 }}>
                                    <a className="nav-link" href="/buyer/stores_buy" role="button" aria-haspopup="true" aria-expanded="false">Mis Pedidos</a>
                                </li>
                                <li className="nav-item" style={{ paddingLeft: 20 }}>
                                    <a className="nav-link" href='/buyer/my_profile'>Mi Perfil</a>
                                </li>
                            </ul>
                            <ul>
                                <li className="nav-item" style={{ paddingRight: 20 }}>
                                    <a className="nav-link" href="/users_manage">
                                        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
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
                                width:'15%',
                                margin: "10px 45px",
                                backgroundColor: "#D5D8DC",
                                fontFamily: "sans-serif",
                                display:'inline-block'
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
                                <p className="card-text">Rating:</p>

                                <button
                                    type="button"
                                    class="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#manageModal"
                                    onClick={() => {
                                        setStoreName(store.name);
                                    }}
                                >
                                    Comprar
                                </button>

                            </div>
                        </div>
                    );
                })}
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

export default StoresClient;
