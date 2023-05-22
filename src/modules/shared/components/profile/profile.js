
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { CgProfile } from 'react-icons/cg'
import { resetAll } from "../../../../state-management/reducers/auth-reducers";
import { Navigate } from "react-router";
export function ProfileComponentComponent() {

    const [isOpen, setIsOpen] = useState(false)
    const userState = useSelector(state => state.authState.user)


    const dispatch = useDispatch();
    function logOut() {
        dispatch(resetAll());
        localStorage.clear();
        return <Navigate to='/login' />
    }

    return <div className="relative flex flex-col">
        <div className="flex">

            <button className="bg-transparent self-end text-xl" onClick={() => { setIsOpen(!isOpen) }}><CgProfile /></button>
        </div>
        <div>
            {isOpen && <div className="bg-white shadow-lg border-[1px] w-[20rem] p-4 fixed top-[5rem] right-[0rem] rounded-br-sm rounded-bl-sm ">
                <h2 className="text-3xl">{userState.fullName}</h2>
                <div>{userState.email}</div>
                <div>{userState.isAdmin ? 'Admin' : 'User'}</div>
                <button className="w-[10rem] bg-red-500 text-white rounded-md shadow-md py-3 my-8" onClick={logOut}>Logout</button>
            </div>}
        </div>


    </div>
}