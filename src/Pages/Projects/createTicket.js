import React, { useEffect, useState } from "react";
import Header from "../../Components/headerUser";
import { Link } from "react-router-dom";
import APIInvoke from "../../Utils/APIInvoke";
import swal from 'sweetalert';
import NavbarUser from "../../Components/navbarUser";
import SidebarUser from "../../Components/sidebarUser";

const ProjectsCreate = () => {
    const [tickets, setTickets] = useState({
        title: '',
        description: '',
        username: '',
        date: ''
    });
    
    const { title, description, username, date } = tickets;
    useEffect(() => {
        document.getElementById("title").focus();
    }, [])

    const onChange = (e) => {
        setTickets({
            ...tickets,
            [e.target.name]: e.target.value
        })
    }

    const crearTicket = async () => {
        try {
            // Recupera el ID de usuario desde el almacenamiento local
            const userId = localStorage.getItem("id");

            const data = {
                title: tickets.title,
                description: tickets.description,
                username: tickets.username,
                date: tickets.date,
                userId: userId // Agrega el ID de usuario al ticket
            }; 
    
            const response = await APIInvoke.invokePOST(`/Tickets`, data);
            const idTickets = response.id;
            

            if (idTickets === '') {
                const msg = "El ticket no fue creado correctamente.";
                swal({
                    text: msg,
                    icon: 'error',
                    buttons: {
                        confirmar: {
                            text: 'Ok',
                            value: true,
                            visible: true,
                            className: 'btn btn-danger',
                            closeModal: true
                        }
                    }
                });
            } else {
                const msg = "El ticket fue creado correctamente.";
                swal({
                    text: msg,
                    icon: 'success',
                    buttons: {
                        confirmar: {
                            text: 'Ok',
                            value: true,
                            visible: true,
                            className: 'btn btn-primary',
                            closeModal: true
                        }
                    }
                });
                setTickets({
                    title: '',
                    description: '',
                    username: '',
                    date: ''
                });
            }
        } catch (error) {
            console.error("Error al crear el ticket:", error);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        crearTicket();
    }
    const fechaActual = new Date().toISOString().split("T")[0];
    return (

        <div className="wrapper">
            <NavbarUser></NavbarUser>
            <SidebarUser></SidebarUser>
            <div className="content-wrapper">
                <Header
                    titulo={"Crear Ticket"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Creacion"}
                    ruta1={"/Home"}
                />
                <section className='content'>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Rellena el formulario para poder crear un ticket</h3>
                        </div>
                        <div className="card-body">
                            <div className="">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Registra nuevos tickets</h3>
                                    </div>
                                </div>
                                <div className="container" id="container">
                                    <div className="form-container sign-in-container">
                                        <form onSubmit={onSubmit}>
                                            <div className="social-container">
                                            <label htmlFor="title">Título del ticket</label>
                                                <input
                                                    type="text"
                                                    id="title"
                                                    name="title"
                                                    placeholder="Titulo de tu ticket"
                                                    value={title}
                                                    onChange={onChange}
                                                    required
                                                />
                                              <label htmlFor="title">Descripcion del ticket</label>   
                                                <input
                                                    type="text"
                                                    id="description"
                                                    name="description"
                                                    placeholder="Descripcion"
                                                    value={description}
                                                    onChange={onChange}
                                                    required
                                                />
                                                 <label htmlFor="title">Nombre de usuario</label>
                                                <input
                                                    type="text"
                                                    id="username"
                                                    name="username"
                                                    placeholder="Tu nombre"
                                                    value={username}
                                                    onChange={onChange}
                                                    required
                                                />
                                                <label htmlFor="title">Fecha de creacion</label>
                                                <input
                                                    type="date"
                                                    id="date"
                                                    name="date"
                                                    placeholder="Fecha de creacion de este ticket"
                                                    value={date}
                                                    onChange={onChange}
                                                    required
                                                    min ={fechaActual}
                                                />
                                                <button type="submit">
                                                    Enviar
                                                </button>
                                            </div>
                                        </form>
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

export default ProjectsCreate;