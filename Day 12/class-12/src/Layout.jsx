import {Link, Outlet} from "react-router-dom";
 
const Layout = () => {
    return(
        <>
        <nav>
            <ul>
                <li><Link to="/about">About Component</Link></li>
                <li><Link to="/contact">Contact Component</Link></li>
                <li><Link to="/digital">Digital Component</Link></li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}
 
 
export default Layout;