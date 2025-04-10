import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import e from "cors";



const EditService = () => {
    const { id } = useParams() 
    const {user}=useContext(AuthContext)
    const [editableData,setEditableData]=useState({}) 
    // console.log(editableData.serviceName
    // )
    useEffect(() => {
        fetch(`http://localhost:5000/allData/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setEditableData(data)
            })
    }, [id])
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries())
        console.log(initialData)
        fetch(`http://localhost:5000/service/${''}`,{
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify()
        })
        .then(res=>res.json())
        .then(data=>{
            
        })
    }
    return (
        <div className="shadow-2xl card bg-base-100">
            <h2 className="pt-5 text-4xl font-bold text-center">Add  service!</h2>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    {/* service provider related------------------ */}
                    {
                       user && <fieldset className="mb-5 fieldset" >

                            <legend className='font-bold text-center'>Information of Provider</legend>

                            <label className="fieldset-label">Provider Name : </label>
                            <input type="text" className="w-full input input-bordered" placeholder="Provider Name" name='providerName' value={user.displayName} />

                            <label className="fieldset-label">Provider Email : </label>
                            <input type="email" className="w-full input-bordered input" placeholder="Provider Email" name='providerEmail' value={user.email} />

                            <label className="fieldset-label">Provider Image URL : </label>
                            <input type="text" className="w-full input-bordered input" placeholder="Provider Image URL" name='providerImageURL' value={user.photoURL} />

                        </fieldset>
                    }
                    {/* service related----------------- */}
                    <fieldset className="fieldset" >
                        <legend className='font-bold text-center '>Information of Service</legend>

                        <label className="fieldset-label">Service Name : </label>
                        <input type="text" className="w-full input input-bordered" value={editableData.serviceName} name='serviceName' />

                        <label className="fieldset-label">Service Image URL : </label>
                        <input type="text" className="w-full input-bordered input" value={editableData.serviceImageURL}  name='serviceImageURL' />

                        <label className="fieldset-label">Price : </label>
                        <input type="text" className="w-full input-bordered input" value={editableData.price}   name='servicePrice' />

                        <label className="fieldset-label">Service Area : </label>
                        <input type="text" className="w-full input input-bordered" value={editableData.serviceArea}  name='serviceArea' />

                        <label className="fieldset-label">Service Description : </label>
                        <textarea className="w-full input input-bordered" value={editableData.serviceDescription}  name='serviceDescription' maxLength={100} />

                    </fieldset>
                    <button className="w-full mt-4 btn btn-neutral" type='submit'>Update</button>
                </form>
            </div>
        </div>
      
    );
};

export default EditService;