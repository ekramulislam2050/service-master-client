import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import Lottie from 'lottie-react';
import Marquee from 'react-fast-marquee';
import availableLottie from '../assets/Lotti for available reaction/Animation - 1742188860747.json'
import { Link } from 'react-router-dom';
import pendingLottie from '../assets/Lotti for pending/Animation - 1744424698225.json'
import providerName from "../assets/Lottie for provider name/Animation - 1744517746825.json"
import "../style/rotedBorder.css"
const BookedServicesForUI = () => {
    const { user } = useContext(AuthContext)
    console.log(user.email)
    const [bookedByUser, setBookedByUser] = useState([])
    console.log(bookedByUser)
    useEffect(() => {
        fetch(`http://localhost:5000/allDataOfBookedServices?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setBookedByUser(data)
            })
    }, [user?.email])
    return (
        <div className='flex justify-center mx-2 my-5'>
            <div className='grid gap-3 overflow-hidden lg:grid-cols-3 md:grid-cols-2'>
                {
                    bookedByUser.map(data => <div className="w-full shadow-sm card bg-base-200" key={data._id}>


                        {/* provider image--------------- */}
                        <div className="absolute flex flex-col avatar top-5 left-5">
                            <div className="rounded-full w-14 ring-primary ring-offset-base-100 ring ring-offset-2">
                                <Lottie animationData={pendingLottie} className='w-full rounded-full bg-[red] '>

                                </Lottie>
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
                                    <tspan fill='darkblue'>{data.serviceStatus}</tspan>
                                    <tspan fill="red" fontSize={'38px'}>{"⚙"}</tspan>


                                </textPath>

                            </text>

                        </svg>
                        {/* text-adjust-with-img------------ */}
                        <div className="relative w-full h-[215px] ">

                            <figure className="w-full h-full overflow-hidden rounded-t-full ">
                                <img
                                    src={data.serviceImageURL}
                                    className="object-cover w-full h-full "
                                    alt="Service Image"
                                />
                            </figure>


                            <svg
                                className="absolute top-[-115px] left-0 w-full h-full pointer-events-none p-3"
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
                                        {data.serviceName}
                                    </textPath>
                                </text>
                            </svg>



                        </div>

                        {/* marquee for service price------------------ */}
                        <Marquee className='absolute top-[-10px]' speed={20}>
                            <div className="badge badge-secondary">{data.servicePrice}</div>

                        </Marquee>



                        {/* lottie file---------------- */}
                        <div className="absolute flex flex-col  top-[-20px] right-[-10px]">
                            <Lottie animationData={availableLottie} className='w-[150px] h-[150px]'></Lottie>

                        </div>

                        <div className=" card-body">

                            {/* <div className=''>
                                <div className="flex flex-col items-center ">
                                    <Lottie animationData={providerName} className='  w-[100px] mt-[-55px] '>

                                    </Lottie>
                                    <p>Provider : {data.providerName}</p>
                                    <p>Provider On : {data.
                                        serviceAcceptanceDate}</p>
                                </div>

                                 
                            </div> */}
                            <div className=''>
                                <div className=' border-1'>
                                             <h2 className='text-white'>animated border</h2>

                                </div>
                            </div>



                            {/* <Link to={`/serviceDetails/${_id}`}>
                            <div className="justify-center card-actions">
                                <button className="w-full rounded-full btn btn-primary"  >View Detail</button>
                            </div>
                        </Link> */}

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default BookedServicesForUI;