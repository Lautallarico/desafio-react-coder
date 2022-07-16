//import "./NavBar.scss"
import CartWidget from "./CartWidget"


const NavBar = () => {
    return (

            <nav className='nav-primary'>
                <div className="nav-wrapper">
                    <a href="" className="brand-logo">
                        <img src="./assets/Hands-Hand-icon.png" alt="logo de tienda con forma de mano" />
                    </a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="sass.html">Productos</a></li>
                        <li><a href="badges.html">Quienes somos?</a></li>
                        <li><a href="collapsible.html">Contacto</a></li>
                        <li><CartWidget /></li>
                    </ul>
                </div>
            </nav>

    )
}

export default NavBar