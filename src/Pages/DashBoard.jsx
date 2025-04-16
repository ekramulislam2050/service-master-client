import { useEffect } from "react";

 

 

const DashBoard = () => {
    useEffect(()=>{
        document.title="DashBoard"
    },[])
    return (
        <div>
           
            <h1>this is dash board</h1>
        </div>
    );
};

export default DashBoard;