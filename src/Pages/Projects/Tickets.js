import React, { useEffect, useState } from "react";
import Navbar from "../../Components/navbar";
import Sidebar from "../../Components/sidebar";
import Header from "../../Components/header";
import { Link, useParams } from "react-router-dom";

import APIInvoke from "../../Utils/APIInvoke";

const ProjectsTickets = () => {
    const [tickets, setTickets] = useState([]);
    const cargarTickets = async () => {
        const response = await APIInvoke.invokeGET(`/Tickets`);
        console.log(response.tickets)
        setTickets(response);
    }
    useEffect(() => {
        cargarTickets();
    }, [])
    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <div className="content-wrapper">
                <Header
                    titulo={"Listado de tickets"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Proyectos"}
                    ruta1={"/Home"}
                />

                <section className='content'>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Lista de tickets actuales</h3>
                        </div>
                        <div className="card-body">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Tickets registrados:</h3>
                                    </div>
                                    <div className="card-body">
                                        <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4"><div className="row"><div className="col-sm-12 col-md-6"></div><div className="col-sm-12 col-md-6"></div></div><div className="row"><div className="col-sm-12"><table id="example2" className="table table-bordered table-hover dataTable dtr-inline" aria-describedby="example2_info">
                                            <thead>
                                                <tr><th className="sorting sorting_desc" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Rendering engine: activate to sort column ascending" aria-sort="descending">id del ticket</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Browser: activate to sort column ascending">Titulo del ticket</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Platform(s): activate to sort column ascending">Descripcion</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Engine version: activate to sort column ascending">Nombre del usuario</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">Fecha del registro</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Browser: activate to sort column ascending">Respuesta del ticket</th></tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    tickets.map(
                                                        item => (
                                                            <tr className="odd" key={item.id}>
                                                                <td className="sorting_1 dtr-control">{item.id}</td>
                                                                <td>{item.title}</td>
                                                                <td>{item.description}</td>
                                                                <td>{item.username}</td>
                                                                <td>{item.date}</td>
                                                                <td>{item.answer}</td>
                                                            </tr>
                                                        ))
                                                }
                                            </tbody>
                                            <tfoot>
                                            </tfoot>
                                        </table></div></div>
                                        <div className="row"><div className="col-sm-12 col-md-5">
                                           
                                                </div>
                                                <div className="col-sm-12 col-md-7">
                                                <div className="dataTables_paginate paging_simple_numbers" id="example2_paginate">
                                                    <ul className="pagination">
                                                        <li className="paginate_button page-item previous disabled" id="example2_previous">
                                                        </li>
                                                    </ul>
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>
            </div>
            
        </div>
    );
}

export default ProjectsTickets;