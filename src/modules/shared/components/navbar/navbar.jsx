
import logo from '../../../../assets/images/logo.png'
import './navbar.scss'

function NavBarComponent() {

    return <div className="header fixed top-0 py-2 h-[10rem] w-[100vw] flex gap-6 px-8 items-center text-[1.25rem]">
        <img src={logo} alt='logo' className="logo-image" />

        <div>Header elements are places here</div>
    </div>
}
export default NavBarComponent;