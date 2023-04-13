import { AiFillSetting, AiOutlineUserAdd } from 'react-icons/ai';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { MdLibraryBooks, MdSpaceDashboard } from 'react-icons/md';
export const userMenuItems = [
    {
        name: 'Dashboard',
        path: '/',
        icon: <MdSpaceDashboard />
    },
    {
        name: 'My Books',
        path: '/books',
        icon: <MdLibraryBooks />
    },
    {
        name: 'Request',
        path: '/books/request',
        icon: <AiOutlineUserAdd />
    },
    {
        name: 'Return',
        path: '/books/return',
        icon: <BsArrowReturnLeft />
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
        path: '/books',
        icon: <MdLibraryBooks />
    },
    {
        name: 'Request',
        path: '/books/request',
        icon: <AiOutlineUserAdd />
    },
    {
        name: 'Settings',
        path: '/settings',
        icon: <AiFillSetting />
    }
];