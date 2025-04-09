import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import { MdEditOff } from 'react-icons/md';



const BookedServicesFrom = (data) => {
    //    console.log(data.bookedData)
    const { user } = useContext(AuthContext)
    // console.log(user)
    const {
        _id,
        serviceName,
        serviceImageURL,
        providerName,
        providerEmail,
        servicePrice
    } = data.bookedData || {}

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="shadow-2xl card bg-base-100">
            <h2 className="pt-5 text-4xl font-bold text-center">Booked Services!</h2>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    {/* data and instruction of service */}
                    <fieldset className='mb-5 fieldset'>
                        <legend className='font-bold text-center'>Input Your Date & Instruction  </legend>

                        <label className="fieldset-label"> Date :   <i className="ml-2 text-blue-500 fas fa-edit"></i> </label>
                        <input type="date" className="w-full input input-bordered" name='providerName' required />

                        <label className="fieldset-label">Instruction :   <i className="ml-2 text-blue-500 fas fa-edit"></i> </label>
                        <textarea className="w-full input input-bordered" placeholder="If you have any specific directions" name='serviceDescription' />
                    </fieldset>

                    {/* service provider related------------------ */}
                    <fieldset className="mb-5 fieldset" >

                        <legend className='font-bold text-center'>Information of Provider</legend>

                        <label className="inline-flex fieldset-label">Provider Name :<MdEditOff  className='ml-2 text-xl text-red-500'/> </label>  
                        
                        <input type="text" className="w-full input input-bordered" value={providerName} name='providerName' readOnly />

                        <label className="inline-flex fieldset-label">Provider Email : 
                        <MdEditOff  className='ml-2 text-xl text-red-500'/>     
                        </label>
                        <input type="email" className="w-full input-bordered input" value={providerEmail} name='providerEmail' readOnly />



                    </fieldset>

                    {/* service related----------------- */}
                    <fieldset className="fieldset" >
                        <legend className='font-bold text-center '>Information of Service</legend>

                        <label className="inline-flex fieldset-label">Service Name :<MdEditOff  className='ml-2 text-xl text-red-500'/>  </label>
                        <input type="text" className="w-full input input-bordered" value={serviceName} name='serviceName' readOnly />

                        <label className="inline-flex fieldset-label">Service Image URL : <MdEditOff  className='ml-2 text-xl text-red-500'/> </label>
                        <input type="text" className="w-full input-bordered input" value={serviceImageURL} name='serviceImageURL' readOnly />

                        <label className="inline-flex fieldset-label">Price : <MdEditOff  className='ml-2 text-xl text-red-500'/> </label>
                        <input type="text" className="w-full input-bordered input" value={servicePrice} name='servicePrice' readOnly />

                        <label className="inline-flex fieldset-label">Service ID : <MdEditOff  className='ml-2 text-xl text-red-500'/> </label>
                        <input type="text" className="w-full input input-bordered" value={_id} name='serviceId' readOnly />


                    </fieldset>

                    {/* current user related */}
                    <fieldset className="mb-5 fieldset" >

                        <legend className='font-bold text-center'>Information of Current User</legend>

                        <label className="inline-flex fieldset-label">Current User Name : <MdEditOff  className='ml-2 text-xl text-red-500'/> </label>
                        <input type="text" className="w-full input input-bordered" value={user.displayName} name='currentUserName' readOnly />

                        <label className="inline-flex fieldset-label">Current User Email : <MdEditOff  className='ml-2 text-xl text-red-500'/> </label>
                        <input type="email" className="w-full input-bordered input" value={user.email} name='currentUserEmail' readOnly />



                    </fieldset>

                    <button className="w-full mt-4 btn btn-neutral" type='submit'>Purchase</button>
                </form>
            </div>
        </div>
    );
}
export default BookedServicesFrom;
 
