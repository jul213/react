import {Outlet, Link} from "react-roter-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}