import { Link } from "react-router-dom";
import './side-nav.scss'

function SideNavComponent(props) {
    const { menuItems } = props;
    return (
        <div className="w-[fit-content] fixed side-nav pt-[3rem] px-5 z-10 shadow-md">

            {/* <Link className="nav-item" to={'/'}><MdSpaceDashboard /> <div>Dashboard</div></Link>
            <Link className="nav-item" to={'/books'}><MdLibraryBooks /> <div>My Books</div></Link>
            <Link className="nav-item" to={'books/request'}><AiOutlineUserAdd /> <div>Request</div></Link>
            <Link className="nav-item" to={'books/return'}><BsArrowReturnLeft /> <div>Return</div></Link>
            <Link className="nav-item" to={'/settings'}><AiFillSetting /> <div>Settings</div></Link> */}
            {menuItems.map((item, index) => {
                return <Link key={index} className="nav-item" to={item.path}>{item.icon} <div>{item.name}</div></Link>
            })}

        </div>
    )
}
export default SideNavComponent;