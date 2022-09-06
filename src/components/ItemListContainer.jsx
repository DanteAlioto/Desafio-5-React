import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {

    const productos = [{"id":1, "nombre":"Dante", "descripcion":"blablablalba","imagen":"eadsas"},{"id":2, "nombre":"Loris", "descripcion":"blablablalba","imagen":"eadsas"}];

    const [items, setItems] = useState(productos);



    /*useEffect(() => {

        const promesa = async () =>{
            await new Promise((resolve,reject) => {
                    setTimeout(() => {
                        resolve(productos);
                    },2000);
            });
        };

        promesa.then((respuesta) => {
            setItems(respuesta);
        });
    },[]);*/


    return(
        <div className="container">
            <p>{greeting}, Tutora! </p>

            <ItemList items = {items}/>
            <hr />
            <ItemCount stock = {5} initial = {1} onAdd = {0}/>
            <hr />
        </div>
    )
}

export default ItemListContainer;
