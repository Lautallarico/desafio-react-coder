

const ItemDetail = ({ item }) => {

    const { image, title, description, price } = item

    return (
        <div className="item-detail">
            <img src={`/assets/${image}`} alt="imagen de producto" />
            <p>{title}</p>
            <p>{description}</p>
            <p>$ {price}</p>
        </div>
    )
}

export default ItemDetail