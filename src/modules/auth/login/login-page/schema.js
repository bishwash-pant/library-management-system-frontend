import * as yup from "yup";
const loginSchema = yup.object(
    {
        email: yup.string().required('Required field').email('Invalid email'),
        password: yup.string().required('Required field').min(5, 'Password must be at least 5 characters long')
    }
);
export default loginSchema;