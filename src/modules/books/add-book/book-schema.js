import * as yup from "yup";

const bookSchema = yup.object(
    {
        title: yup.string().required('Required field'),
        author: yup.string().required('Required field'),
        description: yup.string().required('Required field').min(10, 'Description must be at least 10 characters long'),
    }
);
export default bookSchema;