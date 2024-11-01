"use client";
import { UsersInfo } from "@/app/dataset/data";
import { useState } from "react";

const UserSection = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setModalOpen(false);
    };

    const [showData, setShowData] = useState(false);
    const [delData, setDeldata] = useState(UsersInfo);
    const [expandedMessages, setExpandedMessages] = useState({});
    const handleChange = () => {
        setShowData(!showData);
    };

    const handleDelete = (id) => {
        const updatedData = delData.filter((item) => item.id !== id);
        setDeldata(updatedData);
    };
    const toggleMessage = (id) => {
        setExpandedMessages((prevExpandedMessages) => ({
            ...prevExpandedMessages,
            [id]: !prevExpandedMessages[id],
        }));
    };
    return (
        <div className="sm:ml-64 rounded-lg max-w-full lg:max-w-[1200px]">
            <div className="p-2">
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
                    <div className="ml-3 mt-3">
                        <h1 className="text-3xl md:text-2xl font-bold">Welcome Back!</h1>
                        <p className="text-base md:text-lg">Admin Panel</p>
                    </div>
                    <div className="flex items-center lg:justify-end">
                        <span className="mr-4 p-2">George Herry</span>
                        <div className="relative">
                            <button
                                type="button"
                                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                                aria-expanded={showData}
                                onClick={handleChange}
                            >
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." alt="User avatar" />
                                
                            </button>
                            {showData && (
                                <div className="absolute w-[100px] right-0 mt-2 p-3  bg-white border border-gray-400 rounded-lg shadow-lg">
                                    <p className="cursor-pointer">Settings</p>
                                    <p className="cursor-pointer">Logout</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Users */}
                <div className="mt-10 rounded-xl p-4">
                    <div className="flex flex-col">
                        <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:justify-between">
                            <div>
                                <h1 className="text-xl font-bold ml-3">User Records</h1>
                            </div>

                            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
                                <form className="flex items-center w-full lg:w-auto">
                                    <label htmlFor="simple-search" className="sr-only">Search</label>
                                    <div className="w-full">
                                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search branch name..." required />
                                    </div>
                                    <button type="submit" className="p-2.5 w-[100px] ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                        Search
                                    </button>
                                </form>

                                <button className="text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg p-2 hover:bg-gray-200">
                                    <i className="fa-solid fa-cloud-arrow-up text-lg"></i> Export
                                </button>
                            </div>
                        </div>

                        <div className="overflow-x-auto mt-3">
                            <table className="text-sm text-left rtl:text-right text-gray-500 w-full">
                                <thead className="text-xs text-center text-gray-700 bg-gray-50 ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-lg">Sr.#</th>
                                        <th scope="col" className="px-6 py-3 text-lg">Email</th>
                                        <th scope="col" className="px-6 py-3 text-lg">Subject</th>
                                        <th scope="col" className="px-6 py-3 text-lg">Message</th>
                                        <th scope="col" className="px-6 py-3 text-lg">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {UsersInfo.map((item, index) => (
                                        <tr key={item.id} className="bg-white text-center border-b ">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                {index + 1}
                                            </th>
                                            <td className="px-6 py-4">{item.email}</td>
                                            <td className="px-6 py-4">{item.subject}</td>
                                            <td className="px-6 py-4">
                                                {/* Show limited or full message based on expandedMessages state */}
                                                {expandedMessages[item.id] || item.message.length <= 120
                                                    ? item.message
                                                    : `${item.message.slice(0, 120)}...`}
                                                {item.message.length > 120 && (
                                                    <button
                                                        onClick={() => toggleMessage(item.id)}
                                                        className="text-blue-500 ml-2"
                                                    >
                                                        {expandedMessages[item.id] ? "Read Less" : "Read More"}
                                                    </button>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                            <button
                                                onClick={openModal}
                                                className="block text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                                type="button"
                                            >
                                                <i className="fa-solid fa-trash text-red-600 cursor-pointer" onClick={() => handleDelete(item.id)}></i>
                                            </button>

                                            {/* Modal */}
                                            {isModalOpen && (
                                                <div
                                                    id="popup-modal"
                                                    tabIndex="-1"
                                                    className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
                                                >
                                                    <div className="relative w-full max-w-md max-h-full">
                                                        <div className="relative bg-white rounded-lg shadow">
                                                            <button
                                                                type="button"
                                                                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                                                onClick={closeModal}
                                                            >
                                                                <svg
                                                                    className="w-3 h-3"
                                                                    aria-hidden="true"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 14 14"
                                                                >
                                                                    <path
                                                                        stroke="currentColor"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                                    />
                                                                </svg>
                                                                <span className="sr-only">Close modal</span>
                                                            </button>
                                                            <div className="p-4 md:p-5 text-center">
                                                                <svg
                                                                    className="mx-auto mb-4 text-gray-400 w-12 h-12"
                                                                    aria-hidden="true"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path
                                                                        stroke="currentColor"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                                    />
                                                                </svg>
                                                                <h3 className="mb-5 text-lg font-normal text-gray-500">
                                                                    Are you sure you want to delete this product?
                                                                </h3>
                                                                <button
                                                                    type="button"
                                                                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                                                                    onClick={() => {
                                                                        handleDelete(item.id);
                                                                        closeModal();
                                                                    }}
                                                                >
                                                                    Yes, I am sure
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100"
                                                                    onClick={closeModal}
                                                                >
                                                                    No, cancel
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSection;
