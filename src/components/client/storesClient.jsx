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
    const [rowData, setRowData] = useState([]);

    //Collections
    const productsCollectionRef = collection(db, "Store_Catalog");
    const storesCollectionRef = collection(db, "Store");

    const colmunDefs = [
        { field: "category" },
        { field: "productName" },
        { field: "availability" },
        { field: "productValue" },
    ];

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
            const rowData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setRowData(rowData);

            const rowIndex = 5; // Change this to the desired row index
            const fieldName = storeName; // Change this to the desired field name

            const specificValue = rowData[rowIndex] ? rowData[rowIndex][fieldName] : null;

            console.log(`Value at row ${rowIndex}, ${fieldName}: ${specificValue}`);

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
                                    <a className="nav-link" href="/buyer/user_orders" role="button" aria-haspopup="true" aria-expanded="false">Mis Pedidos</a>
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
            <div style={{ display: 'block' }}>
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
                                <p className="card-text">Rating:</p>

                                <button
                                    type="button"
                                    className="btn btn-primary"
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
                className="modal fade"
                id="manageModal"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {storeName}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div
                                className={"ag-theme-quartz-dark"}
                                style={{ width: "100%", height: "250px" }}
                            >
                                <AgGridReact
                                    rowData={rowData}
                                    columnDefs={colmunDefs}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
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
