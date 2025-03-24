import { useEffect } from "react";
import { useParams } from "react-router-dom";

 

const ServiceDetails = () => {
    const {id}=useParams()
    // console.log(id)
    useEffect(()=>{
        fetch(`http://localhost:5000/allData/${id}`,{
            method:"GET",
            headers:{
                "content-type":"application/json"
            },
        
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[id])
    return (
        <div>
            <h1>service details page</h1>
        </div>
    );
};

export default ServiceDetails;