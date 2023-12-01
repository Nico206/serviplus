import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>  {
    return(
<nav className="main-header navbar navbar-expand navbar-white navbar-light">

    <ul className="navbar-nav">
    <li className="nav-item">
        <Link to={"#"} className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars" /></Link>
        
    </li>
    </ul>
    <ul className="navbar-nav ml-auto">
    <div className="form-inline">
                </div>
    </ul>
</nav>


    );
}

export default Navbar;