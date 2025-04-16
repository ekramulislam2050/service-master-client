import { useEffect } from "react";


const Service = () => {
     useEffect(()=>{
            document.title="Service"
         },[])
    return (
        <div>
            
            <h2>service page </h2>
        </div>
    );
};

export default Service;