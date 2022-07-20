

import ItemProduct from "../ItemProduct/ItemProduct"

const ItemListContainer = ({ section }) => {

    //Productos de prueba
    const prod1 = {
        title: 'Producto 1',
        price: 1000,
        image: 'zapa1.jpg',
        stock: 4
    }
    const prod2 = {
        title: 'Producto 2',
        price: 2000,
        image: 'zapa2.jpg',
        stock: 8
    }


    return (
        <div className="list-products">
            <h2>{section}</h2>
            <ItemProduct data={prod1} />
            <ItemProduct data={prod2} />
        </div>
    )
}

export default ItemListContainer