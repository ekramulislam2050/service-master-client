import Marquee from 'react-fast-marquee';
import '../style/revolingText.css'
import Lottie from 'lottie-react';
import availableLottie from "../assets/Lotti for available reaction/Animation - 1742188860747.json"
import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomPageTitle from './CustomPageTitle';
import AuthContext from '../Context/AuthContext';
import Swal from 'sweetalert2';





const AllServices = () => {
    const { toggleForAll } = useContext(AuthContext)
    const [allData, setAllData] = useState([])
    console.log(allData)
    const timeOutRef = useRef(null)

    useEffect(() => {
        fetch('http://localhost:3000/allData', {
            method: "GET",
            credentials: "include"
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Error:${res.status} ${res.statusText}`)
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                setAllData(data)
            })
            .catch(error => {

                const errMsg = error.message
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errMsg,
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            })
        document.title = "AllServices"
    }, [])

    // for search-----------
    const handleOnChange = (e) => {
        const searchTxt = e.target.value
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current)
        }
        timeOutRef.current = setTimeout(() => {
            fetch(`http://localhost:3000/allDataGetByServiceName?serviceName=${searchTxt}`, {
                method: "GET",
                credentials: "include"
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`${res.status} ${res.statusText}`)
                    }
                    return res.json()
                })
                .then(data => {

                    setAllData(data)
                })
                .catch(error => {
                    const errMsg = error.message
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: errMsg,
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                })

        }, 500)

    }
    return (
        <div className=' dark:bg-blue-700'>
            <CustomPageTitle title="All Services"></CustomPageTitle>

            {/* search field---------- */}
            <div className=' btnBorder lg:w-[30%] md:w-[80%] w-[90%] '>
                <label className="flex items-center gap-3 input m-[1px] rounded-full ">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" onChange={(e) => handleOnChange(e)} className="grow" placeholder="Search" />

                </label>
            </div>


            <div className='flex justify-center pl-3'>

                <div className='grid gap-1 py-3 lg:grid-cols-3 md:grid-cols-2 dark:pt-3'>



                    {
                        allData.length === 0 ? <div className='flex justify-center w-screen bg-red-500 border' ><p className='my-24 text-5xl font-semibold text-white '>Sorry, no service found.!</p> </div> :
                            allData.map((data) => <div className="w-[96%] shadow-sm card bg-base-200 dark:bg-gray-900" key={data._id}>


                                {/* provider image--------------- */}
                                <div className="absolute flex flex-col avatar top-5 left-5">
                                    <div className="rounded-full w-14 ring-primary ring-offset-base-100 ring ring-offset-2">
                                        <img src={data.providerImageURL} className='w-full ' />
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
                                            <tspan fill={toggleForAll ? " white" : "darkblue"}>{data.providerName}</tspan>
                                            <tspan fill="red" fontSize={'38px'}>{"⚙"}</tspan>


                                        </textPath>

                                    </text>

                                </svg>
                                {/* text-adjust-with-img------------ */}
                                <div className="relative w-full h-[215px]">

                                    <figure className="w-full h-full overflow-hidden rounded-t-full">
                                        <img
                                            src={data.serviceImageURL}
                                            className="object-cover w-full h-full"
                                            alt="Service Image"
                                        />
                                    </figure>


                                    {/* service name-------------------- */}
                                    <svg
                                        className="absolute top-[-120px] left-0 w-full h-full pointer-events-none p-7"
                                        viewBox="0 0 370 215"
                                    >
                                        <defs>

                                            <path
                                                id="textCurve"
                                                d="M 40,180 A 160 160 0 0 1 334,180"
                                                fill="none"
                                            />
                                        </defs>

                                        <text textAnchor="middle" fontSize="24" fontWeight="bold" fill={toggleForAll ? " #6dd7fd" : "black"}>
                                            <textPath href="#textCurve" startOffset="50%">
                                                {data.serviceName}

                                            </textPath>

                                        </text>

                                    </svg>
                                    {/* service location-------------------- */}
                                    <svg
                                        className="absolute top-[-95px] left-0 w-full h-full pointer-events-none"
                                        viewBox="0 0 370 215"
                                    >
                                        <defs>

                                            <path
                                                id="textCurve"
                                                d="M 40,180 A 160 160 0 0 1 334,180"
                                                fill="none"
                                            />
                                        </defs>

                                        <text textAnchor="middle" fontSize="17" fill="red">
                                            <textPath href="#textCurve" startOffset="50%">
                                                {data.serviceArea}

                                            </textPath>

                                        </text>

                                    </svg>
                                </div>

                                {/* marquee for service price------------------ */}
                                <Marquee className='absolute top-[-10px]' speed={20}>
                                    <div className="badge badge-secondary dark:bg-[#6dd7fd] dark:text-black">{data.servicePrice}</div>

                                </Marquee>

                                {/* lottie file---------------- */}
                                <div className="absolute flex flex-col  top-[-20px] right-[-10px]">
                                    <Lottie animationData={availableLottie} className='w-[150px] h-[150px]'></Lottie>

                                </div>

                                <div className="card-body">

                                    <p className='dark:text-white'>{data.serviceDescription}</p>

                                    <Link to={`/serviceDetails/${data._id}`}>
                                        <div className="justify-center card-actions">
                                            <div className="flex justify-center w-full btnBorder">
                                                <button className="w-full rounded-full btn text-[15px] font-semibold dark:bg-blue-700">View Detail</button>
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            </div>)
                    }
                </div>
            </div>


        </div>






    );
};

export default AllServices;