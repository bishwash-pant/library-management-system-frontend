import BooksPageComponent from "../books-page/books-page";

export function AllRequestsHOC() {
    return <BooksPageComponent allRequests={true} />
}