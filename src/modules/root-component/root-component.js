import { Outlet } from "react-router";
import { LoaderComponent } from "../shared/components/loader/loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../../state-management/reducers/auth-reducers";

export function RootComponent() {
    const dispatch = useDispatch();
   
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