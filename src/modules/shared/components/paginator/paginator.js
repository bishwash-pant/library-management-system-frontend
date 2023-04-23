import { useEffect, useState } from "react";
import httpClient from "../../../interceptors/token-interceptor";

export function PaginatorComponent(props) {
    const { service, setItems, deleteItem } = props;
    const [totalCount, setTotalCount] = useState(0);
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getItems();
    }, [])
    function getItems() {
        service().then((response) => {
            setItems(response.data.items);
            setTotalCount(response.data.pageCount)
            setPages(response.data.pages);
        });
    }
    useEffect(() => {
        getItems();
        setCurrentPage(1);
    }, [deleteItem])
    useEffect(() => {
        const url = pages[currentPage - 1]?.url || '';
        const urlsChunks = url.split('/');
        let apiurl = urlsChunks.slice(3, urlsChunks.length).join('/');
        httpClient.get(apiurl).then(response => {
            setItems(response.data.items);
        });
    }, [currentPage]);

    return (

        <nav aria-label="Page navigation example">
            <ul className="inline-flex items-center -space-x-px">
                <li>
                    <button className="paginator-arrow-left" onClick={() => { setCurrentPage(currentPage - 1) }} disabled={currentPage <= 1}>
                        <span className="sr-only">Previous</span>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    </button>
                </li>
                <span className="block px-4">{currentPage} of {1}-{totalCount}</span>


                <li>
                    <button className="paginator-arrow-right" onClick={() => { setCurrentPage(currentPage + 1) }} disabled={currentPage >= totalCount}>
                        <span className="sr-only">Next</span>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    </button>
                </li>
            </ul>
        </nav>

    );
}