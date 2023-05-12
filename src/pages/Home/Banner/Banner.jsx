import React from 'react';
import banner from '../../../assets/image/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse mx-12">
                <img src={banner} className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">High Innovative Professional Dentists </h1>
                    <p className="py-6">We believe in providing you with the best in dentistry. Provident cupiditate <br /> voluptatem et in. Quaerat fugiat  ut assumenda excepturi exercitationem quasi. <br />  In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;