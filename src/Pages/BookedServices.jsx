import { useEffect, useState } from "react";
import BookedServicesFrom from "./BookedServicesFrom";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";



const BookedServices = () => {
    const { id } = useParams()
  
    const [bookedData, setBookedData] = useState(null)

   

    useEffect(() => {
        document.title = "BookedServices"

        if (id) {
            fetch(`https://service-master-server.vercel.app/allData/${id}`, {
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
                   
                    setBookedData(data)

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
        }


    }, [id])

    if (!bookedData) {
        return <p className="flex justify-center my-[100px]"><span className="w-32 h-32 loading loading-spinner text-error"></span></p>
    }

    return (
        <div className="">

            <div className="">
                <BookedServicesFrom bookedData={bookedData}></BookedServicesFrom>
            </div>
        </div>
    );
};

export default BookedServices;