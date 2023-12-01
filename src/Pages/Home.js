import React from 'react';
import Navbar from '../Components/navbar';
import Sidebar from '../Components/sidebar';
import Header from '../Components/header';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div class="wrapper">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <div className="content-wrapper">
                <Header
                    titulo={"Panel de administrador"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Panel"}
                    ruta1={"/Home"}
                />
        
                <section className='content'>
                    <div className='container-fluid'>
                        <div className='row'>

                            <div className='col-lg-10 col-50'>
                                <div className='small-box bg-secondary'>
                                    <div className='inner'>
                                        <h3>Usuarios</h3>
                                        <p>&nbsp;</p>

                                        <h4> Mira una lista de todos los usuarios actuales</h4>
                                    </div>
                                    <div className='icon'>
                                        <i className='fa fa-bag'/>
                                    </div>
                                    <Link to={"/Projects"} className='small-box-footer bg-dark'>Ver usuarios</Link>
                                </div>
                            </div>
                            <div className='col-lg-10 col-90'>
                                <div className='small-box bg-secondary'>
                                    <div className='inner'>
                                        <h3>Tickets</h3>
                                        <p>&nbsp;</p>

                                        <h4> Mira una lista de todos los tickets actuales</h4>
                                    </div>
                                    <div className='icon'>
                                        <i className='fa fa-bag'/>
                                    </div>
                                    <Link to={"/Tickets"} className='small-box-footer bg-dark'>Ver tickets</Link>
                                </div>
                                </div>
                                <div className='col-lg-10 col-90'>
                                <div className='small-box bg-secondary'>
                                    <div className='inner'>
                                        <h3>Chatea</h3>
                                        <p>&nbsp;</p>
                                        <h4> Mira una lista de todos los chats disponibles</h4>
                                    </div>
                                    <div className='icon'>
                                        <i className='fa fa-bag'/>
                                    </div>
                                    <Link to={"/Chats"} className='small-box-footer bg-dark'>Ver chats</Link>
                                </div>
                                </div>
                            <br></br>
                            </div>
                        </div>
                </section>
            </div>
        </div>
    );
}

export default Home;