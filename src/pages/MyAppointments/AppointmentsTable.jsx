import React from 'react';

const AppointmentsTable = ({ appointment, handleAppointmentDelete,handleMakePayment }) => {
    // console.log(appointment);
    const { _id, img, service_name, date, price, status } = appointment;
    // console.log(status);
    return (

        <tr>
            <th>
                <label>
                    <button onClick={() => handleAppointmentDelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                {service_name}

            </td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
                {
                    status === 'paid' ?
                        <button  className="btn btn-ghost btn-xs">Paid</button>
                        :
                        <button onClick={()=>handleMakePayment(_id)} className="btn btn-ghost btn-xs">Make Payment</button>
                }
            </th>
        </tr>
    );
};

export default AppointmentsTable;