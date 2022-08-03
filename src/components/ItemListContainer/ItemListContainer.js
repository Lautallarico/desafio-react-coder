
import products from "../Products/Products"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ItemListContainer = ({ section, categoryParam }) => {


    const { category } = useParams()
    const [listProducts, setListProducts] = useState([])
    const filterByCategory = products.filter((prod) => prod.categoryId === category)

    // const getProducts = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(products)
    //     }, 2000)
    // })

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (categoryParam === "") {
                resolve(products)
            } else {
                resolve(filterByCategory)
            }
        }, 2000)
    })




    useEffect(() => {
        getProducts
            .then((res) => { setListProducts(res) })
            .catch((error) => { console.log('Falla en el sistema') })
            .finally(() => { console.log('Se terminó todo'); })

    }, [filterByCategory])

    // useEffect(() => {
    //     filterByCategory()
    // }, [])

    


    return (
        <div className="list-products">
            <h2>{section}</h2>
            <ItemList items={listProducts} />
        </div>
    )
}

export default ItemListContainer