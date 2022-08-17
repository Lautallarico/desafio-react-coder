
import products from "../Products/Products"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore"
import db from "../../firebaseConfig"

const ItemListContainer = ({ section, categoryParam }) => {


    const { category } = useParams()
    const [listProducts, setListProducts] = useState([])
    const filterByCategory = products.filter((prod) => prod.categoryId === category)


    // const getProducts = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         if (categoryParam === "") {
    //             resolve(products)
    //         } else {
    //             resolve(filterByCategory)
    //         }
    //     }, 2000)
    // })

    const getProducts = async () => {
        const productCollection = collection(db, 'Products')
        const productSnapshot = await getDocs(productCollection)
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
            // console.log(doc.data())
            // console.log('data id', doc.id);
        })
        return productList
    }



    useEffect(() => {
        getProducts()
            .then((res) => { setListProducts(res) })
            .catch((error) => { console.log('Falla en el sistema') })
            .finally(() => { })
        // getProducts
        //     .then((res) => { setListProducts(res) })
        //     .catch((error) => { console.log('Falla en el sistema') })
        //     .finally(() => { })
    }, [filterByCategory]) // eslint-disable-line react-hooks/exhaustive-deps



    return (
        <div className="list-products">
            <h2>{section}</h2>
            {/* {console.log(filterByCategory[0].hand)} */}
            <ItemList items={listProducts} />
        </div>
    )
}

export default ItemListContainer