import { Outlet } from "react-router";
import NavBarComponent from "../navbar/navbar";
import SideNavComponent from "../side-nav/side-nav";
import './layout.scss'


function LayoutComponent() {



    return <div className="bg-slate-100 w-[100%] h-[100vh] p-0 m-0">
        <div>
            <NavBarComponent />
        </div>
        <div className="my-10 ">
            <div>
                <SideNavComponent />
            </div>
            <div className="outlet-wrapper">
                <div className="outlet-container">
                    <Outlet />
                </div>
            </div>
        </div>


    </div>
}
export default LayoutComponent;
