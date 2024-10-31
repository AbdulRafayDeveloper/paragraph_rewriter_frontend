"use client";
import styled from "@emotion/styled";
import { Style } from "@mui/icons-material";
import { useState } from "react";

const RightSide = () => {
    const [showData, setShowData] = useState(false);
    const [count, setCount] = useState(0);

    const handleChange = () => {
        setShowData(!showData);
    };

    const incrementCount = () => setCount(count + 1);

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
                
                <div className="mt-10 rounded-xl p-4">
                    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            { label: "Total Revenue", icon: "fa-user" ,style: {color: 'blue'}},
                            { label: "New Account", icon: "fa-bank", style: {color: 'green'}},
                            { label: "Income", icon: "fa-box" },
                            { label: "Spending", icon: "fa-comment-dollar", style: {color: 'orange'} },
                            { label: "Totals", icon: "fa-money-bill" , style: {color: '#7A1CAC'}},
                            { label: "Targets", icon: "fa-bullseye" , style: {color: '#740938'}}
                        ].map((item, index) => (
                            <div key={index} className="p-6 bg-slate-100 border w-full max-w-[350px] md:max-w-full lg:max-w-[400px] border-gray-200 rounded-lg shadow-lg">
                                <div className="flex justify-between" onClick={incrementCount}>
                                    <div>
                                        <h5 className="mb-2 text-xl md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{count}</h5>
                                        <p className="mb-3 text-sm md:text-base font-normal text-gray-500 dark:text-gray-400">{item.label}</p>
                                    </div>
                                    <div className="p-4">
                                        <i className={`fa-solid ${item.icon} text-3xl`} style={item.style}></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSide;
