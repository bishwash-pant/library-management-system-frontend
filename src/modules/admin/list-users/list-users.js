import { useEffect, useState } from "react"
import { getUsersService } from "../../services/admin-service/users-service";

export function ListUsersComponent() {
    const [users, setUsers] = useState([]);
    useEffect(
        function () {
            async function getUsers() {
                try {
                    const userList = await getUsersService();
                    setUsers(userList.data.users);

                }
                catch (error) {

                }

            }
            getUsers();
        }, []
    );
    return <div>List users component
        {users.map((user, index) => {
            return <div key={index}>{user.fullName}</div>
        })}
    </div>
}