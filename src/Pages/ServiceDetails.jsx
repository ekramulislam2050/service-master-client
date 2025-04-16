import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link, useParams } from "react-router-dom";
import locationIcon from '../assets/Lotti for location icon/Animation - 1742907267471.json'
 
import BookNowBtn from "../CustomComponents/BookNowBtn";
 


const ServiceDetails = () => {
    const { id } = useParams()
    // console.log(id)
    const [clickedData, setClickedData] = useState()
    // console.log(clickedData)
    const {
        serviceImageURL,
        serviceName,
        servicePrice,
        serviceDescription,
        providerName,
        providerImageURL,
        serviceArea,
        _id } = clickedData || {}
    useEffect(() => {
        fetch(`http://localhost:3000/allData/${id}`)
            .then(res => res.json())
            .then(data => setClickedData(data))
    }, [id])
    useEffect(()=>{
        document.title="ServiceDetails"
    },[])
    return (
        <div>
           

            <div className="shadow-xl card lg:card-side bg-base-100 w-[80%]  mx-auto  my-[60px] ">
                <div className="lg:w-[50%] bg-gray-200">

                    {/* text-adjust-with-img------------ */}
                    <div className="relative w-full sm:h-[40vh] top-[70px] md:top-[85px] md:h-[300px]">

                        <figure className="w-full h-full overflow-hidden">
                            <img
                                src={serviceImageURL}
                                className="object-cover w-full h-full mt-2 rounded-t-full"
                                alt="Service Image"
                            />
                        </figure>


                        <svg
                            className="absolute top-[-130px] left-0 w-full h-full pointer-events-none md:top-[-170px]"
                            viewBox="0 0 370 215"
                        >
                            <defs>

                                <path
                                    id="textCurve"
                                    d="M 40,158 A 185 160 0 0 1 334,158"
                                    fill="none"
                                />
                            </defs>

                            <text textAnchor="middle" fontSize="30" fontWeight="bold" fill="black">
                                <textPath href="#textCurve" startOffset="50%">
                                    {serviceName}
                                </textPath>
                            </text>

                        </svg>
                        {/* service location-------------------- */}
                        <svg
                            className="absolute top-[-110px] left-0 w-full h-full pointer-events-none md:top-[-140px]"
                            viewBox="0 0 370 215"
                        >
                            <defs>

                                <path
                                    id="textCurve"
                                    d="M 40,180 A 160 160 0 0 1 334,180"
                                    fill="none"
                                />
                            </defs>

                            <text textAnchor="middle" fontSize="17" fill="red" fontWeight="">
                                <textPath href="#textCurve" startOffset="50%">
                                    {serviceArea}

                                </textPath>

                            </text>

                        </svg>
                    </div>

                    {/* marquee for service price------------------ */}
                    <Marquee className='absolute top-[55px] md:top-[70px]' speed={20} >
                        <div className="badge badge-secondary">{servicePrice}</div>

                    </Marquee>
                    <div className="mt-10 card-body md:mt-12">

                        <p>{serviceDescription}</p>
                    </div>

                </div>

                {/* provider details----------------- */}
                <div className="card-body lg:w-[50%] flex flex-col   relative">
                    {/* Container for Image & Revolving Text */}
                    <div className="relative flex items-center justify-center">

                        {/* Revolving Text (Behind Image) */}
                        <div className="absolute w-[180px] h-[180px] revolving-text">
                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                <defs>
                                    <path id="circlePath" d="M 100,100 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0" />
                                </defs>
                                <text className="text-[20px] font-bold tracking-wide">
                                    <textPath href="#circlePath" startOffset="40%">
                                        <tspan fill="red" fontSize="24px" fontFamily="Arial, sans-serif">&#9881;</tspan>
                                        <tspan fontSize="24px"> {providerName} </tspan>
                                        <tspan fill="red" fontSize="24px" fontFamily="Arial, sans-serif">⚙</tspan>
                                    </textPath>
                                </text>
                            </svg>
                        </div>

                        {/* Provider Image (Centered in Text) */}
                        <div className="flex flex-col avatar">
                            <div className="w-32 h-32 overflow-hidden rounded-full ring-primary ring-offset-base-100 ring ring-offset-2">
                                <img src={providerImageURL} className="object-cover w-full h-full" />
                            </div>
                        </div>

                    </div>
                    {/* lottie for location icon------------------ */}
                    <div className="flex justify-center mt-2">
                        <Lottie animationData={locationIcon} className="w-14 ">  </Lottie>
                        <span className="mt-8 text-xl font-semibold text-red-500">{serviceArea}</span>
                    </div>
                    <Link to={`/bookedServices/${_id}`}>
                        <div className="justify-center card-actions">

                            <BookNowBtn></BookNowBtn>
                        </div>
                    </Link>
                </div>
            </div>
        </div>


    );
};

export default ServiceDetails;