
import Cards from "./Cards";
import Banner from "./Banner";
import CustomButton from "../CustomComponents/CustomButton";
import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




const Home = () => {
    const navigate = useNavigate()
   
    const [itemsPerPage, setItemsParPage] = useState(3)
    const [currentPage, setCurrentPage] = useState()
    const [totalItems, setTotalItems] = useState()
    const totalPage = Math.ceil(totalItems / itemsPerPage)
    const serialNumbersOfpPage = []
    for (let i = 1; i < totalPage + 1; i++) {
        serialNumbersOfpPage.push(i)
    }
    // console.log(serialNumbersOfpPage)
    // console.log(currentPage)

    const  handleInputFieldByOnChange=(serialNumberOfpPage)=>{
        setCurrentPage(serialNumberOfpPage)
        navigate("/pagination",{
            state:{
             currentPage:serialNumberOfpPage,
             itemsPerPage:parseInt(itemsPerPage)
        }})
    }
    
    const handleSelect = (e) => {
        const value = e.target.value
        setItemsParPage(value)
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {
        if (currentPage < serialNumbersOfpPage.length) {
            setCurrentPage(currentPage + 1)
        }

    }

    useEffect(() => {
        document.title = 'Home'
        fetch('http://localhost:3000/serviceCount')
            .then(res => res.json())
            .then(data => {
                setTotalItems(data.totalItems)
            })

            

    }, [])

 

    return (
        <div className="dark:bg-blue-700 ">

            <div >
                <Banner></Banner>
                <Cards></Cards>


            </div>
            <div className="flex justify-center pb-10 mt-5 ">
                <CustomButton></CustomButton>
            </div>
            <div className="flex flex-col items-center">
                <p>pagination</p>

                <div >
                    <button className="mr-2 btn btn-active btn-accent" onClick={handlePrevious}>Previous</button>
                    {
                        serialNumbersOfpPage.map(serialNumberOfpPage => <div className="mx-1 join" key={serialNumberOfpPage}>
                            <input
                                className="join-item btn btn-square"
                                type="radio"
                                name="options"
                                aria-label={serialNumberOfpPage}
                                checked={currentPage === serialNumberOfpPage}
                                onChange={() =>handleInputFieldByOnChange(serialNumberOfpPage)}
                            />

                        </div>)
                    }
                    <select value={itemsPerPage} className="bg-red-500 btn " onChange={handleSelect}>
                        <option value="3">3</option>
                        <option value="5">5</option>
                    </select>
                    <button className="ml-1 btn btn-active btn-accent" onClick={handleNext}>next</button>
                </div>

            </div>

        </div>

    );
};

export default Home;
// {currentPage === serialNumberOfpPage}