
import Cards from "./Cards";
import Banner from "./Banner";
import CustomButton from "../CustomComponents/CustomButton";
import { useEffect } from "react";




const Home = () => {
    useEffect(() => {
        document.title = 'Home'

    }, [])

    return (
        <div className="dark:bg-blue-700 ">

            <div >
                <Banner></Banner>
                <Cards></Cards>


            </div>
            <div className="flex justify-center pb-10 mt-5 ">
                <CustomButton></CustomButton>
            </div>
        </div>

    );
};

export default Home;