import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const AllServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='bg-slate-300 mt-3 rounded  px-2 py-3 '>
            <h3 className='text-xl font-bold mt-3 mb-3 ml-2'>Services</h3>
            <div className='mx-3 mt-2'>
            {
                services.map(service => <h3
                    className='font-bold bg-white mb-3 px-2 py-1 rounded  cursor-pointer '
                     
                key={service._id}
                ><Link to={`/services/${service._id}`} className='flex items-center justify-between'>{service.service_name} <FaArrowRight className=''/></Link></h3>)
            }
            </div>
        </div>
    );
};

export default AllServices;