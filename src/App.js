
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (

    <div className="App">
      <NavBar />
      <div>
        {/* <ItemListContainer section={'Dedos en oferta'} /> */}
        <ItemDetailContainer />
      </div>

    </div>
  );
}

export default App;
