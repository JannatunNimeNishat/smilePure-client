import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import AppointmentsTable from './AppointmentsTable';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState()
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/appointments?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [url])

    return (
        <div className='mt-8 mb-5 mx-3'>
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
                        ></AppointmentsTable>)
                       }
                        
                       
                    </tbody>
                    

                </table>
            </div>
        </div>
    );
};

export default MyAppointments;