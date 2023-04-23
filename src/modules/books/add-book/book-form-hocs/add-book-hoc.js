import AddBookComponent from "../add-book";

export function AddBookHOC() {
    const bookDetails = {
        title: '',
        author: '',
        description: ''
    }
    return <AddBookComponent bookDetails={bookDetails} edit={false} />
}