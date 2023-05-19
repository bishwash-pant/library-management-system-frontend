import { useSelector } from 'react-redux';
import logo from '../../../../assets/images/logo.png'
import './navbar.scss'
import { NotificationComponent } from '../notification/notification';


function NavBarComponent() {
    const isAdmin = useSelector((state)=>state.authState.user?.isAdmin);
    return <div className="header fixed top-0 py-2 h-[5rem] flex gap-5 w-[100vw] px-5 items-center justify-between shadow-md">
        <div className='flex items-center justify-center'>
           <img src={logo} alt='logo' className="logo-image" />

        <div>{isAdmin?'Admin':'User'}</div> 
        </div>
        
        <div className='justify-end'>
           <NotificationComponent/> 
        </div>
        
    
    </div>
}
export default NavBarComponent;