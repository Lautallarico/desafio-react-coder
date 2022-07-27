import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import products from "../Products/Products"

const ItemDetailContainer = () => {

    const [detailContainer, setDetailContainer] = useState([])

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })

    useEffect(() => {
        getItem
            .then((res) => { setDetailContainer(res) })
            .catch((error) => { console.log('Error en ItemListContainer'); })
            .finally(() => { console.log('Se termino ItemListContainer'); })
    }, [])

    return (

        <>
            <ItemDetail section={detailContainer} />
        </>
    )
}

export default ItemDetailContainer