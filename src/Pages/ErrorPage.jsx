
import { motion } from "motion/react"
import NaveBar from "../Shared/NaveBar";
import Footer from "../Shared/Footer";


const ErrorPage = () => {
    const box = {
        width: 250,
        height: 250,
        backgroundColor: "#B82132",
        borderRadius: 5,
    }
    return (

        <div className="w-screen">
             <NaveBar></NaveBar>
            <div className="flex items-center justify-center h-screen ">
           
                <motion.div
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1,
                    }}
                    style={box}
                    className="flex items-center justify-center "
                >
                    <h1 className="text-xl text-white ">Page not found <span className="text-4xl">404</span></h1>
                </motion.div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;