import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper";
import ServiceCard from './ServiceCard';
const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    

    return (
        <div className=' bg-slate-300 px-3 py-5'>
            <div className='pt-5 text-center'>
                <h3 className='text-5xl font-bold mt-5 mb-8'>Services At Our Clinic</h3>
                <p className=''>Our clinic offers all kinds of services and constantly study new technology  to add <br /> new custom services to the list</p>
                <div className='mt-16 mx-8'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        navigation
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation]}
                    >
                         
                      {
                                services.map(service =><SwiperSlide
                                    key={service._id}
                                >
                                     <ServiceCard
                                    key={service._id}
                                    service={service}
                                ></ServiceCard>
                                </SwiperSlide>

                                )
                            }
                          

                        


                    </Swiper>




                </div>
            </div>
        </div>
    );
};

export default Services;