"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from "axios";

const Login = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [data, setdata] = useState({
        email: "",
        pass: "",
    });
    const [error, setError] = useState(""); // Error state

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation check
        if (!data.email || !data.pass) {
            setError("Please fill out valid credentials.");
            return; // Stop the submission if validation fails
        } else if (!/\S+@\S+\.\S+/.test(data.email)) { // Check if email contains @
            setError("Please enter a valid email address.");
            return; // Stop the submission if validation fails
        } else {
            setError(""); // Clear the error message if validation passes
        }

        console.log("data.email: ", data.email);
        console.log("data.pass: ", data.pass);

        const formData = new FormData();
        formData.append('email', data.email);
        formData.append('password', data.pass);

        // Uncomment this line when ready to make the API call
        // const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/login`, formData);

        // if (response) {
        //     console.log("Data: ", response);
        //     console.log("Data: ", response.data);
        //     console.log("Data: ", response.data.token);
        //     router.push("../../");
        // }
    };

    const inputEvent = (e) => {
        const { name, value } = e.target;
        setdata((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className="flex h-screen mt-7">
                <div className="hidden lg:flex items-center justify-center flex-1 bg-white">
                    <div className="max-w-lg mx-auto text-center relative">
                        <img
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaTTja7c4Aq8WdH1K3VCqBin4sGV8wIfoPeA&s'
                            alt="Login"
                            className="w-full h-[300px] object-cover opacity-60"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-5xl font-bold text-gray-600">Paragraph Rewriter</p>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-[#B7B7B7] lg:w-1/2 flex items-center justify-center mt-24 mr-10">
                    <div className="max-w-md w-full p-6">
                        <h1 className="text-4xl font-semibold mb-6 text-slate-700 text-center">Sign In</h1>
                        <h1 className="text-md mb-6 text-gray-500 text-center text-black">Admin have access to control the system</h1>

                        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Error message display */}

                        <form action="/auth/login" method="POST" className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block text-md font-bold text-gray-700">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    autoComplete='off'
                                    required
                                    onChange={inputEvent}
                                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                            </div>
                            <div className="relative">
                                <label htmlFor="password" className="block text-md font-bold text-gray-700">Password</label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="pass"
                                    autoComplete='off'
                                    required
                                    onChange={inputEvent}
                                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
                                >
                                    <i className={`fa-solid mt-8 ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`} ></i>
                                </button>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-slate-800 text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Sign In</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
