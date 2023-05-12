import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const BookAppointment = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { _id, doctor_name, doctor_img, price, service_name, img, details } = service
    const handleConfirmAppointment = (event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const symptoms = form.symptoms.value;
        const newAppointment = {
            patient_name: name,
            email,
            phone,
            date,
            symptoms,
            doctor_name,
            img,
            service_id:_id,
            service_name,
            price
        }
        console.log(newAppointment);

        fetch('http://localhost:5000/appointment',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newAppointment)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your appointment has been received',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })


    }

    return (
        <div className='min-h-screen bg-base-200 p-5'>

            <form onSubmit={handleConfirmAppointment} className='p-16'>

                <div className='md:grid grid-cols-2 gap-4 '>
                    <input type="text" name='name' defaultValue={user?.displayName} placeholder="Type here" className="px-3 input rounded" />
                    <input type="text" name='email' defaultValue={user?.email} placeholder="Type here" className="px-3 input rounded" />
                </div>
                <br />
                <div className='md:grid grid-cols-2 gap-4 '>
                    <input type="text" name='phone' placeholder="Enter your phone number" className="px-3 input rounded" />
                    <input type="date"  name='date' placeholder="Type here" className="px-3 input rounded" />
                </div>
               <br />
               <textarea className='w-full p-3' placeholder='Write some of your symptoms ' name="symptoms"  cols="50" rows="6"></textarea>

               <button className="btn btn-block rounded mt-5">Confirm Appointment</button>
            </form>
        </div>
    );
};

export default BookAppointment;