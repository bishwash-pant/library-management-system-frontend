
import { useState } from "react"
import { MdNotifications, MdNotificationsOff } from "react-icons/md"
import { getUnseenNotificationService, markAllNotificationAsSeenService, markNotificationAsSeenService } from "../../../services/notification-service/notification-service";
import { toast } from "react-toastify";
export function NotificationComponent() {

    const [isOpen, setIsOpen] = useState(false)
    const [notifications, setNotifications] = useState([]);
    async function getNotifications() {
        if (isOpen) {
            setIsOpen(false)
        } else {
            const { data } = await getUnseenNotificationService();
            const notifications = data || [];
            setNotifications(notifications)
            setIsOpen(true);
        }

    }
    function resetNotification() {
        setIsOpen(false);
        getNotifications();
    }
    async function markAsSeen(id) {
        const { data } = await markNotificationAsSeenService(id);

        resetNotification();
    }
    async function markAllAsSeen(id) {
        const { data } = await markAllNotificationAsSeenService();
        toast.success(data.message)

        resetNotification();
    }


    return <div className="relative flex flex-col">
        <div className="flex">

            <button className="bg-transparent self-end text-xl" onClick={() => { getNotifications() }}  >{!isOpen ? <MdNotifications /> : <MdNotificationsOff />} </button>
        </div>
        <div>
            {isOpen && <div className="bg-white shadow-lg border-[1px] w-[20rem] fixed top-[5rem] right-[0rem] rounded-br-sm rounded-bl-sm ">
                <div className="max-h-[20rem] overflow-auto">
                    {notifications.length ? notifications.map(notification => {
                        return <div key={notification._id} className="border-2 py-2 px-2">
                            <p>
                                {notification.text}
                            </p>
                            <button className="bg-transparent block w-fit underline mx-auto" onClick={() => { markAsSeen(notification._id) }}>Mark As Seen</button>
                        </div>
                    }) : <div className="w-[fit-content] mx-auto">No new notifications</div>}
                </div>
                {notifications.length ? <div className="py-2 border-[1px]">
                    <button className="bg-transparent block w-fit underline mx-auto" onClick={markAllAsSeen}>Mark All As Seen</button>
                </div> : null}
            </div>}
        </div>


    </div>
}