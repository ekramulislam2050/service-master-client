

const Banner = () => {
    return (
        <div className="w-full ">
            <div className="w-full h-[90vh] overflow-hidden carousel">
                <div id="slide1" className="relative w-full carousel-item">
                    <img
                        src="https://i.ibb.co.com/Rk1GkZZR/car-wash.jpg"
                        className="w-full h-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle ">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="relative w-full carousel-item">
                    <img
                        src="https://i.ibb.co.com/CKZK79Bs/house-cleaning.jpg"
                        className="w-full h-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="relative w-full carousel-item">
                    <img
                        src="https://i.ibb.co.com/DDsx1GQx/locksmit.png"
                        className="w-full h-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="relative w-full carousel-item">
                    <img
                        src="https://i.ibb.co.com/Vc1V5ftc/solar-energy.jpg"
                        className="w-full h-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
    
        </div>
    );
};

export default Banner;