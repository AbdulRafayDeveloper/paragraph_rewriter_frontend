"use client"
import { useState } from 'react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className="flex h-screen">
                <div className="hidden lg:flex items-center justify-center flex-1 bg-white">
                    <div className="max-w-lg mx-auto text-center relative">
                        <img 
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaTTja7c4Aq8WdH1K3VCqBin4sGV8wIfoPeA&s' 
                            alt="Login" 
                            className="w-full h-[400px] object-cover opacity-60" 
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-5xl font-bold text-gray-600">Paragraph Rewriter</p>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
                    <div className="max-w-md w-full p-6">
                        <h1 className="text-6xl font-semibold mb-6 text-slate-700 text-center">Sign In</h1>
                        <h1 className="text-sm mb-6 text-gray-500 text-center">Admin have access to control the system</h1>
                        
                        <form action="/auth/login" method="POST" className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-md font-bold text-gray-700">Email</label>
                                <input type="text" id="email" name="email" required className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"/>
                            </div>
                            <div className="relative">
                                <label htmlFor="password" className="block text-md font-bold text-gray-700">Password</label>
                                <input 
                                    type={showPassword ? 'text' : 'password'} 
                                    id="password" 
                                    name="password" 
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
