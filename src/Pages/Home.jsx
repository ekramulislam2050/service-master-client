
const Home = () => {

    return (
        <div className="w-full carousel h-[74.3vh]">
            <div id="slide1" className="relative w-full carousel-item">
                <img
                    src="https://i.ibb.co.com/KcWW9jcM/car-wash.webp"
                    className="w-full h-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="relative w-full carousel-item">
                <img
                    src="https://i.ibb.co.com/Fbk0jRqQ/solar-energy.webp"
                    className="w-full h-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="relative w-full carousel-item">
                <img
                    src="https://i.ibb.co.com/49pDr7X/jurney.webp"
                    className="w-full h-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="relative w-full carousel-item">
                <img
                    src="https://i.ibb.co.com/V0pdN071/house-cleaning.webp"
                    className="w-full h-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
        
    );
};

export default Home;