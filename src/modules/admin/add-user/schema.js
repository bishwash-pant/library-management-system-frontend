import * as yup from "yup";
export const inviteUserSchema = yup.object(
    {
        email: yup.string().required('Email is required').email('Invalid email')
    }
);