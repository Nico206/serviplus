import React from "react";
import { Link } from "react-router-dom";

const NavbarUser = () =>  {
    return(
<nav className="main-header navbar navbar-expand navbar-white navbar-light">

    <ul className="navbar-nav">
    <li className="nav-item">
        <Link to={"#"} className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars" /></Link>
        
    </li>
    </ul>
    <ul className="navbar-nav ml-auto">
  
    </ul>
</nav>
    );
}

export default NavbarUser;