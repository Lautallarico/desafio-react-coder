import ItemCount from "../ItemCount/ItemCount"

const Item = ({ data }) => {

    const { image, title, price, stock } = data
    return (

        <div className="item-product">
            <img src={`/assets/${image}`} alt="imagen de producto" />
            <p>{title}</p>
            <p>$ {price}</p>
            <ItemCount stock={stock} initial={1} />
            <button>Comprar</button>
        </div>

    )
}

export default Item