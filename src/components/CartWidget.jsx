import React from "react";

const CartWidget = () => {

    let icon = <img  src={process.env.PUBLIC_URL + "/logo192.png"} width="80" alt= "logo" />

    return(
        <div>
            <a className="navbar-brand" href="index.html">{icon}</a>
            <hr />
        </div>
    )
}

export default CartWidget;
