import { AiFillSetting, AiOutlineUserAdd } from 'react-icons/ai';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { MdLibraryBooks, MdSpaceDashboard } from 'react-icons/md';
import { TbNotebook } from 'react-icons/tb'
export const userMenuItems = [
    {
        name: 'Dashboard',
        path: '/',
        icon: <MdSpaceDashboard />
    },
    {
        name: 'My Books',
        path: '/books/my-books',
        icon: <TbNotebook />
    },
    {
        name: 'All Books',
        path: '/books/list',
        icon: <MdLibraryBooks />
    },
    {
        name: 'My Requests',
        path: '/books/my-requests',
        icon: <AiOutlineUserAdd />
    },
    {
        name: 'Settings',
        path: '/settings',
        icon: <AiFillSetting />
    }
];
export const adminMenuItems = [
    {
        name: 'Dashboard',
        path: '/',
        icon: <MdSpaceDashboard />
    },
    {
        name: 'Users',
        path: '/admin/users',
        icon: <MdLibraryBooks />
    },
    {
        name: 'Books',
        path: '/books/options',
        icon: <MdLibraryBooks />
    },
    {
        name: 'Requests',
        path: '/books/all-requests',
        icon: <AiOutlineUserAdd />
    },
    {
        name: 'Settings',
        path: '/settings',
        icon: <AiFillSetting />
    }
];