import { useFormik } from 'formik';
import '../../auth.scss'
import signUpSchema from './schema';
import logo from '../../../../assets/images/logo.png'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { signupService } from '../../../services/auth-service/signup-service';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
function SignUpPageComponent() {
    const location = useLocation();
    const navigate = useNavigate();
    const { token } = useParams();
    const loginState = useSelector(state => state.authState.isLoggedIn);
    useEffect(() => {
        if (loginState) {
            navigate('/login');
        }
    }, []);

    const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            fullName: '',
            password: '',
        },
        onSubmit: async (values, errors) => {
            try {
                let response = await signupService(values, token);
                toast.success(response?.message || 'Sign Up Complete')
                navigate(location.state?.returnUrl || '/')
            }
            catch (e) {

            }






        },
        validationSchema: signUpSchema
    });
    return (
        <div>
            <div className="form-container my-16" >
                <form className="form-body" onSubmit={handleSubmit} >
                    <img src={logo} alt='logo' className='logo-image' />
                    <h2 className='text-lg text-left self-start px-2 font-extrabold'>Registration</h2>
                    <div className="control-item col-span-2 lg:col-span-1 w-[100%]">
                        <label className='block my-2 px-2'>Full Name</label>
                        <input type="text" placeholder="Firstname Lastname" className=' w-[100%] text-lg px-2 rounded-md shadow-inner py-1' value={values.email} onChange={handleChange} onBlur={handleBlur} name='fullName' />
                        {touched.fullName && errors.fullName ? <small className='text-red-500'>{errors.fullName}</small> : null}
                    </div>
                    <div className='col-span-1 w-[100%] '>
                        <label className='block my-2 px-2'>Password</label>
                        <input type="password" placeholder="Password" className=' w-[100%] text-lg px-2 rounded-md shadow-inner py-2' value={values.password} onChange={handleChange} name='password' onBlur={handleBlur} />
                        {touched.password && errors.password ? <small className='text-red-500'>{errors.password}</small> : null}
                    </div>
                    <div className='col-span-1 w-[100%] '>
                        <label className='block my-2 px-2'>Confirm Password</label>
                        <input type="password" placeholder="Password" className=' w-[100%] text-lg px-2 rounded-md shadow-inner py-2' value={values.confirmPassword} onChange={handleChange} name='confirmPassword' onBlur={handleBlur} />
                        {touched.confirmPassword && errors.confirmPassword ? <small className='text-red-500'>{errors.confirmPassword}</small> : null}
                    </div>
                    <button type="submit" className='button my-6'>SIGNUP</button>
                    <Link to='/login' className='text-green-600 my-4'>Go to Login Page</Link>
                </form>
                <div className="form-image hidden lg:block">

                </div>
            </div>

        </div>
    );
}
export default SignUpPageComponent;