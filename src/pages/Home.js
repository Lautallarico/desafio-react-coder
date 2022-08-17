
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"


const Home = () => {

    return (
        <div className="App">
            <section>
                <h2>Dedos en oferta</h2>
                <ItemListContainer  categoryParam='' />
            </section>
        </div>

    )
}

export default Home