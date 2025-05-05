import { useEffect, useState } from "react";
import Card from "./Card";


const Cards = () => {
    const [allData, setAllData] = useState([])
   
    useEffect(() => {
        fetch("https://service-master-server.vercel.app/servicesForHomePage")
            .then(res => res.json())
            .then(data => {
                setAllData(data)
            })
    }, [])
    return (

        <div  className="">
            <div className="flex justify-center">
                <div className="grid lg:grid-cols-3 md:grid-cols-2">

                    {
                        allData.map((data) => <Card key={data._id} data={data}></Card>)
                    }

                </div>

            </div>
            
        </div>

    );
};

export default Cards;