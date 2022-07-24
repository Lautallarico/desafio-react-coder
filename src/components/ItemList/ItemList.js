import ItemProduct from "../ItemProduct/ItemProduct"
const ItemList = ({ dataProduct }) => {
    return (
        <>
            {dataProduct.map((product) => {
                return <ItemProduct data={product} />
            })}
        </>
    )
}


export default ItemList