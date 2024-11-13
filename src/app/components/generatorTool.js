'use client';
import React, { useState } from 'react';
import Link from 'next/link';
const GeneratorTool = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [lengthMenuOpen, setLengthMenuOpen] = useState(false);
    const [selectedTone, setSelectedTone] = useState("Formal");
    const [selectedLength, setSelectedLength] = useState("Default");
    // State to control the visibility of the hidden section
    const [showSection, setShowSection] = useState(false);

    // random paragraph set
    const paragraph="allow companies based in the US, EU, UK and Japan to transfer funds to Payoneer users via local banking networks. Common reasons for a payment not arriving or not being credited. allow companies based in the US, EU, UK and Japan to transfer funds to Payoneer users via local banking networks. Common reasons for a payment not arriving or not being credited...";
    // Character count (including spaces)
    const characterCount = paragraph.length;

    // Word count (splitting by spaces and filtering out any empty strings)
    const wordCount = paragraph.split(/\s+/).filter(word => word.length > 0).length;

    // Sentence count (splitting by sentence-ending punctuation and filtering out any empty strings)
    const sentenceCount = paragraph.split(/[.!?]/).filter(sentence => sentence.trim().length > 0).length;

    const MenuOpenHandle = () => {
        setMenuOpen((prev) => !prev);
    };

    const LengthMenuOpenHandle = () => {
        setLengthMenuOpen((prev) => !prev);
    };

    const handleToneSelect = (tone) => {
        setSelectedTone(tone);
        setMenuOpen(false);
    };

    const handleLengthSelect = (length) => {
        setSelectedLength(length);
        setLengthMenuOpen(false);
    };

    // Function to toggle the visibility of the section
    const contentHandle = () => {
        setShowSection(!showSection);
    };

    return (
        <div className="container-fluid p-4 sm:p-6 md:p-8 lg:p-10 mt-10">
            <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-full max-w-[600px] md:max-w-[800px]">
                    <h1 className="text-xl md:text-3xl font-bold">Paragraph Rewriter</h1>
                    <p className="text-sm md:text-lg mt-2 md:mt-4">
                        Use our AI Paragraph Rewriter tool to turn any paragraph into a new and unique one without changing the original context.
                    </p>
                </div>
            </div>
            {/* tool section */}
            <div className="mt-5 p-4 w-full lg:max-w-[1170px] mx-auto">
                <div className="p-4 bg-slate-100 rounded-lg shadow-md">
                    <div className="w-full p-4">
                        <textarea
                            className="w-full border-none outline-none bg-slate-100 text-lg resize-none"
                            placeholder="Enter your paragraph topic here..."
                        ></textarea>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:max-w-[990px] gap-4 justify-center items-center">
                        <div className="space-y-4">
                            <div className='grid grid-cols-2 gap-2 p-1'>
                            <div>
                                <p className='text-sm'>Paragraph Tone</p>
                                <div className="relative flex items-center">
                                    <button
                                        className="inline-flex items-center px-3 py-3 w-full max-w-[200px] text-sm font-normal text-gray-900 bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-100"
                                        onClick={MenuOpenHandle}
                                        aria-expanded={menuOpen}
                                    >
                                        {selectedTone}
                                        <svg className="w-2.5 h-2.5 ml-3 md:ml-16 lg:ml-16 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    <div className={`absolute top-full left-0 w-full max-w-[200px] ${menuOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow`}>
                                        <ul className="py-2 text-sm text-gray-700">
                                            {["Formal", "Informal", "Professional", "Diplomatic", "Academic", "Simplified", "Persuasive"].map((tone) => (
                                                <li key={tone}>
                                                    <button
                                                        onClick={() => handleToneSelect(tone)}
                                                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                                    >
                                                        {tone}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='text-sm'>Paragraph Length</p>
                                <div className="relative flex items-center">
                                    <button
                                        className="inline-flex items-center px-3 py-3 w-full max-w-[200px] text-sm font-normal text-gray-900 bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-100"
                                        onClick={LengthMenuOpenHandle}
                                        aria-expanded={lengthMenuOpen}
                                    >
                                        {selectedLength}
                                        <svg className="w-2.5 h-2.5 ml-3 md:ml-16 lg:ml-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    <div className={`absolute top-full left-0 w-full max-w-[200px] ${lengthMenuOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow`}>
                                        <ul className="py-2 text-sm text-gray-700">
                                            {["Default", "Concise", "Detailed"].map((length) => (
                                                <li key={length}>
                                                    <button
                                                        onClick={() => handleLengthSelect(length)}
                                                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                                    >
                                                        {length}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <p className='text-sm'>Number of Paragraphs</p>
                            <ul className="flex flex-wrap bg-white p-1 space-x-2 rounded-lg text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                                {["Paragraph 1", "Paragraphs 2", "Paragraphs 3"].map((item) => (
                                    <li key={item} className="flex-1">
                                        <Link href="#" className="inline-block p-2 w-full text-center rounded-t-lg hover:bg-slate-100 active">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* generate section */}
            <div>
            {/* Generate Button Section */}
            <div className='mt-5 p-4 text-center justify-center'>
                <button className='bg-gray-600 p-3 text-white rounded-md' onClick={contentHandle}>
                    Generate Again
                </button>
            </div>

            {/* Conditional Rendering of the Section */}
            {showSection && (
                <div className='container mt-5 p-4 w-full lg:max-w-[1150px] mx-auto bg-slate-100'>
                    <div className='flex flex-col sm:flex-row sm:justify-between items-center'>
                        <div className='flex-1'>
                            <p className='text-lg font-bold'>Result</p>
                        </div>
                        <div className='flex-1 mt-2 sm:mt-0 text-center sm:text-left'>
                            <p>Characters {characterCount} | Words {wordCount} | Sentences {sentenceCount}</p>
                        </div>
                        <div className='flex-1 flex justify-center sm:justify-end gap-5 mt-2 sm:mt-0'>
                            <i className="fa-solid fa-trash text-xl"></i>
                            <i className="fa-solid fa-download text-xl"></i>
                            <i className="fa-solid fa-copy text-xl"></i>
                        </div>
                    </div>
                    
                    <div className='mt-5'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between items-center'>
                                <p className='text-lg font-bold'>Paragraph 1</p>
                                <div className='flex gap-4'>
                                    <i className="fa-solid fa-download text-xl"></i>
                                    <i className="fa-solid fa-copy text-xl"></i>
                                </div>
                            </div>
                            
                            <div className='text-justify leading-relaxed mt-2 text-sm sm:text-base'>
                                {paragraph}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </div>

        
    );
}

export default GeneratorTool;
