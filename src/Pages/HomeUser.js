import React from 'react';
import { Link } from 'react-router-dom';
import NavbarUser from '../Components/navbarUser';
import SidebarUser from '../Components/sidebarUser';
import HeaderUser from '../Components/headerUser';

const HomeUser = () => {
    return (
        <div className="wrapper">
            <NavbarUser></NavbarUser>
            <SidebarUser></SidebarUser>
            <div className="content-wrapper">
                <HeaderUser
                    titulo={"Bienvenido a Serviplus"}
                    breadCrumb1={"Inicio"}
                />
                <section className='content'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-90 col-5'>
                                <div className='small-box bg-secondary'>
                                    <div className='inner'>
                                        <h3>¿Quieres crear un ticket?</h3>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className='icon'>
                                        <i className='fa fa-bag' />
                                    </div>
                                    <Link to={"/TicketsC"} className='small-box-footer bg-dark'>Crea un tickett</Link>
                                </div>
                            </div>

                            <div className='col-lg-10 col-5'>
                                <div className='small-box bg-info'>
                                    <div className='inner'>
                                        <h3>Acerca de la empresa</h3>
                                        
                                        <h4>Serviplus es una empresa especializada en el mantenimiento de equipos electrodomésticos,
                                         destacándose por ofrecer servicios de alta calidad y confiabilidad. Con un equipo de profesionales capacitados y comprometidos,
                                            Serviplus se dedica a asegurar que los electrodomésticos de sus clientes funcionen de manera eficiente y prolonguen su vida útil.</h4>
                                        
                                    </div>
                                    <div className='icon'>
                                        <i className='fa fa-bag' />
                                    </div>
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
export default HomeUser;