import { ImFileEmpty } from 'react-icons/im';
export function EmptyListComponent() {
    return <div className='flex w-[fit-content] items-center bg-white shadow-lg p-2 md:p-16 rounded-lg mx-auto my-12 flex-col gap-8'>
        <ImFileEmpty className='text-[2rem] md:text-[10rem]' />
        <div className='text-center text-[2rem] md:text-[5rem]'>Empty List</div>
    </div>


}