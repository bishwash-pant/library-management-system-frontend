import { useFormik } from 'formik';
import '../../auth.scss'
import loginSchema from './schema';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../../assets/images/logo-lib.png'
import { loginService } from '../../../services/auth-service/login-service';
function LoginPageComponent() {
    const navigate = useNavigate();
    const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values, errors) => {
            const response = await loginService(values);
            console.log({ response })

        },
        validationSchema: loginSchema
    });
    return (
        <>
            <div className="form-container my-16">

                <form className="form-body" onSubmit={handleSubmit} >
                    <img src={logo} alt='logo' className='logo-image' />
                    <h2 className='text-lg text-left self-start px-2 font-extrabold'>Login</h2>
                    <div className="control-item col-span-2 lg:col-span-1 w-[100%]">
                        <label className='block my-2 px-2'>Email</label>
                        <input type="text" placeholder="Email" className=' w-[100%] text-lg px-2 rounded-md shadow-inner py-1' value={values.email} onChange={handleChange} onBlur={handleBlur} name='email' />
                        {touched.email && errors.email ? <small className='text-red-500'>{errors.email}</small> : null}
                    </div>
                    <div className='col-span-1 w-[100%] '>
                        <label className='block my-2 px-2'>Password</label>
                        <input type="password" placeholder="Password" className=' w-[100%] text-lg px-2 rounded-md shadow-inner py-2' value={values.password} onChange={handleChange} name='password' onBlur={handleBlur} />
                        {touched.password && errors.password ? <small className='text-red-500'>{errors.password}</small> : null}
                    </div>
                    <button type="submit" className='button my-6'>LOGIN</button>
                    <Link className='text-green-600'>Forgot Password?</Link>
                    <Link to='/signup' className='text-blue-600'>Go to Signup Page</Link>
                </form>
                <div className="form-image hidden lg:block">

                </div>
            </div>

        </>


    );
}
export default LoginPageComponent;