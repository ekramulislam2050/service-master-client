import { useEffect, useState } from "react";
import Card from "./Card";


const Cards = () => {
    const [allData, setAllData] = useState([])
    // console.log(allData)
    useEffect(() => {
        fetch("http://localhost:5000/servicesForHomePage")
            .then(res => res.json())
            .then(data => {
                setAllData(data)
            })
    }, [])
    return (

        <div  >
            <div className="flex justify-center">
                <div className="grid grid-cols-3 ">

                    {
                        allData.map((data) => <Card key={data._id} data={data}></Card>)
                    }

                </div>

            </div>
            
        </div>

    );
};

export default Cards;