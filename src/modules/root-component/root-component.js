import { Outlet } from "react-router";
import { LoaderComponent } from "../shared/components/loader/loader";
import { useSelector } from "react-redux";

export function RootComponent() {
    const loadState = useSelector((state) => {
        return state.loadState.isLoading
    })
    return (
        <>
            {loadState ? <LoaderComponent /> : null}
            <Outlet />
        </>
    )

}