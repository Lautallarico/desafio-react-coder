
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (

    <div className="App">
      <NavBar />
      <div>
        <ItemListContainer section={'Productos'} />
      </div>

    </div>
  );
}

export default App;
