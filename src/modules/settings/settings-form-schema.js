import * as yup from "yup";
import { regex } from "../shared/constants/regex/regex";
const settingsSchema = yup.object(
    {
        currentPassword: yup.string().required('Required field'),
        newPassword: yup.string().required('Required field').min(5, 'Password must be at least 5 characters long'),
        confirmPassword: yup.string().required('Required field').oneOf([yup.ref("newPassword"), null], "Passwords must match"),
    }
);
export default settingsSchema;