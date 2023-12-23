import { AgGridReact } from 'ag-grid-react'
import { MDBContainer, MDBFooter } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebase-config';
import { collection, getDocs, serverTimestamp } from 'firebase/firestore';

export const Billing = () => {

    //HOOKS
    const [billing, setBilling] = useState([]);

    //Collections
    const billingCollectionRef = collection(db, "Sales");

    /* Show Products */
    useEffect(() => {
        const getBillings = async () => {
            const data = await getDocs(billingCollectionRef);
            setBilling(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getBillings();
    }, []);

    // Billing Table Definitions
    let gridOptions = {};
    {
        billing.map((bills) => {
            // Billing Table Definitions
            console.log(bills.id);
            gridOptions = {
                rowData: [
                    {
                        IDVenta: bills.id,
                        IDUsuario: bills.UserID,
                        IDTienda: bills.StoreID,
                        Descripcion: bills.Sales_Desc,
                        ValorTotal: bills.TotalValue,
                        FechaEnvio: bills.Shipment_Date,
                        TipoEnvio: bills.Shipment_Type,
                        FechaCreada: bills.Created_At
                    },
                ],
                colmunDefs: [
                    { field: "IDVenta", type: "editable" },
                    { field: "IDUsuario", type: "editable" },
                    { field: "IDTienda", type: "editableNum" },
                    { field: "Descripcion", type: "editableNum" },
                    { field: "ValorTotal", type: "editableNum" },
                    { field: "FechaEnvio", type: "editableNum" },
                    { field: "TipoEnvio", type: "editableNum" },
                    { field: "FechaCreada", type: "editableNum" },

                ],
            };

            
        })
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
                            <form className="d-flex" style={{ paddingRight: 20 }}>
                                <input className="form-control me-sm-2" type="search" placeholder="Search" />
                                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>

            {/* BILLING TABLE */}

            <div
                className={"ag-theme-quartz-dark"}
                style={{ width: "86%", height: "250px", margin: "auto" }}
            >
                <AgGridReact
                    rowData={gridOptions.rowData}
                    columnDefs={gridOptions.colmunDefs}
                />
            </div>

            <div></div>

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
