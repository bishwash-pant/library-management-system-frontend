import { Outlet } from "react-router";
import NavBarComponent from "../navbar/navbar";
import SideNavComponent from "../side-nav/side-nav";

function LayoutComponent(props) {
    return <div>
        <div>
            <NavBarComponent />
        </div>
        <div className="my-10 flex ">
            <div>
                <SideNavComponent />
            </div>
            <div className="my-[8rem] p-2">

                <Outlet />
            </div>
        </div>

    </div>
}
export default LayoutComponent;