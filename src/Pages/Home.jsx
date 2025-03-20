
import Cards from "./Cards";
import Banner from "./Banner";
import CustomButton from "../CustomComponents/CustomButton";


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
             <div className="flex justify-center mt-5 mb-10">
             <CustomButton></CustomButton>
             </div>
        </div>

    );
};

export default Home;