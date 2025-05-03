import { motion } from "framer-motion"



const CustomPageTitle = ({ title }) => {
    return (
        <div className="overflow-hidden ">
            <div className="my-8 text-center">
                <motion.div
                    className="relative inline-block px-8 py-3 text-3xl font-bold text-white bg-gradient-to-r from-[#f900cc] to-indigo-600 rounded-full shadow-lg"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    <span className="absolute inset-0 z-0 rounded-full bg-violet-500 opacity-60 animate-ping"></span>
                    <span className="relative z-10">⚙{title} ⚙</span>
                </motion.div>
            </div>
        </div>
    );
};

export default CustomPageTitle;