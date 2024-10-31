'use client';
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const About=()=>{
    return (
        <>
            <Navbar/>
            <div className="container-fluid p-0">
                <div>
                <div className="flex justify-center items-center text-center mt-6">
                        <div className="w-full sm:w-[600px] lg:w-[800px] mt-10">
                            <div className="mt-5 w-full lg:max-w-[1320px] mx-auto p-4">
                                <h1 className="text-2xl sm:text-3xl font-bold">About US</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-5 w-full lg:max-w-[1220px] mx-auto p-7">
                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                            <div className="p-6">
                                <img src="https://img.freepik.com/free-vector/office-work-school-education-man-writing-chart-board-woman-designer-drawing-graphic-tablet-teacher-stand-knee-giving-book-little-girl-with-schoolbag_33099-2516.jpg" alt="" className="shrink-0 w-[600px] "/>
                            </div>
                            <div className="bg-slate-100">
                                <div className="p-8">
                                    <h1 className="text-3xl font-bold italic">Learn more about us</h1>
                                    <p className="mt-4 italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <ul className="text-justify ml-6 mt-3">
                                    <li className="mt-2"> 
                                        <i className="fa-solid fa-square-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </li>
                                    <li  className="mt-2">
                                        <i className="fa-solid fa-square-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.
                                    </li>
                                    <li  className="mt-2">
                                        <i className="fa-solid fa-square-check"></i>  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperd
                                    </li>
                                    </ul>
                                    <p className="mt-2">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate tera noden carma palorp mades tera.</p>
                                    <button type="button" className="text-white mt-5 font-bold bg-gray-800 hover:bg-gray-400 rounded-lg text-sm px-4 py-2 text-center">
                                        <Link href='/'>Read More</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        
        </>
    )
}
export default About;