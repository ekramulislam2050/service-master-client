import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"
const CustomButton = () => {
    const navigate = useNavigate()
    return (
        <motion.button
            onClick={() => navigate("/allServices")}
            className="relative px-8 py-3 overflow-hidden text-lg font-semibold text-white transition-all rounded-full shadow-lg bg-gradient-to-r from-[#f900cc] to-indigo-600 hover:shadow-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <span className="absolute inset-0 bg-red-500 rounded-full opacity-80 animate-ping"></span>
            <span className="relative "> ⚙ All Services ⚙</span>


        </motion.button>
    );
};

export default CustomButton;