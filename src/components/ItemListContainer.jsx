import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const productos = [
            {"id":1, "nombre":"Iced Latte", "descripcion":"1", "calorias":243, "imagen":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FIced%20Latte%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2", "precio":500},
            {"id":2, "nombre":"Caramel Macchiato", "descripcion":"2", "imagen":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FIced%20Caramel%20Macchiato%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2", "calorias":289, "precio":600},
            {"id":3, "nombre":"Americano Helado", "descripcion":"3", "calorias":295, "imagen":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FIced%20Americano%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2", "precio":700},
            {"id":4, "nombre":"Mocha Helado", "descripcion":"4", "calorias":303, "imagen":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FIced%20Mocha%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2", "precio":800},
            {"id":5, "nombre":"Cappuccino Helado", "descripcion":"5", "calorias":310, "imagen":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FIced%20Cappuccino%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2", "precio":900},
            {"id":6, "nombre":"Sweet Vainilla Brew", "descripcion":"6", "calorias":505, "imagen":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCold%20Brew%20Vainilla%20Sweet%20Cream%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2", "precio":1000}
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
            <p>Hola Tutora! </p>

            <ItemList items = {items}/>
            <hr />
            <ItemCount stock = {5} initial = {1} onAdd = {0}/>
            <hr />
        </div>
    )
}

export default ItemListContainer;
