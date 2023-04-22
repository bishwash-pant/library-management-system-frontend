import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { getMyBooksService } from "../../services/books-service/books-services";

function BooksPageComponent() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        async function getMyBooks() {
            const response = await getMyBooksService();
            setBooks(response.data)
        }
        getMyBooks();
    }, [])
    return <div>Books component is places here</div>
}
export default BooksPageComponent;