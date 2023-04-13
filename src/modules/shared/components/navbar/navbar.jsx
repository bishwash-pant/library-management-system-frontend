import logo from '../../../../assets/images/logo-lib.png'
import './navbar.scss'

function NavBarComponent() {
    return <div className="header fixed top-0 py-2 h-[5rem] flex gap-5 w-[100vw] px-5 items-center shadow-md">
        <img src={logo} alt='logo' className="logo-image" />

        <div>Header elements are placed here</div>
    </div>
}
export default NavBarComponent;