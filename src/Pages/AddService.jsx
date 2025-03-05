import React from 'react';

const AddService = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
    }
    return (
        <div className="shadow-2xl card bg-base-100">
            <h1 className="pt-5 text-4xl font-bold text-center">Login now!</h1>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset" >
                        <label className="fieldset-label">Email : </label>
                        <input type="email" className="w-full input-bordered input" placeholder="Email" />
                        <label className="fieldset-label">Password : </label>
                        <input type="password" className="w-full input input-bordered" placeholder="Password" />

                    </fieldset>
                    <button className="w-full mt-4 btn btn-neutral" type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;