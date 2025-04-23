import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import Swal from "sweetalert2";


const NaveBar = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)
    //    console.log(toggle)
    const { user, logOut,getToggle } = useContext(AuthContext)
    const { email, displayName } = user || {}

    const userInfoAndMode = {
        userEmail: email,
        userName: displayName,

    }
    
    // context api get toggle value---------
    getToggle(toggle)

    // log out handle-------------
    const handleLogOut = () => {
        logOut()
        navigate("/")
    }

    // dark,light mode toggle------------
    const handleToggle = (tValue) => {

        setToggle(tValue)

        fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ ...userInfoAndMode, userMode: tValue })
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    Swal.fire({
                        title: "POST successful",
                        text: "You clicked the button!",
                        icon: "success"
                    })

                }
            })



    }

    //user mode and information------------------
    useEffect(() => {
        if (!email) {
            return
        }
        fetch(`http://localhost:3000/userModeAndInfo?email=${email}`)
            .then(res => res.json())
            .then(data => {

                const userMode = data[0]?.userMode
                setToggle(userMode)
                if (userMode === true) {
                    document.body.classList.add("dark")

                }
                else {
                    document.body.classList.remove("dark")

                }


            })

    }, [toggle, email])




    const links_1 = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li> <NavLink to={"/allServices"}>  Services </NavLink></li>
        <li>
            <details className="z-50 ">
                <summary > Dashboard </summary>
                <ul className="p-2 dark:bg-blue-400">
                    <li><NavLink to={"/addService"}>Add-Services</NavLink></li>
                    <li><NavLink to={'/manageServices'}> Manage-Services</NavLink> </li>
                    <li><NavLink to={'/bookedServicesForUI'}>Booked-Services</NavLink></li>
                    <li><NavLink to={"/serviceToDo"}>Service-To-Do</NavLink></li>

                </ul>
            </details>


        </li>
    </>

    const links_2 = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li> <NavLink to={"/service"}>  Services </NavLink></li>

    </>

    return (
        <div className=" navbar bg-base-200 dark:bg-gray-900">

            <div className="navbar-start ">
                <div className=" dropdown">
                    <div tabIndex={0} role="button" className=" btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 "
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
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
                <div tabIndex={0} role="button" className=" btn btn-ghost btn-circle avatar">

                    <div className="w-10 rounded-full ">
                        <Link to={"/"} >
                            <img src="https://i.ibb.co.com/XxDybPth/icons8-service.gif" className="w-full" alt="Logo" />
                        </Link>
                    </div>


                </div>
                <button className="text-xl btn btn-ghost">Service Master</button>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal dark:text-white ">
                    {user ? links_1 : links_2}
                </ul>
            </div>
            <div className="navbar-end">
                {/* dark mode light mode icon---------- */}
                <div tabIndex={0} role="button" className=" btn-ghost btn-circle avatar">
                    {
                        !user ?
                            <div className="rounded-full   w-[50px] h-[45px]">
                                <div className="w-full h-full rounded-full bg-base-200 mb-[2px] flex items-center justify-center  ">
                                    <img src={'https://i.ibb.co.com/MkGRWrDj/arrow.png'} alt="" />
                                </div>
                            </div>
                            :
                            <div className="rounded-full btnBorder  w-[50px] h-[45px]  ">
                                <div onClick={() => handleToggle(!toggle)} className="w-full h-full rounded-full bg-base-200 mb-[2px] flex items-center justify-center ">
                                    {
                                        toggle === true ? <MdOutlineLightMode size={30} />
                                            :
                                            <MdOutlineDarkMode size={30} />
                                    }

                                </div>


                            </div>
                    }
                </div>
                {
                    user ?
                        <button className="btn dark:bg-gray-900 dark:text-white dark:border-none" onClick={handleLogOut}>signOut    </button>
                        :
                        <Link to={"/signIn"} className="btn dark:bg-gray-900 dark:text-white dark:border-none">LogIn</Link>
                }

                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">

                        <img alt="user-image" src={user && user.photoURL} />

                    </div>
                </div>

            </div>
        </div>
    );
};

export default NaveBar;