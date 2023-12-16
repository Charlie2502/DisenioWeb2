import React, { useEffect, useState } from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase-config';


export const Stores = () => {

    const [stores, setStores] = useState([]);

    const storesCollectionRef = collection(db, "Store");

    /* Show Users */
    useEffect(() => {

        const getStores = async () => {
            const data = await getDocs(storesCollectionRef);
            setStores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getStores();
    }, [])

    /* Manage Store Link */
    let history = useNavigate();

    const manage = () => {
        
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

            <div>
                {stores.map((store) => {
                    return (
                        <div className="card text-black mb-3" style={{ maxWidth: "20rem", margin: "30px 45px", backgroundColor: '#D5D8DC', fontFamily: 'sans-serif' }}>
                            <div className="card-header">
                                <img src={store.img} alt="" style={{ height: '50px', width: '120px' }} />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <b>{store.name}</b>
                                </h4>
                                <p className="card-text">{store.served_area}</p>
                                <p className="card-text">{store.industry}</p>
                                <button class="btn btn-info" type="button">Administrar</button>
                            </div>
                        </div>
                    );
                })}
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