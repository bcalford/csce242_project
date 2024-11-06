import { Outlet, Link } from "react-router-dom";
import "./styles.css";
import "./layout.css";

const Layout = () => {
    return (
    <>
        <header id="main-header">
            <a id="logo-link" href="index.html"><img id="logo" src="images/logo.png" /></a>
            <hr className="header-line" />
            <nav id="main-nav">
                <ul id="nav-list">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="./dishes">
                        <li>Dishes</li>
                    </Link>
                    <Link to="./plans">
                        <li>Plans</li>
                    </Link>
                    <Link to="./order">
                        <li>Order</li>
                    </Link>
                    <Link to="./about">
                        <li>About</li>
                    </Link>
                </ul>
            </nav>
            <hr className="header-line" />
        </header>
        

        <Outlet />
    </>
    )
}

export default Layout;