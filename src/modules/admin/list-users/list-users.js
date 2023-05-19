import { useState } from "react"
import { deleteUsersService, getUsersAtPageService, getUsersService } from "../../services/admin-service/users-service";
import { MdTitle } from "react-icons/md"
import { AiOutlineMail } from 'react-icons/ai'
import { toast } from "react-toastify";
import { PaginatorComponent } from "../../shared/components/paginator/paginator";
import { RiDeleteBin6Line } from 'react-icons/ri'
import { EmptyListComponent } from "../../shared/components/empty-list/empty-list";
import { useSelector } from "react-redux";


export function ListUsersComponent() {
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);
    const userState = useSelector(state => state.authState?.user);


    async function deleteUser(index) {
        // eslint-disable-next-line no-restricted-globals
        const confirmFlag = confirm('Are you sure you want to delete?')
        if (!confirmFlag) {
            return;
        }
        const id = users[index]._id;
        deleteUsersService(id).then((response) => {
            toast.success(response.data.message);
            setCount(count + 1);
        })
    }
    return <div>
        {!users.length && <EmptyListComponent />}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  mx-auto gap-5 px:3 md:px-10" >

            {users.map((user, index) => {
                return (<div key={index} className=" w-100 justify-between bg-slate-50 rounded-md shadow-md py-4 px-5 ">

                    <div className="flex items-center gap-1 font-bold"> <AiOutlineMail className="text-xl" />{user.email}
                    </div>
                    <div className="flex items-center gap-1 font-bold text-lg my-2"> <MdTitle className="text-xl" />{user.fullName}
                    </div>
                    <button className="bg-red-600 rounded-md py-2 px-4 text-white font-semibold flex items-center gap-1" disabled={user._id === userState._id} onClick={() => { deleteUser(index) }}><RiDeleteBin6Line />Delete</button>

                </div>)
            })}

        </div>
        <div className="mx-auto my-4 w-[fit-content]">
            <PaginatorComponent service={getUsersService} serviceAtPage={getUsersAtPageService} setItems={setUsers} deleteItem={count} />
        </div>


    </div >
}