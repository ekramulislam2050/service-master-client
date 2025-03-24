import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link, useParams } from "react-router-dom";
import availableLottie from '../assets/Lotti for available reaction/Animation - 1742188860747.json'


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
        _id } = clickedData || {}
    useEffect(() => {
        fetch(`http://localhost:5000/allData/${id}`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            },

        })
            .then(res => res.json())
            .then(data => setClickedData(data))
    }, [id])
    return (

        // <div className="m-5 shadow-sm card bg-base-200 w-96 ">


        //     {/* provider image--------------- */}
        //     <div className="absolute flex flex-col avatar top-5 left-5">
        //         <div className="rounded-full w-14 ring-primary ring-offset-base-100 ring ring-offset-2">
        //             <img src={providerImageURL} className='w-full' />
        //         </div>

        //     </div>
        //     {/* revolving text-------------- */}
        //     <svg viewBox="0 0 200 200 " className='svg-size-1'>

        //         <defs>
        //             <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
        //         </defs>
        //         <text className='text-1 '>

        //             <textPath href="#circlePath" >
        //                 <tspan fill="red" fontSize={'38px'}>&#9881;</tspan>
        //                 <tspan fill='darkblue'>{providerName}</tspan>
        //                 <tspan fill="red" fontSize={'38px'}>{"⚙"}</tspan>


        //             </textPath>

        //         </text>

        //     </svg>
        //     {/* text-adjust-with-img------------ */}
        //     <div className="relative w-[384px] h-[215px]">

        //         <figure className="w-full h-full overflow-hidden rounded-t-full">
        //             <img
        //                 src={serviceImageURL}
        //                 className="object-cover w-full h-full"
        //                 alt="Service Image"
        //             />
        //         </figure>


        //         <svg
        //             className="absolute top-[-105px] left-0 w-full h-full pointer-events-none"
        //             viewBox="0 0 370 215"
        //         >
        //             <defs>

        //                 <path
        //                     id="textCurve"
        //                     d="M 40,180 A 160 160 0 0 1 334,180"
        //                     fill="none"
        //                 />
        //             </defs>

        //             <text textAnchor="middle" fontSize="24" fontWeight="bold" fill="black">
        //                 <textPath href="#textCurve" startOffset="50%">
        //                     {serviceName}
        //                 </textPath>
        //             </text>
        //         </svg>
        //     </div>

        //     {/* marquee for service price------------------ */}
        //     <Marquee className='absolute top-[-10px]' speed={20}>
        //         <div className="badge badge-secondary">{servicePrice}</div>

        //     </Marquee>

        //     {/* lottie file---------------- */}
        //     <div className="absolute flex flex-col  top-[-20px] right-[-10px]">
        //         <Lottie animationData={availableLottie} className='w-[150px] h-[150px]'></Lottie>

        //     </div>

        //     <div className="card-body">

        //         <p>{serviceDescription}</p>

        //         <Link to={` `}>
        //             <div className="justify-center card-actions">
        //                 <button className="w-full rounded-full btn btn-primary"  >View Detail</button>
        //             </div>
        //         </Link>

        //     </div>
        // </div>
        <div>
            <div className="shadow-xl card lg:card-side bg-base-100 w-[80%] h-[80vh] mx-auto  mt-[60px]    ">
               <div className="w-[50%] bg-gray-200">
                
               </div>
                <div className="card-body w-[50%]  ">
                    <div className="flex justify-end gap-5 mt-[-30px]">
                       
                       
                    </div>

                    <h2 className="card-title">New album is released!</h2>
                    <p className="text-xl">The Grand Adventure is an exciting blend of Adventure and Fantasy genres. Released in 2022, it has a runtime of 120 minutes and a stellar rating of 8.7. This epic tale follows a young hero embarking on a courageous journey to save their homeland, offering thrilling moments and breathtaking visuals.</p>
                    <div className="justify-end card-actions">
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;