import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
   /*  console.log(location);
    console.log(location?.state?.from?.pathname); */
    console.log(from);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
            console.log(result.user);
            navigate(from, {replace:true})
        })
        .catch(error=>{
            console.log(error.message);
        })
        form.reset();

    }
    return (
        <div className="pt-16 min-h-screen bg-base-200">
            <div className="hero-content">

                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h3 className='text-xl font-bold text-center mb-3'>Login</h3>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="mt-3">
                                <p className="text-center  "><small>Don't have an account ?</small> <Link className=' font-bold' to='/register'>Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;