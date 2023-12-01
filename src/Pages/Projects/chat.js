import React, {  useState } from 'react';
import Navbar from '../../Components/navbar';
import Sidebar from '../../Components/sidebar';
import Header from '../../Components/header';
import { Link, useNavigate, useParams } from 'react-router-dom';
import APIInvoke from "../../Utils/APIInvoke";
import swal from 'sweetalert';

const Chat = () => {

    const navigate = useNavigate();
    const { idTickets } = useParams();
    let array = idTickets.split('@');
    const titleT = array[1];
    const descriptionT = array[2];
    const userT = array[3];
    const dateT = array[4];
    const answerT = array[5];
    const userIdT = array[6]

    const [tickets, setTickets] = useState({
        title: titleT,
        description: descriptionT,
        username: userT,
        date: dateT,
        answerUser: answerT,
        userId: userIdT,
        answer: ''
    });
    const { title, description, username, date, answerUser, userId, answer } = tickets;
    const onChange = (e) => {
        setTickets({
            ...tickets,
            [e.target.name]: e.target.value
        })
    }
    const respuestaTicket  = async () => {
        const idTickets = array[0];

        const data = {
            title: tickets.title,
            description: tickets.description,
            username: tickets.username,
            date: tickets.date,
            answerUser: tickets.answerUser,
            userId: tickets.userId,
            answer: tickets.answer

        }
        const response = await APIInvoke.invokePUT(`/Tickets/${idTickets}`, data)
        const idTicketsedit = response.id

        if (response.answer !== undefined) {
            navigate("/Home")
            const msg = "La respuesta fue enviada correctamente";
            swal({
                
                text: msg,
                icon: 'success',
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
            const msg = "Se ha producido uun error y la respuesta no ha sido enviada.";
            swal({
                text: msg,
                icon: 'info',
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
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();
        respuestaTicket();
    }
    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <div className="content-wrapper">
                <Header
                    titulo={"Responder al ticket"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Chat"}
                    ruta1={"/Home"}
                />

                <section className='content'>

                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Chat del ticket</h3>
                        </div>
                        <div className="card-body">
                            <div className="col-50">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Responder al ticket</h3>
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
                                                    readOnly
                                                />
                                                <label htmlFor="title">Descripcion del ticket</label>
                                                <input
                                                    type="text"
                                                    id="description"
                                                    name="description"
                                                    placeholder="Descripcion"
                                                    value={description}
                                                    onChange={onChange}
                                                    readOnly
                                                />
                                                 <label htmlFor="title">Nombre del usuario</label>
                                                <input
                                                    type="text"
                                                    id="username"
                                                    name="username"
                                                    placeholder="Tu nombre"
                                                    value={username}
                                                    onChange={onChange}
                                                    readOnly
                                                />
                                                <label htmlFor="title">Fecha de creacion</label>
                                                <input
                                                    type="date"
                                                    id="date"
                                                    name="date"
                                                    placeholder="Fecha de creacion de este ticket"
                                                    value={date}
                                                    onChange={onChange}
                                                />
                                               <label htmlFor="title">Id del usuario</label>
                                                <input
                                                    type="text"
                                                    id="userId"
                                                    name="userId"
                                                    placeholder="Id usuario"
                                                    value={userId}
                                                    onChange={onChange}
                                                    readOnly
                                                />
                                                <label htmlFor="title">Respuesta del cliente</label>
                                                <input
                                                    type="text"
                                                    id="answerUser"
                                                    name="answerUser"
                                                    placeholder="respuesta del cliente"
                                                    value={answerUser}
                                                    onChange={onChange}
                                                    readOnly
                                                />
                                                <label htmlFor="title">Respuesta tuya</label>
                                                <input
                                                    type="text"
                                                    id="answer"
                                                    name="answer"
                                                    placeholder="Contestar al ticket"
                                                    value={answer}
                                                    onChange={onChange}
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
    )
}

export default Chat;