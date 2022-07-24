
import products from "../Products/Products"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"


const ItemListContainer = ({ section }) => {



    const [listProducts, setListProducts] = useState([])

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)

    })

    useEffect(() => {
        getProducts
            .then((res) => { setListProducts(res) })
            .catch((error) => { console.log('Falla en el sistema') })
            .finally(() => { console.log('Se terminó todo'); })

    }, [])



    return (
        <div className="list-products">
            <h2>{section}</h2>
            <ItemList items={listProducts} />
        </div>
    )
}

export default ItemListContainer