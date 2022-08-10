
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"


const Home = () => {

    return (
        <div className="App">
            <section>
                <ItemListContainer  categoryParam='' section={'Dedos en oferta'} />
            </section>
        </div>

    )
}

export default Home