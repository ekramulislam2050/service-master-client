
import Cards from "./Cards";
import Banner from "./Banner";
import CustomButton from "../CustomComponents/CustomButton";
 


const Home = () => {
  
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