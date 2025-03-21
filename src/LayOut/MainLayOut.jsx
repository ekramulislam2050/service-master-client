import { Outlet } from "react-router-dom";
import NaveBar from "../Shared/NaveBar";
import Footer from "../Shared/Footer";




const MainLayOut = () => {
    return (
        <div className="w-screen ">
            <header >
                <NaveBar />
            </header>
            <main  >
                <Outlet />
            </main>
            <footer >
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayOut;