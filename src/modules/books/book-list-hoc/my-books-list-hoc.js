import BooksPageComponent from "../books-page/books-page";

export function MyBooksListHOC(props) {
    return <BooksPageComponent user={true} />
}