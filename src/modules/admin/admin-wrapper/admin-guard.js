import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { resetAll } from "../../../state-management/reducers/auth-reducers";

export function AdminGuard() {
    const isAdmin = useSelector(state => state.authState.user?.isAdmin);
    const dispatch = useDispatch();
    if (!isAdmin) {
        console.log('no admin');
        return <Navigate to='/login' />
    }
    return <Outlet />;
}