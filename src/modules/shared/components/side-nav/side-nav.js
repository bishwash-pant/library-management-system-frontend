import { Link } from "react-router-dom";
import './side-nav.scss'

function SideNavComponent(props) {
    const { menuItems } = props;
    return (
        <div className="w-[fit-content] fixed side-nav pt-[3rem] px-5 z-10 shadow-md">
            {menuItems.map((item, index) => {
                return <Link key={index} className="nav-item" to={item.path}>{item.icon} <div>{item.name}</div></Link>
            })}

        </div>
    )
}
export default SideNavComponent;