import { FaList } from 'react-icons/fa'
import { BsPersonFillAdd } from 'react-icons/bs'
import { FcInvite } from 'react-icons/fc'
import { Link } from 'react-router-dom'
export function UserOptionsComponent() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full max-w-[100rem] mx-auto gap-6 px-5'>
            <Link className='user-options' to='./list'>
                <div className='text-8xl w-[fit-content] mx-auto '>

                    <FaList />
                </div>
                <div className='text-4xl font-extrabold text-center'>List Users</div>
            </Link>
            <Link className='user-options' to='./add'>
                <div className='text-8xl w-[fit-content] mx-auto '>

                    <BsPersonFillAdd />
                </div>
                <div className='text-4xl font-extrabold text-center'>Add User</div>
            </Link>
            <Link className='user-options' to='./invited' >
                <div className='text-8xl w-[fit-content] mx-auto '>

                    <FcInvite />
                </div>
                <div className='text-4xl font-extrabold text-center'>Invited Users</div>
            </Link>


        </div>
    )
}