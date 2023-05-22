import BooksPageComponent from "../books-page/books-page";

export function AllAssignedBooksListHOC() {
    return <BooksPageComponent allAssigned={true} />
}