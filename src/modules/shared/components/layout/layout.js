import { Navigate, Outlet, useLocation } from "react-router";
import NavBarComponent from "../navbar/navbar";
import SideNavComponent from "../side-nav/side-nav";
import { useSelector } from "react-redux";
import './layout.scss'
import { adminMenuItems, userMenuItems } from "../../roles-module/role-based-options";

function LayoutComponent(props) {
    const isLoggedIn = useSelector(state => state.authState.isLoggedIn)
    const location = useLocation();
    const pathName = location.pathname
    if (!isLoggedIn) {
        return <Navigate to='/login' state={{ returnUrl: pathName }} />
    }
    return <div className="bg-slate-100 w-[100%] h-[100vh] p-0 m-0">
        <div>
            <NavBarComponent />
        </div>
        <div className="my-10 ">
            <div>
                <SideNavComponent menuItems={adminMenuItems} />
            </div>
            <div className="outlet-wrapper">
                <div className="outlet-container">
                    <p>this is outlet</p>
                    <Outlet />
                </div>
            </div>
        </div>


    </div>
}
export default LayoutComponent;
