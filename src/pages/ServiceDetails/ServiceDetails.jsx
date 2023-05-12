import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    // console.log(service);
    const { _id, doctor_name, doctor_img, price, service_name, img, details } = service
    return (
        <div className='mt-8 mb-5 md:grid grid-cols-4 gap-3'>
            <div className='col-span-3 px-5'>
                {/* <div className='md:w-5/6'> */}
                <div className=''>
                    <img className='w-full h-full md:h-[350px] rounded-lg ' src={img} alt="" />
                </div>
                <h3 className='mt-8 text-5xl font-bold'>{service_name}</h3>
                <h3 className='mt-4 mb-3'>{details} Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolores adipisci corporis labore veniam est blanditiis ut tempore pariatur! Iusto maiores beatae labore repudiandae dicta facere libero unde odit consectetur accusantium autem architecto expedita et alias id modi, in eaque, perferendis error. Est, corporis vitae. Sapiente, magni quaerat! At labore corrupti doloribus sit dolorem totam velit, eum impedit fugiat. Cumque odio ratione adipisci aut quaerat at quos soluta ullam iusto, hic neque eveniet dolor earum nisi eligendi consectetur tempore! Dolor obcaecati corrupti modi consequatur omnis unde asperiores repudiandae labore, vero nostrum aut, assumenda illum alias laboriosam. Explicabo nihil temporibus magni.</h3>

                <h3 className='mt-8 text-2xl font-bold'>Your Doctors Information:</h3>

                <div className='flex gap-4  mt-5'>

                    <img className='h-full w-full md:h-[250px] md:w-[250px] rounded-lg' src={doctor_img} alt="" />

                    <div className='flex flex-col justify-center'>
                        <h3 className='text-xl font-bold '>{doctor_name}</h3>
                        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laboriosam beatae totam, labore corporis non placeat ratione unde quod aspernatur aperiam adipisci consequuntur similique reiciendis. Iste repudiandae obcaecati quae sequi.</p>
                    </div>

                </div>

            </div>
            <div className='col-span-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore explicabo quas rerum cumque sint neque iure ipsa, enim consequuntur quod quo, debitis veniam aperiam, quae praesentium iusto temporibus! Consequatur, doloremque.
                <div className='mt-8'>
                    <h3 className='text-2xl font-bold'>Price: ${price}</h3>
                    <Link to={`/bookAppointment/${_id}`}><button className="btn btn-wide mt-3">Book an Appointment</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;