import { Link } from "react-router-dom";
import './side-nav.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideNavComponent() {
    return (
        <div className=" w-[10rem] h-[80vh] my-[6rem] side-nav py-10 px-5">

            <Link className="nav-item" to={'/'}>Dashboard</Link>
            <Link className="nav-item" to={'/books'}>My Books</Link>
            <Link className="nav-item" to={'books/request'}>Request books</Link>
            <Link className="nav-item" to={'books/return'}>Return books</Link>
            <Link className="nav-item" to={'/settings'}>Settings</Link>

        </div>
    )
}
export default SideNavComponent;