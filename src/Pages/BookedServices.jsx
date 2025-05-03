import { useEffect, useState } from "react";
import BookedServicesFrom from "./BookedServicesFrom";
import { useParams } from "react-router-dom";



const BookedServices = () => {
    const { id } = useParams()
    // console.log(id)
    const [bookedData, setBookedData] = useState(null)
     
    // console.log( bookedData)

    useEffect(() => {
        document.title = "BookedServices"

        if (id) {
            fetch(`http://localhost:3000/allData/${id}`, {
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
                    // console.log(data)
                    setBookedData(data)

                })
                .catch(error => {
                    alert(error.message)
                })
        }


    }, [id])

    if (!bookedData) {
        return <p>Loading ................</p>
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