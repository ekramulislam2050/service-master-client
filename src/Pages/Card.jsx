import React from 'react';
import Marquee from 'react-fast-marquee';
import '../style/revolingText.css'
import Lottie from 'lottie-react';
import availableLottie from "../assets/Lotti for available reaction/Animation - 1742188860747.json"
const Card = ({ data }) => {
    const {
        serviceImageURL,
        serviceName,
        servicePrice,
        serviceDescription,
        providerName,
        providerImageURL } = data
    return (
        <div className="m-5 shadow-sm card bg-base-200 w-96 ">


            {/* provider image--------------- */}
            <div className="absolute flex flex-col avatar top-5 left-5">
                <div className="rounded-full w-14 ring-primary ring-offset-base-100 ring ring-offset-2">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className='w-full' />
                </div>

            </div>
            {/* revolving text-------------- */}
            <svg viewBox="0 0 200 200 " className='svg-size-1'>

                <defs>
                    <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                </defs>
                <text className='text-1 '>

                    <textPath href="#circlePath" >
                        <tspan fill="red" fontSize={'38px'}>&#9881;</tspan>
                        <tspan fill='darkblue'>{providerName}</tspan>
                        <tspan fill="red" fontSize={'38px'}>{"⚙"}</tspan>


                    </textPath>

                </text>

            </svg>
            {/* text-adjust-with-img------------ */}
            <div className="relative w-[384px] h-[215px]">

                <figure className="w-full h-full overflow-hidden rounded-t-full">
                    <img
                        src={serviceImageURL}
                        className="object-cover w-full h-full"
                        alt="Service Image"
                    />
                </figure>


                <svg
                    className="absolute top-[-105px] left-0 w-full h-full pointer-events-none"
                    viewBox="0 0 370 215"
                >
                    <defs>

                        <path
                            id="textCurve"
                            d="M 40,180 A 160 160 0 0 1 334,180"
                            fill="none"
                        />
                    </defs>

                    <text textAnchor="middle" fontSize="24" fontWeight="bold" fill="black">
                        <textPath href="#textCurve" startOffset="50%">
                            {serviceName}
                        </textPath>
                    </text>
                </svg>
            </div>

            {/* marquee for service price------------------ */}
            <Marquee className='absolute top-[-10px]'>
                <div className="badge badge-secondary">{servicePrice}</div>

            </Marquee>

            {/* lottie file---------------- */}
            <div className="absolute flex flex-col  top-[-20px] right-[-10px]">
                <Lottie animationData={availableLottie} className='w-[150px] h-[150px]'></Lottie>

            </div>

            <div className="card-body">

                <p>{serviceDescription}</p>
                <div className="justify-end card-actions">
                    <button className="w-full rounded-full btn btn-primary">View Detail</button>
                </div>
            </div>
        </div>
    );
};

export default Card;