import { useFormik } from "formik";
import bookSchema from "./book-schema";
import { addBookService, editBookService, getBookDetailsService } from "../../services/books-service/books-services";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

function AddBookComponent(props) {
    const [bookDetails, setBookDetails] = useState({
        title: '',
        author: '',
        description: ''
    });
    const { bookId } = props;
    const navigate = useNavigate();
    const { handleBlur, handleChange, handleSubmit, values, errors, touched, resetForm, setValues, setFieldValue } = useFormik({
        initialValues: {
            title: '',
            author: '',
            description: ''
        },
        validationSchema: bookSchema,
        onSubmit: async (values) => {
            if (bookId) {
                console.log(values);
                editBookService(bookId, values).then(response => {
                    toast.success('Edited Successfully');
                    navigate(`/books/details/${bookId}`);

                });
            } else {
                addBookService(values).then((response) => {
                    toast.success(response.data.message);
                    navigate(`/books/list`);
                });

            }
        }

    });
    useEffect(() => {
        if (bookId) {
            getBookDetails();
        }

    }, []);
    useEffect(() => {
        setValues(bookDetails);
    }, [bookDetails]);


    function getBookDetails() {
        getBookDetailsService(bookId).then(response => {
            const { title, author, description } = response.data;
            setBookDetails({
                title, author, description
            });



        });
    }




    return <div>
        <form onSubmit={handleSubmit} className="bg-slate-50 py-10 max-w-2xl px-10 mx-auto rounded-2xl shadow-xl" onReset={resetForm}>
            <div>
                <label className="block text-2xl font-extrabold my-2">Title</label>
                <input type="text" name="title" onBlur={handleBlur} onChange={handleChange} value={values.title} className=" w-[100%] text-2xl px-2 py-4 rounded-md shadow-inner" placeholder="Title" />
                {touched.title && errors.title ? <small className='text-red-500 text-base'>{errors.title}</small> : null}
            </div>
            <div>
                <label className="block text-2xl font-extrabold my-2">Author</label>
                <input type="text" name="author" value={values.author} onBlur={handleBlur} onChange={handleChange} className=" w-[100%] text-2xl px-2 py-4 rounded-md shadow-inner" placeholder="Author" />
                {touched.author && errors.author ? <small className='text-red-500 text-base'>{errors.author}</small> : null}
            </div>
            <div>
                <label className="block text-2xl font-extrabold my-2">Description</label>
                <input type="text" name="description" value={values.description} onBlur={handleBlur} onChange={handleChange} className=" w-[100%] text-2xl px-2 py-4 rounded-md shadow-inner" placeholder="Description" />
                {touched.description && errors.description ? <small className='text-red-500 text-base'>{errors.description}</small> : null}
            </div>
            <button type="submit" className="button my-4">{!bookId ? 'Add Book' : 'Edit Book'}</button>
        </form>
    </div>
}
export default AddBookComponent;