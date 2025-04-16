import { useEffect, useState } from "react";
import Card from "./Card";


const Cards = () => {
    const [allData, setAllData] = useState([])
    // console.log(allData)
    useEffect(() => {
        fetch("http://localhost:3000/servicesForHomePage")
            .then(res => res.json())
            .then(data => {
                setAllData(data)
            })
    }, [])
    return (

        <div  >
            <div className="flex justify-center">
                <div className="grid gap-3 overflow-hidden lg:grid-cols-3 md:grid-cols-2 ">

                    {
                        allData.map((data) => <Card key={data._id} data={data}></Card>)
                    }

                </div>

            </div>
            
        </div>

    );
};

export default Cards;