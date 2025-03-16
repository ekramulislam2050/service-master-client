import React from 'react';
import Marquee from 'react-fast-marquee';
import '../style/revolingText.css'
const Card = ({ data }) => {
    const {
        serviceImageURL,
        serviceName,
        servicePrice,
        serviceDescription,
        providerName,
        providerImageURL } = data
    return (
        <div className="m-5 shadow-sm card bg-base-200 w-96">
            <div className="absolute flex flex-col avatar top-5 left-5">
                <div className="rounded-full w-14 ring-primary ring-offset-base-100 ring ring-offset-2">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>

            </div>

            <svg viewBox="0 0 200 200">

                <defs>
                    <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                </defs>
                <text>

                    <textPath href="#circlePath" >  
                         <tspan fill="red" fontSize={'38px'}>&#9881;</tspan>
                        <tspan fill='darkblue'>{providerName}</tspan>
                        <tspan fill="red"  fontSize={'38px'}>{"⚙" }</tspan>
                        

                    </textPath>

                </text>

            </svg>


            <Marquee className='absolute top-[227px]'>
                <div className="badge badge-secondary">{servicePrice}</div>

            </Marquee>
            <figure className='w-[384px] h-[215px]'>
                <img
                    src={serviceImageURL}
                    className='w-full h-full rounded-t-full'
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>{serviceDescription}</p>
                <div className="justify-end card-actions">
                    <button className="w-full rounded-full btn btn-primary">View Detail</button>
                </div>
            </div>
        </div>
    );
};

export default Card;