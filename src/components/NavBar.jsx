import React from "react";
import CartWidget from "./CartWidget"
const Navbar = () => {


return(
<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <CartWidget/>
        <span class="navbar-text" href="index.html">ReactEcommerce</span>

        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item px-4">
                    <a class="nav-link active px-4" href="index.html">Inicio</a>
                </li>
                <li class="nav-item px-4 ">
                    <a class="nav-link px-4" href="index.html">Productos</a>
                </li>
                <li class="nav-item px-4">
                    <a class="nav-link px-4" href="index.html">Contacto</a>
                </li>
            </ul>
        </div>

        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
</nav>
)
}

export default Navbar;