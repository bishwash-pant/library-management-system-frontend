import BooksPageComponent from "../books-page/books-page";

export function MyRequestedBooksListHOC(props) {
    return <BooksPageComponent user={false} myRequests={true} />
}