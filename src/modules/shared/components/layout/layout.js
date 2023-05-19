import { Navigate, Outlet, useLocation } from "react-router";
import NavBarComponent from "../navbar/navbar";
import SideNavComponent from "../side-nav/side-nav";
import { useDispatch, useSelector } from "react-redux";
import './layout.scss'
import { adminMenuItems, userMenuItems } from "../../roles-module/role-based-options";
import { getProfileService } from "../../../services/auth-service/profile-service";
import { getProfile, login, resetAll, setUser } from "../../../../state-management/reducers/auth-reducers";
import { useEffect, useState } from "react";
import { BreadcrumbsComponent } from "../breadcrumbs/breadcrumbs";

function LayoutComponent(props) {
    // const [user, setUser] = useState(null);
    const isLoggedIn = useSelector(state => state.authState.isLoggedIn)
    const location = useLocation();
    const pathName = location.pathname;
    const userState = useSelector(state => state.authState.user)
    const dispatch = useDispatch();

    // dispatch(getProfile());

    if (!isLoggedIn) {

        return <Navigate to='/login' state={{ returnUrl: pathName }} />
    }

    return <div className="bg-slate-100 w-[100%] h-[100vh] p-0 m-0">
        <div>
            <NavBarComponent />
        </div>
        <div className="my-10 ">
            <div>
                <SideNavComponent menuItems={(userState?.isAdmin) ? adminMenuItems : userMenuItems} />
            </div>
            <div className="outlet-wrapper">
                <div className="outlet-container">
                    <div className="my-2">
                        <BreadcrumbsComponent />
                    </div>

                    <Outlet />
                </div>
            </div>
        </div>


    </div>
}
export default LayoutComponent;
