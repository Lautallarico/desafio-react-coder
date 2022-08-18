import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
//Firebase
import db from '../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [productData, setProductData] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getProduct()
            .then((res) => { setProductData(res) })
    }, [])


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