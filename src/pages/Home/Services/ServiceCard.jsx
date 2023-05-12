import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    // console.log(service);
    const { _id,service_name, img, details } = service
    return (
        <div className="card  bg-base-100 shadow-xl ">
            <figure className="px-8 pt-10 overflow-hidden">
                <img src={img} alt="Shoes" className="rounded-xl w-full h-full md:h-52 object-cover" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service_name}</h2>
                <p>{details}</p>
                <div className="card-actions mt-3 mb-2 ">
                    <Link to={`services/${_id}`}>
                        <button className="btn btn-wide btn-outline btn-primary">More details <FaArrowRight className='ml-2' /></button>

                    </Link>
                </div>
            </div>
        </div>


    );
};

export default ServiceCard;