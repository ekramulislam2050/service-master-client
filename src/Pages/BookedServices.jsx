import { useEffect,  useState } from "react";
import BookedServicesFrom from "./BookedServicesFrom";
import { useParams } from "react-router-dom";
 


const BookedServices = () => {
    const { id } = useParams()
    console.log(id)
    const [bookedData, setBookedData] = useState()
    // console.log(bookedData)

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3000/allData/${id}`)
                .then(res => res.json())
                .then(data => {
                    setBookedData(data)

                })
        }


    }, [id])
   useEffect(()=>{
    document.title="BookedServices"
   },[])

    return (
        <div>
            
            <div>
                <BookedServicesFrom bookedData={bookedData}></BookedServicesFrom>
            </div>
        </div>
    );
};

export default BookedServices;