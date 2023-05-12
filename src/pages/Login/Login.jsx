import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">

                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h3 className='text-xl font-bold text-center mb-3'>Login</h3>
                        <form >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                               
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