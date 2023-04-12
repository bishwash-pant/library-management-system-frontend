import { Outlet } from "react-router";
import { LoaderComponent } from "../shared/components/loader/loader";

export function RootComponent() {
    const loader = false;
    return (
        <>
            {loader ? <LoaderComponent /> : null}
            <Outlet />
        </>
    )

}