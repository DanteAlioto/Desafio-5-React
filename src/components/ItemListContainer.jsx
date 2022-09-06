import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";


const ItemListContainer = (greeting) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const productos = [
            {"id":1, "nombre":"Hamburguesa", "descripcion":"El sabor de la carne 100% vacuna más deliciosa, acompañado del pan más esponjoso, kétchup, mostaza y cebolla triturada.", "calorias":243, "imagen":"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXzqebG/200/200/original?country=ar", "precio":500},
            {"id":2, "nombre":"Hamburguesa con Queso", "descripcion":"Carne 100% vacuna, queso derretido y mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar. Un clásico que nunca pasa de moda.", "imagen":"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX8TYcp/200/200/original?country=ar", "calorias":289, "precio":600},
            {"id":3, "nombre":"McFiesta", "descripcion":"Hamburguesa elaborada con carne 100% de carne vacuna, mayonesa, lechuga, tomate.", "calorias":295, "imagen":"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXakvb9/200/200/original?country=ar", "precio":700},
            {"id":4, "nombre":"McDuo", "descripcion":"Una hamburguesa exquisita compuesta de dos carnes 100% vacuna, acompañadas del clásico pan, mostaza, kétchup, queso derretido, y un toque de cebolla que la hace única.", "calorias":303, "imagen":"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXhzvVg/200/200/original?country=ar", "precio":800},
            {"id":5, "nombre":"Triple Hamburguesa con Queso", "descripcion":"Tres medallones de carne 100% vacuna, queso derretido, mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar.", "calorias":310, "imagen":"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXsCqnz/200/200/original?country=ar", "precio":900},
            {"id":6, "nombre":"Big Mac", "descripcion":"Quizás sean las dos hamburguesas de carne 100% vacuna con esa salsa especial y queso derretido, el toque de cebolla y la frescura de la lechuga o el crocante del pepino, lo que la hace la hamburguesa más famosa del mundo. Un sabor único.", "calorias":505, "imagen":"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX3vl0y/200/200/original?country=ar", "precio":1000}
        ];

        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, []);


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
