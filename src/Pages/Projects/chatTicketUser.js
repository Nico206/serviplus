import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";

import APIInvoke from "../../Utils/APIInvoke";
import NavbarUser from "../../Components/navbarUser";
import SidebarUser from "../../Components/sidebarUser";
import HeaderUser from "../../Components/headerUser";
import '../../css/Style.css'

const ChatTicketsUser = () => {
    const [tickets, setTickets] = useState([]);
    
    const userId = localStorage.getItem("id"); // Obtener ID del usuario

    const cargarTickets = async () => {
        try {
            const response = await APIInvoke.invokeGET(`/Tickets?userId=${userId}`);
            setTickets(response);
        } catch (error) {
            console.error("Error al cargar los tickets:", error);
        }
    };
    useEffect(() => {
        cargarTickets();
    }, [])
    return (
        <div className="wrapper">
            <NavbarUser></NavbarUser>
            <SidebarUser></SidebarUser>
            <div className="content-wrapper">
                <HeaderUser
                    titulo={"Listado de tickets"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Chats"}
                    ruta1={"/Home"}
                />
                <section className='content'>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Tickets creados por ti</h3>
                        </div>
                        <div className="card-body">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Mira los tickets que has registrado</h3>
                                    </div>
                                    <div className="card-body">
                                        <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4"><div className="row"><div className="col-sm-12 col-md-6"></div><div className="col-sm-12 col-md-6"></div></div><div className="row"><div className="col-sm-12"><table id="example2" className="table table-bordered table-hover dataTable dtr-inline" aria-describedby="example2_info">
                                            <thead>
                                                <tr><th className="sorting sorting_desc" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Rendering engine: activate to sort column ascending" aria-sort="descending">Id asigando para cada ticket</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Browser: activate to sort column ascending">Titulo del ticket</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Platform(s): activate to sort column ascending">Descripcion</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Engine version: activate to sort column ascending">Nombre del usuario</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">Respuesta</th>
                                                    <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Browser: activate to sort column ascending"></th></tr>
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
                                                                <td>{item.answer}</td>
                                                                <td><Link to={`/ChatsRU/${item.id}@${item.title}@${item.description}@${item.username}@${item.date}@${item.answer}@${item.userId}`} className="btn bg-primary">
                                                                     Contestar
                                                                </Link></td>
                                                            </tr>
                                                        ))
                                                }
                                            </tbody>
                                          
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

export default ChatTicketsUser;