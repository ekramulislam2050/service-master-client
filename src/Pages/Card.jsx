import React from 'react';

const Card = ({ data }) => {
    return (
        <div className="m-2 bg-red-500 shadow-sm card">
            {/* ------provider information--------- */}
            <div className='absolute text-center'>
              
                <div className="avatar">
                    <div className="rounded-full w-14 ring-primary ring-offset-base-100 ring ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className='opacity-50'/>
                    </div>
                    <p className='font-bold'>Ekramul</p>
                </div>
             
            </div>
            {/* -------------------- */}
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;