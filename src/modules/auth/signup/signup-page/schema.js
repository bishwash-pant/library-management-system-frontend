import * as yup from "yup";
import { regex } from "../../../shared/constants/regex/regex";

const signUpSchema = yup.object(
    {
        fullName: yup.string().required('Required field').matches(regex.fullName, 'Firstname and Lastname must be separated by a space'),
        password: yup.string().required('Required field').min(5, 'Password must be at least 5 characters long'),
        confirmPassword: yup.string().required('Required field').oneOf([yup.ref("password"), null], "Passwords must match"),
    }
);
export default signUpSchema;