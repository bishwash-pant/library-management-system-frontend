import { useDispatch } from "react-redux";
import { resetAll, } from "../../state-management/reducers/auth-reducers";
import { Navigate } from "react-router";
import settingsSchema from "./settings-form-schema";
import { useFormik } from "formik";
import { changePasswordService } from "../services/auth-service/change-password-service";
import { toast } from "react-toastify";

function SettingsComponent() {


    const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        },
        onSubmit: async (values, errors) => {
            function changePassword() {
                changePasswordService(values).then((response) => { toast.success(response.data.message) });

            }
            changePassword();
        },
        validationSchema: settingsSchema
    });



    const dispatch = useDispatch();
    function logOut() {
        dispatch(resetAll());
        localStorage.clear();
        return <Navigate to='/login' />
    }
    return <div> <div>
        <div className="settings-form-container shadow-lg py-5" >
            <form className="form-body" onSubmit={handleSubmit} >
                <div className="flex justify-between w-[100%] items-center">

                    <div className='text-lg text-left self-start px-2 font-extrabold'>Change Settings</div>
                    
                </div>
                <div className='col-span-1 w-[100%] '>
                    <label className='block my-2 px-2'>Current Password</label>
                    <input type="password" placeholder="Current Password" className=' w-[100%] text-lg px-2 rounded-md shadow-inner py-2' value={values.currentPassword} onChange={handleChange} name='currentPassword' onBlur={handleBlur} />
                    {touched.currentPassword && errors.currentPassword ? <small className='text-red-500'>{errors.currentPassword}</small> : null}
                </div>
                <div className='col-span-1 w-[100%] '>
                    <label className='block my-2 px-2'>New Password</label>
                    <input type="password" placeholder="New Password" className=' w-[100%] text-lg px-2 rounded-md shadow-inner py-2' value={values.newPassword} onChange={handleChange} name='newPassword' onBlur={handleBlur} />
                    {touched.newPassword && errors.newPassword ? <small className='text-red-500'>{errors.newPassword}</small> : null}
                </div>

                <div className='col-span-1 w-[100%] '>
                    <label className='block my-2 px-2'>Confirm Password</label>
                    <input type="password" placeholder="Confirm Password" className=' w-[100%] text-lg px-2 rounded-md shadow-inner py-2' value={values.confirmPassword} onChange={handleChange} name='confirmPassword' onBlur={handleBlur} />
                    {touched.confirmPassword && errors.confirmPassword ? <small className='text-red-500'>{errors.confirmPassword}</small> : null}
                </div>
                <button type="submit" className='button my-6'>Change Password</button>
            </form>



        </div>

    </div>


    </div>
}
export default SettingsComponent;;