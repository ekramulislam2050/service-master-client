import React from 'react';

const Card = ({ data }) => {
    return (
        <div>
            <div className='flex bg-red-500 shadow-sm'>
                <div className='text-left w-[30%]'>
                    <p className='font-bold'>Ekramul</p>
                    <div className="avatar">
                        <div className="rounded-full w-14 ring-primary ring-offset-base-100 ring ring-offset-2">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <p className='font-bold'>Email</p>
                </div>
                <div className=" card w-[70%]">
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
            </div>
        </div>
    );
};

export default Card;