import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import AppointmentsTable from './AppointmentsTable';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState()
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const url = `http://localhost:5000/appointments?email=${user?.email}`
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                // 'authorization':`Bearer`
                'authorization': `Bearer ${localStorage.getItem('smilePure-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {

                    setAppointments(data)
                }
                else {
                    navigate('/')
                }
                // console.log(data);
            })
    }, [url])

    const handleAppointmentDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/appointments/${id}`, {

                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 1)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                        const remainingAppointments = appointments.filter(appointment => appointment._id !== id);
                        setAppointments(remainingAppointments)
                    })

            }
        })

    }

    const handleMakePayment = (id) => {
        console.log(id);
        /* const status = {
            status:'paid'
        } */
        fetch(`http://localhost:5000/appointments/${id}`, {

            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'paid' })

        })
            .then(res => res.json())
            .then(data => {
                console.log('test',data.modifiedCount);
                if(data.modifiedCount>0){
                    const unpaidAppointments = appointments.filter(appointment => appointment._id !== id);
                    const paidAppointment = appointments.find(appointment => appointment._id === id);
                    paidAppointment.status = 'paid';
                    console.log(paidAppointment);
                    const paidUnpaidAppointments = [paidAppointment,...unpaidAppointments];
                    setAppointments(paidUnpaidAppointments);
                }
            })
    }

    return (
        <div className='mt-8 mb-5'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>image</th>
                            <th>Service Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            appointments?.map(appointment => <AppointmentsTable
                                key={appointment._id}
                                appointment={appointment}
                                handleAppointmentDelete={handleAppointmentDelete}
                                handleMakePayment={handleMakePayment}
                            ></AppointmentsTable>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyAppointments;