import { useEffect, useState } from "react";
import { deleteInvitedUsersService, invitedUsersService, invitedUsersAtPageService } from "../../services/admin-service/users-service";
import { AiOutlineMail } from 'react-icons/ai'
import { toast } from "react-toastify";
import InfiniteScroll from "react-infinite-scroll-component";
import { PaginatorComponent } from "../../shared/components/paginator/paginator";
import { EmptyListComponent } from "../../shared/components/empty-list/empty-list";

export function InvitedUsersComponent() {
    const [invitedUsers, setInvitedUsers] = useState([]);
    const [count, setCount] = useState(0);
    async function deleteInvitee(index) {
        const id = invitedUsers[index]._id;
        deleteInvitedUsersService(id).then((response) => {
            toast.success('Invitee Deleted Sucessfully')
            setCount(count + 1);
        })
    }

    return (<div>
        {!invitedUsers.length && <EmptyListComponent />}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  mx-auto gap-5 px:3 md:px-10" id="invited-users">


            {invitedUsers.map((user, index) => {
                return (<div key={index} className=" w-100 justify-between bg-slate-50 rounded-md shadow-md py-4 px-5  invitedUsers-center ">

                    <div className="flex items-center gap-1 font-bold"> <AiOutlineMail className="text-xl" />{user.email}
                    </div>
                    <div className="my-3">Invited At: <span className="font-semibold">{new Date(user.createdAt).toLocaleString()}</span></div>
                    <button className="bg-red-600 rounded-md py-2 px-2 text-white font-semibold" onClick={() => { deleteInvitee(index) }}>Delete</button>

                </div>)
            })}

        </div>





        <div className="mx-auto my-4 w-[fit-content]">
            <PaginatorComponent service={invitedUsersService} serviceAtPage={invitedUsersAtPageService} setItems={setInvitedUsers} deleteItem={count} />
        </div>

    </div>)


}