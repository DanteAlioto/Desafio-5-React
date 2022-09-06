import React from "react";
import CartWidget from "./CartWidget"
const Navbar = () => {


return(
<nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
        <CartWidget/>
        <span className="navbar-text" href="index.html">ReactEcommerce</span>

        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item px-4">
                    <a className="nav-link active px-4" href="index.html">Inicio</a>
                </li>
                <li className="nav-item px-4 ">
                    <a className="nav-link px-4" href="index.html">Productos</a>
                </li>
                <li className="nav-item px-4">
                    <a className="nav-link px-4" href="index.html">Contacto</a>
                </li>
            </ul>
        </div>

        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
</nav>
)
}

export default Navbar;