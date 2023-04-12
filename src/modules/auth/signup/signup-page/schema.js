import * as yup from "yup";
const signUpSchema = yup.object(
    {
        email: yup.string().required('Required field').email('Invalid email'),
        password: yup.string().required('Required field').min(5, 'Password must be at least 5 characters long'),
        confirmPassword: yup.string().required('Required field').oneOf([yup.ref("password"), null], "Passwords must match"),
    }
);
export default signUpSchema;