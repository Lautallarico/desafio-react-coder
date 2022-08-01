import ItemProduct from "../ItemProduct/ItemProduct"

const ItemList = ({ items }) => {
    return (
        <>
            {items.map((product) => {
                return <ItemProduct key={product.id} data={product} />
            })}
        </>
    )
}


export default ItemList