import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import Swal from "sweetalert2";
 




const EditService = () => {
    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [editableData, setEditableData] = useState({})
    
    useEffect(() => {
        fetch(`https://service-master-server.vercel.app/allData/${id}`,{
            method:"GET",
            credentials:"include"
        })
            .then(res => res.json())
            .then(data => {
            
                setEditableData(data)
            })
    }, [id])
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries())
   
        fetch(`https://service-master-server.vercel.app/service/${editableData._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(initialData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount == 1) {
                    Swal.fire({
                        title: "PATCH successful",
                        text: "You clicked the button!",
                        icon: "success"
                    })
                    navigate("/manageServices")
                }


            })
    }
    useEffect(()=>{
        document.title="EditService"
    },[])
    return (
        <div>
            

            <div className="shadow-2xl card bg-base-100">
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
                            <input type="text" className="w-full input input-bordered" defaultValue={editableData.serviceName} name='serviceName' />

                            <label className="fieldset-label">Service Image URL : </label>
                            <input type="text" className="w-full input-bordered input" defaultValue={editableData.serviceImageURL} name='serviceImageURL' />

                            <label className="fieldset-label">Price : </label>
                            <input type="text" className="w-full input-bordered input" defaultValue={editableData.servicePrice} name='servicePrice' />

                            <label className="fieldset-label">Service Area : </label>
                            <input type="text" className="w-full input input-bordered" defaultValue={editableData.serviceArea} name='serviceArea' />

                            <label className="fieldset-label">Service Description : </label>
                            <textarea className="w-full input input-bordered" defaultValue={editableData.serviceDescription} name='serviceDescription' maxLength={100} />

                        </fieldset>
                        <button className="w-full mt-4 btn btn-neutral" type='submit'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditService;