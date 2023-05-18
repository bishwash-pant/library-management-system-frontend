import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router"
import { approveRequestService, cancelBookRequestService, deallocateBookService, deleteBookService, getBasicBookDetailsService, getBookDetailsService, rejectRequestService, requestBookService, returnBookService } from "../../services/books-service/books-services";
import { FcApproval } from "react-icons/fc"
import { MdDoNotDisturbOn } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import { getUserInfo } from "../../shared/utils/user-info";

export function BookDetailsBasicComponent() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    useEffect(function () {
        getDetails();
    }
        , []);
    function getDetails() {
        getBasicBookDetailsService(id).then((response) => {
            setDetails(response.data);
        }).catch(error => {
            getDetails();
        });
    }

    function requestBook() {
        requestBookService(details._id).then((response) => {
            toast.success(response?.data?.message);
            getDetails();
        }).catch(error => {
            getDetails();
        });
    }
    function cancelRequest() {
        cancelBookRequestService(details._id).then((response) => {
            toast.success(response?.data?.message);
            getDetails();
        }).catch(error => {
            getDetails();
        });
    }
    function returnBook() {
        returnBookService(details._id).then((response) => {
            toast.success(response?.data?.message);
            getDetails();
        }).catch(error => {
            getDetails();
        });
    }
    return details && <div> Book basic details component
        <div className="bg-white min-w-[fit-content] w-[50%] mx-auto shadow-lg flex justify-center flex-col items-center rounded-lg px-4 py-4 min-h-[30rem]">
            <div className="text-4xl text-center font-extrabold">
                {details?.title}
            </div>
            <div className="text-center font-bold text-2xl font-">
                <span>Author:</span><span>{details?.author}</span>
            </div>
            <div className="w-[50%] text-center">
                {details?.description}
            </div>
            {(details?.assignedTo || details?.requestedBy) && <hr className="bg-gray-300 w-[100%] h-[2px] my-4"></hr>}
            <div className="w-[100%]">
                {details?.requestedBy && <div className="text-center my-4">
                    <div>REQUESTED BY</div>
                    <div><span>Name:</span><span className="text-xl font-bold ">{details?.requestedBy?.fullName}</span></div>
                    <div><span>Email:</span><span className="text-xl font-bold " >{details?.requestedBy?.email}</span></div>



                </div>}

                {details?.assignedTo &&
                    <div className="text-center my-4">
                        <div>ASSIGNED TO</div>
                        <div><span>Name:</span><span className="text-xl font-bold ">{details?.assignedTo?.fullName}</span></div>
                        <div><span>Email:</span><span className="text-xl font-bold ">{details?.assignedTo?.email}</span></div>

                    </div>}
            </div>
            <hr className="bg-gray-300 w-[100%] h-[2px] my-4"></hr>

            <div className="flex flex-col gap-4 md:flex-row w-[100%] max-w-[20rem] md:w-[50%]  mx-auto my-4  ">
                <button className="btn bg-slate-100 text-black rounded-md shadow-md px-4 py-1  w-[100%]" onClick={requestBook} disabled={details?.requestedBy || details?.assignedTo}>
                    <div className=" mx-auto flex items-center w-[fit-content]">
                        <FcApproval className="text-xl" /><span>Request</span>
                    </div></button>
                {details?.requestedBy?._id === getUserInfo()._id &&
                    <button className="btn bg-slate-100 text-black rounded-md shadow-md px-4 py-1  w-[100%]" onClick={cancelRequest} disabled={details?.requestedBy?._id !== getUserInfo()._id}>
                        <div className=" mx-auto flex items-center w-[fit-content]">
                            <MdDoNotDisturbOn className="text-xl text-red-500" /><span>Cancel</span>
                        </div></button>}
                {details?.assignedTo?._id === getUserInfo()._id &&
                    <button className="btn bg-slate-100 text-black rounded-md shadow-md px-4 py-1  w-[100%]" onClick={returnBook}>
                        <div className=" mx-auto flex items-center w-[fit-content]">
                            <MdDoNotDisturbOn className="text-xl text-red-500" /><span>Return</span>
                        </div></button>
                }

                {/* <button className="btn bg-slate-100 text-black rounded-md shadow-md px-4 py-1 flex items-center w-[100%] max-w-[15rem] " onClick={rejectRequest}><MdDoNotDisturbOn className="text-xl text-red-600" /><span>Reject</span></button> */}

            </div>
        </div>
    </div>


}