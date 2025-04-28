import Lottie from "lottie-react";
import { useContext, useEffect, useState } from "react";

import AuthContext from "../Context/AuthContext";
import pendingLottie from "../assets/Lotti for pending/Animation - 1744424698225.json"
import providerDetails from "../assets/providerDetailsLottie/Animation - 1744897193063.json"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import CustomPageTitle from "./CustomPageTitle";



const ServiceToDo = () => {
    const { user,toggleForAll } = useContext(AuthContext)
    const [toDo, setToDo] = useState([])
    const navigate = useNavigate()

    
    useEffect(() => {
          document.title = "ServiceToDo"
        if (user?.email) {
            fetch(`http://localhost:3000/serviceToDo?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setToDo(data)
                })
        }
    }, [user?.email])

    const handleOnchange = (e, id) => {
        // console.log(id)
        const statusValue = e.target.value
        fetch(`http://localhost:3000/serviceToDo/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                serviceStatus: statusValue
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    Swal.fire({
                        title: "PATCH successful",
                        text: "You clicked the button!",
                        icon: "success"
                    })
                    navigate("/bookedServicesForUI")
                }



            })
    }

    if (!user) {
        return <p> Loading..............</p>
    }
    return (

        <div className="p-1 dark:bg-blue-700">
            <CustomPageTitle title="Service To Do"></CustomPageTitle>
            <div className="flex justify-center my-5">
                <div className="grid gap-3 mx-3 overflow-hidden lg:grid-cols-3 md:grid-cols-2">
                    {toDo.length === 0 ? <div className='flex justify-center w-screen bg-red-500 border' ><p className='my-24 text-5xl font-semibold text-white '>No one has booked any  services yet!</p> </div> : toDo.map(data => <div key={data._id} className="w-full shadow-sm card bg-base-200 dark:bg-gray-900">
                        {/* CurrentUserImgURL --------------- */}
                        <div className="absolute flex flex-col avatar top-5 left-5">
                            <div className="rounded-full w-14 ring-primary ring-offset-base-100 ring ring-offset-2">
                                <img src={data.
                                    CurrentUserImgURL} className='w-full' />
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
                                    <tspan fill={toggleForAll?"white":'darkblue'}>{data.currentUserName}</tspan>
                                    <tspan fill="red" fontSize={'38px'}>{"⚙"}</tspan>


                                </textPath>

                            </text>

                        </svg>


                        <div className="absolute top-1 right-5">

                            {/* status image--------------- */}
                            <div className="absolute flex flex-col avatar top-5 right-5">
                                <div className="rounded-full w-14 ring-primary ring-offset-base-100 ring ring-offset-2">
                                    {
                                        data.serviceStatus === 'completed' ? <img src="https://i.ibb.co.com/ymRGkqzd/icons8-success.gif" />
                                            :
                                            data.serviceStatus === 'working' ? <img src="https://i.ibb.co.com/W4HDsr1R/work.png" />
                                                :
                                                <Lottie animationData={pendingLottie} className='w-full rounded-full bg-[red] '></Lottie>
                                    }



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
                                        <tspan fill={toggleForAll?"white":'darkblue'}>{data.serviceStatus}</tspan>
                                        <tspan fill="red" fontSize={'38px'}>{"⚙"}</tspan>


                                    </textPath>

                                </text>

                            </svg>
                        </div>
                        {/* client information------------- */}
                        <div className=" card-body">

                            <div className=' border-1'>
                                <div className="flex flex-col items-center ">
                                    <div className='w-[160px] mt-[-85px]   rounded-full overflow-hidden '>
                                        <Lottie animationData={providerDetails}   >

                                        </Lottie>
                                    </div>
                                    <p className='font-semibold '>
                                        <span className='text-[#f7931e]'>
                                            Service Name</span> : <span className='text-[#00a99d]'> {data.serviceName}</span>
                                    </p>
                                    <p className='font-semibold '>
                                        <span className='text-[#f7931e]'>
                                            Current User Email</span> : <span className='text-[#00a99d]'> {data.currentUserEmail}</span>
                                    </p>
                                    <p className='font-semibold '>
                                        <span className='text-[#f7931e]'>Current User Name</span> : <span className='text-[#00a99d]'> {data.currentUserName}</span>
                                    </p>

                                    <p className='font-semibold '>
                                        <span className='text-[#00a99d]'>Delivery on</span> : <span className='text-[#f7931e]' > {data.
                                            serviceAcceptanceDate}</span>
                                    </p>
                                </div>


                            </div>

                            {/* dropdown for status-------------------- */}
                            <div className="mb-5 dropdown dropdown-start">

                                <div className=" px-1 m-[2px] rounded-full bg-[#5bef60]   text-xl  text-green-800  "><label>Change Your Status  <span className="font-bold text-red-500 "> : </span> </label>
                                    <select defaultValue={data.serviceStatus} className=" rounded-full bg-[#5bef60]" onChange={(e) => handleOnchange(e, data._id)}>
                                        <option value="pending">Pending</option>
                                        <option value="working">Working</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                </div>


                            </div>

                        </div>


                    </div>)
                    }
                </div>
            </div>
        </div>


    );
};

export default ServiceToDo;