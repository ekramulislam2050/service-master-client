
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Link, useNavigate, useParams } from 'react-router-dom';
import availableLottie from "../assets/Lotti for available reaction/Animation - 1742188860747.json"
import Swal from 'sweetalert2';

 
const DeleteService = () => {
    const { id } = useParams()
    console.log(id)
    const [deleteAbleData, setDeleteAbleData] = useState({})
    const navigate = useNavigate()
    console.log(deleteAbleData)
    if(!id){
        return <p>id not found</p>
    }
    
    useEffect(() => {
       
        fetch(`http://localhost:3000/alldata/${id}`,{
            method:"GET",
            credentials:"include"
        })
            .then(res =>{
                if(!res.ok){
                    throw new Error(`Error:${res.status} ${res.statusText}`)
                }
                return res.json()
            })
            .then(data => {
                setDeleteAbleData(data)
            })
            .catch(error=>{
               alert(error.message)
            })
    }, [id])

    const handleDelete = (id) => {
       
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/service/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount == 1) {

                            navigate("/allServices")
                        }
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }
    useEffect(()=>{
        document.title="DeleteService"
    },[])
    return (
        <div>
            
            <div className='flex justify-center bg-red-500'>
                <div className="my-10 shadow-sm card bg-base-200 lg:w-[40%] md:w-[60%] overflow-hidden">


                    {/* provider image--------------- */}
                    <div className="absolute flex flex-col avatar top-5 left-5">
                        <div className="rounded-full w-14 ring-primary ring-offset-base-100 ring ring-offset-2">
                            <img src={deleteAbleData.providerImageURL} className='w-full' />
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
                                <tspan fill='darkblue'>{deleteAbleData.providerName}</tspan>
                                <tspan fill="red" fontSize={'38px'}>{"⚙"}</tspan>


                            </textPath>

                        </text>

                    </svg>
                    {/* text-adjust-with-img------------ */}
                    <div className="relative w-full h-[215px] ">

                        <figure className="w-full h-full overflow-hidden rounded-t-full ">
                            <img
                                src={deleteAbleData.serviceImageURL}
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
                                    {deleteAbleData.serviceName}
                                </textPath>
                            </text>
                        </svg>
                    </div>

                    {/* marquee for service price------------------ */}
                    <Marquee className='absolute top-[-10px]' speed={20}>
                        <div className="badge badge-secondary">{deleteAbleData.servicePrice}</div>

                    </Marquee>

                    {/* lottie file---------------- */}
                    <div className="absolute flex flex-col  top-[-20px] right-[-10px]">
                        <Lottie animationData={availableLottie} className='w-[150px] h-[150px]'></Lottie>

                    </div>

                    <div className="card-body">

                        <p>{deleteAbleData.serviceDescription}</p>

                        <div className='flex justify-between mt-4'>
                            <Link onClick={() => handleDelete(deleteAbleData._id)} className='w-[48%]'>
                                <button className='w-full btn btn-outline btn-error' >Delete</button>
                            </Link>
                            <Link to={`/manageServices`} className='w-[48%]'>
                                <button className='w-full btn btn-outline btn-primary '>Cancel</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteService;
