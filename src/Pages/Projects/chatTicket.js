import React, { useEffect, useState } from "react";
import Navbar from "../../Components/navbar";
import Sidebar from "../../Components/sidebar";
import Header from "../../Components/header";
import { Link } from "react-router-dom";

import APIInvoke from "../../Utils/APIInvoke";
import '../../css/Style.css'

const ChatTickets = () => {
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
                    breadCrumb2={"Chats"}
                    ruta1={"/Home"}
                />
                <section className='content'>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Lista de chats</h3>
                            
                        </div>
                        <div className="card-body">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Mira los tickets registrados</h3>
                                    </div>
                                    <div className="card-body">
                                        <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4"><div className="row"><div className="col-sm-12 col-md-6"></div><div className="col-sm-12 col-md-6"></div></div><div className="row"><div className="col-sm-12"><table id="example2" className="table table-bordered table-hover dataTable dtr-inline" aria-describedby="example2_info">
                                            <thead>
                                                <tr><th className="sorting sorting_desc" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Rendering engine: activate to sort column ascending" aria-sort="descending">Id del ticket</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Browser: activate to sort column ascending">Titulo del ticket</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Platform(s): activate to sort column ascending">Descripcion</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Engine version: activate to sort column ascending">Nombre del usuario</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">Fecha del registro</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Browser: activate to sort column ascending">Respuetas</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Browser: activate to sort column ascending">Id usuario</th>
                                                    <th></th></tr>
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
                                                                <td>{item.answerUser}</td>
                                                                <td>{item.userId}</td>
                                                                <td><Link to={`/ChatsR/${item.id}@${item.title}@${item.description}@${item.username}@${item.date}@${item.answerUser}@${item.userId}`} className="btn bg-primary">
                                                                    Contestar
                                                                </Link></td>
                                                            </tr>
                                                        ))
                                                }
                                            </tbody>
                                            <tfoot>
                                            </tfoot>
                                        </table>
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

export default ChatTickets;