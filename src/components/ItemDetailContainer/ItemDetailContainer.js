import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import products from "../Products/Products"
import { useParams } from 'react-router-dom'
//Firebase
import db from '../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import { async } from "@firebase/util"

const ItemDetailContainer = () => {
    const [productData, setProductData] = useState({})
    const [detailContainer, setDetailContainer] = useState([])
    const { id } = useParams()

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productData)
        }, 2000)
    })


    useEffect(() => {
        getItem
            .then((res) => { setDetailContainer(res) })
            .catch((error) => { console.log('Error en ItemDetailContainer'); })
            .finally(() => { })
    }, [])

    useEffect(() => {
        // filterById();
        getProduct()
            .then((res) => { setProductData(res) })
    }, [])

    // const filterById = () => {
    //     products.some((product) => {
    //         if (product.id == id) {
    //             console.log('producto filtrado', product);
    //             setProductData(product)
    //         }
    //     })
    // }

    const getProduct = async () => {
        const docRef = doc(db, 'Products', id)
        const docSnapshot = await getDoc(docRef)
        console.log('docsnapshot', docSnapshot);

        let product = docSnapshot.data()
        product.id = docSnapshot.id
        console.log('data con id', product);
        return product
    }



    return (

        <>
            <ItemDetail data={productData} />
        </>
    )
}

export default ItemDetailContainer