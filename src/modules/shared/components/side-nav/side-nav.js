import { Link } from "react-router-dom";
import './side-nav.scss'

function SideNavComponent() {

    return (
        <div className="w-[fit-content] h-[110vh] fixed side-nav pt-[5rem] px-5 z-10 my-[5rem]">

            <Link className="nav-item" to={'/'}> Dashboard</Link>
            <Link className="nav-item" to={'/books'}>My Books</Link>
            <Link className="nav-item" to={'books/request'}>Request Books</Link>
            <Link className="nav-item" to={'books/return'}>Return Books</Link>
            <Link className="nav-item" to={'/settings'}>Settings</Link>


        </div>
    )
}
export default SideNavComponent;