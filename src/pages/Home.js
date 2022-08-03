
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"

const Home = () => {

    return (
        <div className="App">
            <section>
                <ItemListContainer section={'Dedos en oferta'} categoryParam='' />
            </section>
        </div>

    )
}

export default Home