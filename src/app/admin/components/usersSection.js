"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Image from 'next/image';
import Cookies from "js-cookie";

const UserSection = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [showData, setShowData] = useState(false);
    const [delData, setDelData] = useState([]); // Stores users fetched from API
    const [expandedMessages, setExpandedMessages] = useState({});
    const [loading, setLoading] = useState(false); // Loading state for the fetch operation
    const [state, setState] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setModalOpen(false);
    };

    // Function to handle toggling user menu visibility
    const handleChange = () => {
        setShowData(!showData);
    };

    // Toggle full/short message
    const toggleMessage = (id) => {
        setExpandedMessages((prevExpandedMessages) => ({
            ...prevExpandedMessages,
            [id]: !prevExpandedMessages[id],
        }));
    };

    // Fetch users data from API on component mount
    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true);
            try {
                // Retrieve token from cookies
                const token = Cookies.get('token'); // Get token from cookie

                // Check if token exists before making API request
                if (token) {
                    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/contactus`, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    });

                    const data = response.data;
                    
                    if (response.status === 200) {
                        setDelData(data.data.records);
                    } else {
                        Swal.fire({
                            title: 'Error!',
                            text: data.message || 'An error occurred.',
                            icon: 'error',
                            confirmButtonText: 'OK',
                        });
                    }
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Token not found. Please log in again.',
                        icon: 'error',
                        confirmButtonText: 'OK',
                    });
                }
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to fetch data. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [state]);

    // Handle delete action
    const handleDelete = async (id) => {
        const confirmation = await Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this record!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        });

        if (confirmation.isConfirmed) {
            try {
                const token = Cookies.get('token');
                const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/user/contactus/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                const data = await response.data;

                if (response.status === 200) {
                    setState(!state);
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'The contact has been deleted.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    });
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: data.message || 'Failed to delete the contact.',
                        icon: 'error',
                        confirmButtonText: 'OK',
                    });
                }
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to delete. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        }
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
                                <Image className="w-8 h-8 rounded-full" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." alt="User avatar" />
                            </button>
                            {showData && (
                                <div className="absolute w-[100px] right-0 mt-2 p-3 bg-white border border-gray-400 rounded-lg shadow-lg">
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
                                        <input
                                            type="text"
                                            id="simple-search"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                                            placeholder="Search branch name..."
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="p-2.5 w-[100px] ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                                    >
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
                                        <th scope="col" className="px-6 py-3 text-lg">Name</th>
                                        <th scope="col" className="px-6 py-3 text-lg">Email</th>
                                        <th scope="col" className="px-6 py-3 text-lg">Message</th>
                                        <th scope="col" className="px-6 py-3 text-lg">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {delData.map((item, index) => (
                                        <tr key={item._id} className="bg-white text-center border-b">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                {index + 1}
                                            </th>
                                            <td className="px-6 py-4">{item.name}</td>
                                            <td className="px-6 py-4">{item.email}</td>
                                            <td className="px-6 py-4">
                                                {expandedMessages[item._id] || (item.message && item.message.length <= 120)
                                                    ? item.message
                                                    : `${item.message && item.message.slice(0, 120)}...`}
                                                {item.message && item.message.length > 120 && (
                                                    <button
                                                        onClick={() => toggleMessage(item._id)}
                                                        className="text-blue-500 ml-2"
                                                    >
                                                        {expandedMessages[item._id] ? "Read Less" : "Read More"}
                                                    </button>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                <button
                                                    onClick={openModal}
                                                    className="block text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                                    type="button"
                                                >
                                                    <i className="fa-solid fa-trash text-red-600 cursor-pointer" onClick={() => handleDelete(item._id)}></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {loading && (
                                <div className="w-full h-16 flex justify-center items-center mt-4">
                                    <div className="spinner-border text-blue-500"></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSection;
