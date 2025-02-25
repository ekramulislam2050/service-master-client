import { Outlet } from "react-router-dom";
import NaveBar from "../Shared/NaveBar";
import Footer from "../Shared/Footer";


 

const MainLayOut = () => {
    return (
        <div>
            <NaveBar></NaveBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;