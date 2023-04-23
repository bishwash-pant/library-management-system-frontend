import { Link } from "react-router-dom";
import { FaList } from "react-icons/fa";
import { BiBookAdd } from "react-icons/bi";

export function BookOptionsComponent() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full max-w-[100rem] mx-auto gap-6 px-5'>
            <Link className='user-options' to='/books/list'>
                <div className='text-8xl w-[fit-content] mx-auto '>

                    <FaList />
                </div>
                <div className='text-4xl font-extrabold text-center'>List Books</div>
            </Link>
            <Link className='user-options' to='/books/add'>
                <div className='text-8xl w-[fit-content] mx-auto '>

                    <BiBookAdd />
                </div>
                <div className='text-4xl font-extrabold text-center'>Add Book</div>
            </Link>



        </div>
    )
}