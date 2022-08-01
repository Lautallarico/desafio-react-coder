import './NavBar.css';
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (

        <nav className='nav-primary'>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">
                    <img src="./assets/Hands-Hand-icon.png" alt="logo de tienda con forma de mano" />
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='#'>Mano Izquierda</Link></li>
                    <li><Link to='#'>Mano Derecha</Link></li>
                    <li><Link to='#'>Quienes somos?</Link></li>
                    <li><Link to='#'>Contacto</Link></li>
                    <li><CartWidget /></li>
                </ul>
            </div>
        </nav>

    )
}

export default NavBar