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
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="./dishes">Dishes</Link>
                    </li>
                    <li>
                        <Link to="./plans">Plans</Link>
                    </li>
                    <li>
                        <Link to="./order">Order</Link>
                    </li>
                    <li>
                        <Link to="./about">About</Link>
                    </li>
                </ul>
            </nav>
            <hr className="header-line" />
        </header>
        

        <Outlet />
    </>
    )
}

export default Layout;