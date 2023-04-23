import { useParams } from "react-router";
import AddBookComponent from "../add-book";
import { useEffect, useState } from "react";
import { getBookDetailsService } from "../../../services/books-service/books-services";

export function EditBookHOC() {
    const params = useParams()

    return <AddBookComponent bookId={params.bookId} />
}