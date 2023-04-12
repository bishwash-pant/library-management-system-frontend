import { Link } from "react-router-dom";
import logo from '../../../../assets/images/logo.svg'
import './navbar.scss'

function NavBarComponent() {
    return <div className="header fixed top-0 py-2 h-[10rem] flex gap-5 w-[100vw] px-5 items-center">
        <img src={logo} alt='logo' className="logo-image" />

        {/* <Link to='dashboard'>Dashboard</Link>
        <Link to='login'>Login</Link>
        <Link to='signup'>Signup</Link> */}
        <div>Header elements are placed here</div>
    </div>
}
export default NavBarComponent;