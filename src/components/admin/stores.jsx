import React, { useEffect, useState } from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase-config';
import Stores_Manage from './stores_manage';

import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

export const Stores = () => {

    const [stores, setStores] = useState([]);
    const [storeName, setStoreName] = useState("");
    const [products, setProducts] = useState([]);

    const productsCollectionRef = collection(db, "Store_Catalog");
    const storesCollectionRef = collection(db, "Store");

    /* Show Stores */
    useEffect(() => {

        const getStores = async () => {
            const data = await getDocs(storesCollectionRef);
            setStores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getStores();
    }, [])

    /* Show Products */
    useEffect(() => {

        const getProducts = async () => {
            const data = await getDocs(productsCollectionRef);
            setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getProducts();
    }, [])

    /* Manage Store */
    

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

            <div>
                {stores.map((store, index) => {

                    return (
                        <div key={index} className="card text-black mb-3" style={{ maxWidth: "20rem", margin: "30px 45px", backgroundColor: '#D5D8DC', fontFamily: 'sans-serif' }}>
                            <div className="card-header">
                                <img src={store.img} alt="" style={{ height: '50px', width: '120px' }} />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <b>{store.name}</b>
                                </h4>
                                <p className="card-text">{store.served_area}</p>
                                <p className="card-text">{store.industry}</p>

                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { setStoreName(store.name) }}>
                                    Administrar
                                </button>

                                {/* <button className="btn btn-info" type="button" onClick={() => {manage(store.name)}}>Administrar</button> */}
                            </div>

                        </div>

                    );
                })}
            </div>



            {/* Store Catalog Modal */}
            <div class="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{storeName}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {products.map((product) => {

                                console.log(product.productName,
                                product.category,
                                product.productValue,
                                product.availability);

                                return (
                                    <div>
                                        <p>{product.productName}</p>
                                        <p>{product.category}</p>
                                        <p>{product.productValue}</p>
                                        <p>{product.availability}</p>
                                    </div>
                                )

                            })}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <MDBFooter className='text-center text-white' style={{ backgroundColor: '#21081a', position: 'absolute', left: 0, right: 0, bottom: 0 }}>
                <MDBContainer className='p-4'></MDBContainer>
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2023 Copyright:
                    <a className='text-white' href='https://habbo.com/'>
                        Larry.com
                    </a>
                </div>
            </MDBFooter>


        </>
    )


}

export default Stores;