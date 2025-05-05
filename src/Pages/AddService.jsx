
import { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import AuthContext from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AddService = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries())
      
        
        axios.post("https://service-master-server.vercel.app/service", initialData, { withCredentials: true })
            .then(res => {
                const data = res.data
                if (data.insertedId) {

                    Swal.fire({
                        title: "POST successful",
                        text: "You clicked the button!",
                        icon: "success"
                    })
                }
                navigate("/allServices")
            })


    }



    useEffect(() => {
        document.title = "AddService"
    }, [])


    return (
        <div className='dark:bg-blue-400'>

            <div className="shadow-2xl card bg-base-100 dark:bg-blue-200">
                <h2 className="pt-5 text-4xl font-bold text-center">Add  service!</h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        {/* service provider related------------------ */}
                        {
                            user && <fieldset className="mb-5 fieldset" >

                                <legend className='font-bold text-center'>Information of Provider</legend>

                                <label className="fieldset-label">Provider Name : </label>
                                <input type="text" className="w-full input input-bordered" placeholder="Provider Name" name='providerName' defaultValue={user.displayName} />

                                <label className="fieldset-label">Provider Email : </label>
                                <input type="email" className="w-full input-bordered input" placeholder="Provider Email" name='providerEmail' defaultValue={user.email} />

                                <label className="fieldset-label">Provider Image URL : </label>
                                <input type="text" className="w-full input-bordered input" placeholder="Provider Image URL" name='providerImageURL' defaultValue={user.photoURL} />

                            </fieldset>
                        }
                        {/* service related----------------- */}
                        <fieldset className="fieldset" >
                            <legend className='font-bold text-center '>Information of Service</legend>

                            <label className="fieldset-label">Service Name : </label>
                            <input type="text" className="w-full input input-bordered" placeholder="Service Name" name='serviceName' />

                            <label className="fieldset-label">Service Image URL : </label>
                            <input type="text" className="w-full input-bordered input" placeholder="imgURL" name='serviceImageURL' />

                            <label className="fieldset-label">Price : </label>
                            <input type="text" className="w-full input-bordered input" placeholder="Price" name='servicePrice' />

                            <label className="fieldset-label">Service Area : </label>
                            <input type="text" className="w-full input input-bordered" placeholder="Service Area" name='serviceArea' />

                            <label className="fieldset-label">Service Description : </label>
                            <textarea className="w-full input input-bordered" placeholder="Service Description" name='serviceDescription' maxLength={100} />

                        </fieldset>
                        <button className="w-full mt-4 btn btn-neutral" type='submit'>Add service</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;