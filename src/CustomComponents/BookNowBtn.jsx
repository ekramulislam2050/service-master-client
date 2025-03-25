import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'

const BookNowBtn = () => {
     const navigate = useNavigate()
    return (
        <div>
            <motion.button
                onClick={() => navigate(" ")}
                className="relative px-8 py-3 overflow-hidden text-lg font-semibold text-white transition-all rounded-full shadow-lg bg-gradient-to-r from-indigo-500 to-green-500 hover:shadow-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <span className="absolute inset-0 bg-red-500 rounded-full opacity-80 animate-ping"></span>
                <span className="relative "> ⚙ Book Now ⚙</span>


            </motion.button>
        </div>
    );
};

export default BookNowBtn;