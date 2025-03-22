import Marquee from 'react-fast-marquee';
import '../style/revolingText.css'
import Lottie from 'lottie-react';
import availableLottie from "../assets/Lotti for available reaction/Animation - 1742188860747.json"
import { useEffect, useState } from 'react';



const AllServices = () => {
    const [allData, setAllData] = useState([])
    console.log(allData)
    useEffect(() => {
        fetch('http://localhost:5000/allData')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    return (

        <div className='flex justify-center'>
            <div className='grid grid-cols-3'>
                {
                    allData.map((data) => <div className="m-5 shadow-sm card bg-base-200 w-96 ">


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
                                    <tspan fill='darkblue'>{data.providerName}</tspan>
                                    <tspan fill="red" fontSize={'38px'}>{"⚙"}</tspan>


                                </textPath>

                            </text>

                        </svg>
                        {/* text-adjust-with-img------------ */}
                        <div className="relative w-[384px] h-[215px]">

                            <figure className="w-full h-full overflow-hidden rounded-t-full">
                                <img
                                    src={data.serviceImageURL}
                                    className="object-cover w-full h-full"
                                    alt="Service Image"
                                />
                            </figure>

                               
                               {/* service name-------------------- */}
                            <svg
                                className="absolute top-[-110px] left-0 w-full h-full pointer-events-none"
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
                            {/* service location-------------------- */}
                            <svg
                                className="absolute top-[-90px] left-0 w-full h-full pointer-events-none"
                                viewBox="0 0 370 215"
                            >
                                <defs>

                                    <path
                                        id="textCurve"
                                        d="M 40,180 A 160 160 0 0 1 334,180"
                                        fill="none"
                                    />
                                </defs>

                                <text textAnchor="middle" fontSize="17"  fill="red">
                                    <textPath href="#textCurve" startOffset="50%">
                                       {data.serviceArea}

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

                        <div className="card-body">

                            <p>{data.serviceDescription}</p>
                            <div className="justify-end card-actions">
                                <button className="w-full rounded-full btn btn-primary">View Detail</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>

    );
};

export default AllServices;