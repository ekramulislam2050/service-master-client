import React from 'react';

const AddService = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
         const formData=new FormData(e.target)
         const initialData =Object.fromEntries(formData.entries())
         console.log(initialData)
        // const form = e.target
        // const imgURL = form.imgURL.value
        // const serviceName = form.serviceName.value
        // const price = form.price.value
        // const serviceArea= form.serviceArea.value
        // const description = form.description.value
        // console.log(imgURL,serviceName,price,serviceArea,description)
    }
    return (
        <div className="shadow-2xl card bg-base-100">
            <h1 className="pt-5 text-4xl font-bold text-center">Add your service!</h1>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset" >
                        <label className="fieldset-label">ImageURL : </label>
                        <input type="text" className="w-full input-bordered input" placeholder="ImageURL" name='imgURL'/>
                        <label className="fieldset-label">Service Name : </label>
                        <input type="text" className="w-full input input-bordered" placeholder="Service Name" name='serviceName'/>
                        <label className="fieldset-label">Price : </label>
                        <input type="text" className="w-full input-bordered input" placeholder="Price" name='price'/>
                        
                        <label className="fieldset-label">Service Area : </label>
                        <input type="text" className="w-full input input-bordered" placeholder="Service Area" name='serviceArea'/>
                        
                        <label className="fieldset-label">Description : </label>
                        <input type="text" className="w-full input input-bordered" placeholder="Description" name='description'/>

                    </fieldset>
                    <button className="w-full mt-4 btn btn-neutral" type='submit'>Add service</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;