import { useFormik } from "formik"
import { forgotPasswordSchema } from "./schema";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { forgotPasswordService } from "../../../services/auth-service/reset-password-service";

export function ForgotPasswordComponent() {
    const navigate = useNavigate();
    const { handleBlur, handleChange, handleSubmit, values, errors, touched, resetForm } = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: forgotPasswordSchema,
        onSubmit: async (values) => {
            try {
                const response = await forgotPasswordService(values);
                toast.success(response.data.message);
                navigate('/');
            } catch (e) {

            }
        }
    });
    return <div>
        <form onSubmit={handleSubmit} className="bg-slate-50 py-10 max-w-2xl px-10 mx-auto rounded-2xl shadow-xl" onReset={resetForm}>
            <div>
                <label className="block text-2xl font-extrabold my-2">Email</label>
                <input type="text" name="email" values={values.email} onBlur={handleBlur} onChange={handleChange} className=" w-[100%] text-2xl px-2 py-4 rounded-md shadow-inner" placeholder="Email" />
                {touched.email && errors.email ? <small className='text-red-500 text-base'>{errors.email}</small> : null}
            </div>
            <button type="submit" className="button my-4">Confirm Email</button>
        </form>
    </div>
}