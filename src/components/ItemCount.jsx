import React, { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [cantidad, setCantidad] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdd, setItemAdd] = useState(onAdd);

const decrementarCantidad = (valor) => {
    if (valor > 0) {
        setCantidad(valor);
    }
}
const incrementarCantidad = (valor) => {
    if (valor <= itemStock) {
        setCantidad(valor);
    }
}

const agregarProductos = () => {
    if(cantidad <= itemStock){
        setItemStock(itemStock - cantidad);
        setItemAdd(itemAdd + cantidad);
    }
}



return(
<div className="container py-5">
    <div className="row">
        <div className="col-md-2">
            <p className="text-center">Nombre del producto</p>
            <div className="input-group">
                <input type="button" className="btn btn-secondary" value="-" onClick={() => {decrementarCantidad(cantidad - 1)}} />
                <input type="text" className="form-control" value={cantidad} />
                <input type="button" className="btn btn-secondary" value="+" onClick={() => {incrementarCantidad(cantidad + 1)}} />
            </div>
            <div className="d-grid gap-2">
                <input type ="button" className="btn btn-secundary" value= "Agregar" onClick={() => {agregarProductos()}}/>
            </div>
            <p>Productos Seleccionados : {itemAdd} </p>
        </div>
    </div>
</div>
)
};

export default ItemCount;