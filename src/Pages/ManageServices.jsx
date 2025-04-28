import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import Lottie from 'lottie-react';
import Marquee from 'react-fast-marquee';
import availableLottie from '../assets/Lotti for available reaction/Animation - 1742188860747.json'
import { Link } from 'react-router-dom';
import CustomPageTitle from './CustomPageTitle';
import axios from 'axios';


const ManageServices = () => {
    const { user, toggleForAll } = useContext(AuthContext)
    console.log(user.email)
    const [bookedData, setBookedData] = useState([])
    console.log(bookedData)
    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:3000/allDataGetByEmail?email=${user?.email}`, { withCredentials: true })
                .then(res => {
                    console.log("data from 21 =>", res)
                    const data = res.data
 
                    setBookedData(data)

                })
        }
        document.title = 'ManageServices'
    }, [user?.email])


    return (
        <div className='p-1 dark:bg-blue-700'>
            <CustomPageTitle title="Manage Services"></CustomPageTitle>
            <div className='flex justify-center mx-2 my-5'>
                <div className="grid gap-3 overflow-hidden lg:grid-cols-3 md:grid-cols-2">
                    {bookedData.length === 0 ? <div className='flex justify-center w-screen bg-red-500 border' ><p className='my-24 text-5xl font-semibold text-white '>You have not provide any services yet!</p> </div> :
                        bookedData.map(data => <div className="w-full shadow-sm card bg-base-200 dark:bg-gray-900" key={data._id}>


                            {/* provider image--------------- */}
                            <div className="absolute flex flex-col avatar top-5 left-5">
                                <div className="rounded-full w-14 ring-primary ring-offset-base-100 ring ring-offset-2">
                                    <img src={data.providerImageURL} className='w-full' />
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
                                        <tspan fill={toggleForAll ? "white" : 'darkblue'}>{data.providerName}</tspan>
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

                                    <text textAnchor="middle" fontSize="24" fontWeight="bold" fill={toggleForAll ? "white" : "black"}>
                                        <textPath href="#textCurve" startOffset="50%">
                                            {data.serviceName}
                                        </textPath>
                                    </text>
                                </svg>
                            </div>

                            {/* marquee for service price------------------ */}
                            <Marquee className='absolute top-[-10px]' speed={20}>
                                <div className="badge badge-secondary dark:bg-blue-500 dark:text-black">{data.servicePrice}</div>

                            </Marquee>

                            {/* lottie file---------------- */}
                            <div className="absolute flex flex-col  top-[-20px] right-[-10px]">
                                <Lottie animationData={availableLottie} className='w-[150px] h-[150px]'></Lottie>

                            </div>

                            <div className="card-body">

                                <p>{data.serviceDescription}</p>
                                <div className='flex justify-between mt-4'>
                                    <Link
                                        to={`/editService/${data._id}`} className='w-[48%]'>
                                        <button className='w-full btn btn-outline btn-primary' >Edit</button>
                                    </Link>
                                    <Link to={`/deleteService/${data._id}`} className='w-[48%]'>
                                        <button className='w-full btn btn-outline btn-error '>Delete</button>
                                    </Link>
                                </div>


                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageServices;