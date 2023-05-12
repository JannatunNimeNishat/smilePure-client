import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaChessKing } from 'react-icons/fa';

const Register = () => {
    const {signUp,updateUser} = useContext(AuthContext)
    const handleRegister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        const newUser={
            name,
            email,
            password,
            photoURL
        }
        console.log(newUser);
        //
        signUp(email,password)
        .then(async result=>{
            console.log(result.user);
            await updateUser(result.user,name,photoURL)
            .then(()=>{

            })
            .catch(error=>{
                console.log(error.message);
            })
        })
        .catch(error=>{
            console.log(error.message);
        })
        form.reset();
    }


    return (
        <div className=" min-h-screen bg-base-200">
            <div className="hero-content">

                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h3 className='text-xl font-bold text-center mb-3'>Register</h3>

                        <form onSubmit={handleRegister}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered "
                                name='name' required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered"
                                name='email' required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" 
                                name='password' required
                                />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photoURL</span>
                                </label>
                                <input type="text" placeholder="photoURL" className="input input-bordered" 
                                name='photoURL'
                                />

                            </div>
                           
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>

                            <div className="mt-3">
                                <p className="text-center "><small>Don't have an account ?</small> <Link className=' font-bold' to='/login'>Login</Link></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;