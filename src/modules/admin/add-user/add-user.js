import { useFormik } from "formik"
import { inviteUserSchema } from "./schema";
import { inviteUserService } from "../../services/admin-service/users-service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export function AddUserComponent() {
    const navigate = useNavigate();
    const { handleBlur, handleChange, handleSubmit, values, errors, touched, resetForm } = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: inviteUserSchema,
        onSubmit: async (values) => {
            try {
                const response = await inviteUserService(values);
                toast.success(response.data.message);
                navigate('/admin/users/invited');
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
            <button type="submit" className="button my-4">Invite User</button>
        </form>
    </div>
}