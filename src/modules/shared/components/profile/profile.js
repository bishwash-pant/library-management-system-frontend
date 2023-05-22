
import { useState } from "react"
import { useSelector } from "react-redux";
import { CgProfile } from 'react-icons/cg'
export function ProfileComponentComponent() {

    const [isOpen, setIsOpen] = useState(false)
    const userState = useSelector(state => state.authState.user)

    function handleBlur() {
        setIsOpen(false);
    }

    return <div className="relative flex flex-col">
        <div className="flex">

            <button className="bg-transparent self-end text-xl" onBlur={handleBlur} onClick={() => { setIsOpen(!isOpen) }}><CgProfile /></button>
        </div>
        <div>
            {isOpen && <div className="bg-white shadow-lg border-[1px] w-[20rem] p-4 fixed top-[5rem] right-[0rem] rounded-br-sm rounded-bl-sm ">
                <h2 className="text-3xl">{userState.fullName}</h2>
                <div>{userState.email}</div>
                <div>{userState.isAdmin ? 'Admin' : 'User'}</div>

            </div>}
        </div>


    </div>
}