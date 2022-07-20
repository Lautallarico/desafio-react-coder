import ItemCount from "../ItemCount/ItemCount"


const ItemProduct = ({data}) => {

    const { title, image, price, stock } = data

    return (
        <div className="item-product">
            <img src={`/assets/${image}`} alt="imagen de producto" />
            <p>{title}</p>
            <p>$ {price}</p>
            <ItemCount stock="5" initial="1"/>
            <button>Comprar</button>
        </div>
    )
}

export default ItemProduct