
import Cards from "./Cards";
import Banner from "./Banner";
import CustomButton from "../CustomComponents/CustomButton";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/allServices")
    }
    return (
        <div >
            <div  >
                <Banner></Banner>
                <Cards></Cards>


            </div>
            <div className="flex justify-center mt-5 mb-10 w-">
                <CustomButton></CustomButton>
            </div>
        </div>

    );
};

export default Home;