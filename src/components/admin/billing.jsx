import { AgGridReact } from 'ag-grid-react'
import { MDBContainer, MDBFooter } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebase-config';
import { collection, getDocs, serverTimestamp } from 'firebase/firestore';

export const Billing = () => {

    //HOOKS
    const [billing, setBilling] = useState([]);
    const [rowData, setRowData] = useState([]);

    //Table Definitions
    const colmunDefs = [
        { field: "id" },
        { field: "UserID" },
        { field: "StoreID" },
        { field: "Sales_Desc" },
        { field: "TotalValue" },
        { field: "Shipment_Date" },
        { field: "Shipment_Type" },
        { field: "Created_At" },

    ]

    //Collections
    const billingCollectionRef = collection(db, "Sales");

    /* Show Bills */
    useEffect(() => {
        const getBills = async () => {
            const data = await getDocs(billingCollectionRef);
            const rowData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setRowData(rowData);

        };
        getBills();
    }, []);


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

            {/* BILLING TABLE */}

            <div
                className={"ag-theme-quartz-dark"}
                style={{ width: "65%", height: "250px", margin: 'auto' }}
            >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colmunDefs}
                />
            </div>

            {/* FOOTER */}
            <MDBFooter className='text-center text-white' style={{ backgroundColor: '#21081a' }}>
                <MDBContainer className='p-4'>Larry</MDBContainer>
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

export default Billing;
