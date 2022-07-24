import ItemProduct from "../ItemProduct/ItemProduct"

const ItemList = ({ items }) => {
    return (
        <>
            {items.map((product) => {
                return <ItemProduct data={product} />
            })}
        </>
    )
}


export default ItemList