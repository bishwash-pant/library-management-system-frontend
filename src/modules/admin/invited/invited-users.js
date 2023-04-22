import { useEffect, useState } from "react";
import { deleteInvitedUsersService, invitedUsersService } from "../../services/admin-service/users-service";
import { AiOutlineMail } from 'react-icons/ai'
import { toast } from "react-toastify";

export function InvitedUsersComponent() {
    const [invitedUsers, setInvitedUsers] = useState([]);
    useEffect(function () {
        getInvitees();
    }, []);
    function getInvitees() {
        invitedUsersService().then((response) => {
            setInvitedUsers(response.data.users);
        });
    }
    async function deleteInvitee(index) {
        const id = invitedUsers[index]._id;
        deleteInvitedUsersService(id).then((response) => {
            toast.success('Invitee Deleted Sucessfully')
            getInvitees();
        })
    }
    return (<div>
        <div>Invited Users Component</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  mx-auto gap-5 px:3 md:px-10 ">
            {invitedUsers.map((user, index) => {
                return (<div key={index} className=" w-100 justify-between bg-slate-50 rounded-md shadow-md py-4 px-5  items-center ">

                    <div className="flex items-center gap-1 font-bold"> <AiOutlineMail className="text-xl" />{user.email}
                    </div>
                    <div className="my-3">Invited At: <span className="font-semibold">{new Date(user.createdAt).toLocaleString()}</span></div>
                    <button className="bg-red-600 rounded-md py-2 px-2 text-white font-semibold" onClick={() => { deleteInvitee(index) }}>Delete</button>

                </div>)
            })}
        </div>
    </div>)


}