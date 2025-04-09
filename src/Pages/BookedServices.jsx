import { useEffect, useMemo, useState } from "react";
import BookedServicesFrom from "./BookedServicesFrom";
import { useParams } from "react-router-dom";


const BookedServices = () => {
    const { id } = useParams()
    console.log(id)
    const [bookedData, setBookedData] = useState()
    // console.log(bookedData)

    useEffect(() => {
        fetch(`http://localhost:5000/allData/${id}`)
            .then(res => res.json())
            .then(data => {
                setBookedData(data)

            })


    }, [id])

    
    return (
        <div>
            <BookedServicesFrom bookedData={bookedData}></BookedServicesFrom>
        </div>
    );
};

export default BookedServices;