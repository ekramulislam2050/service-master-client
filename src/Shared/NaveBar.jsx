import { Link } from "react-router-dom";


const NaveBar = () => {
    const links = <>
        <li><a>Home</a></li>
        <li><a>Services</a></li>
        <li>
            <details>
                <summary>Dashboard</summary>
                <ul className="p-2">
                    <li><a>Add-Service</a></li>
                    <li><a>Manage-Service</a></li>
                    <li><a>Booked-Services</a></li>
                    <li><a>Service-To-Do</a></li>
                </ul>
            </details>
        </li>

    </>
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                {/* logo------------------ */}
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

                    <div className="w-10 rounded-full">
                        <Link to={"/"}>
                            <img src="https://i.ibb.co.com/XxDybPth/icons8-service.gif" className="w-full" alt="Logo" />
                        </Link>
                    </div>


                </div>
                <button className="text-xl btn btn-ghost">Service Master</button>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn">LogIn</button>
                <button className="btn">LogOut</button>
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="user-image"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NaveBar;