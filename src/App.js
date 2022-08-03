
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Category from './pages/Category';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/productos' element={<ItemListContainer />} />
        <Route path='/:category' element={<Category />}/>
        <Route path='/productos/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<h1>ERROR 404 - No sé donde estoy</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
