import { useState } from "react";
import { getAllAssignedBooksService, getAllBooksService, getAllRequestsService, getMyBooksService, myRequestedBooksService, } from "../../services/books-service/books-services";
import { MdTitle } from 'react-icons/md'
import { BsFillPencilFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PaginatorComponent } from "../../shared/components/paginator/paginator";
import { EmptyListComponent } from "../../shared/components/empty-list/empty-list";

function BooksPageComponent(props) {
    const { user, myRequests, allRequests, allAssigned } = props;
    const [books, setBooks] = useState([]);
    const isAdmin = useSelector(state => state.authState?.user?.isAdmin)
    const service = getService();
    function getService() {
        if (user) {
            return getMyBooksService;
        } else if (myRequests) {
            return myRequestedBooksService;
        }
        else if (allRequests) {
            return getAllRequestsService;
        }
        else if (allAssigned) {
            return getAllAssignedBooksService;
        }
        else {
            return getAllBooksService;
        }
    }

    return <div>
        {!books.length && <EmptyListComponent />}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  mx-auto gap-5 px:3 md:px-10" id="invited-users">


            {books?.map((book, index) => {
                return (<Link key={index} to={isAdmin ? `/books/details/${book._id}` : `/books/details-basic/${book._id}`} className=" w-100 justify-between bg-slate-50 rounded-md shadow-md py-4 px-5  invitedUsers-center ">

                    <div className="flex items-center gap-1 font-bold"> <MdTitle className="text-xl" />{book.title}
                    </div>
                    <div className="flex items-center gap-1 font-bold"> <BsFillPencilFill className="text-xl" />{book.author}
                    </div>
                    <div className="my-3">Created At: <span className="font-semibold">{new Date(book.createdAt).toLocaleString()}</span></div>


                </Link>)
            })}

        </div>
        <div className="w-[fit-content] mx-auto my-4">
            <PaginatorComponent service={service} setItems={setBooks} />
        </div>

    </div>
}
export default BooksPageComponent;