import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom"


const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to='/'>Tienda Bags</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to='/'>Productos</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/category/mochilas'>Mochilas</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/category/carteras'>Carteras</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/category/accesorios'>Accesorios</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/cart'> <CartWidget /></NavLink>
                    </li>
                </ul>
                </div>
            </div>
    </nav>
    )
}

export default Navbar
