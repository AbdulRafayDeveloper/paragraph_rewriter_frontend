'use client';
import React, { useState } from 'react';
import { FAQsData } from '../dataset/data';

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className="container-fluid p-0">
            <div className="flex justify-center items-center text-center mt-6">
                <div className="w-full sm:w-[600px] lg:w-[800px] mt-6">
                    <div className="mt-5 w-full lg:max-w-[1320px] mx-auto p-4">
                        <h1 className="text-2xl sm:text-3xl font-bold">Features of Our Paragraph Rewriter:</h1>
                        <p className="text-md sm:text-lg mt-4">
                            Our AI Rewriter free tool possesses useful features to enhance the results as well as the user experience. The features of our rewrite paragraph tool are below:
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex mt-5 w-full lg:max-w-[950px] mx-auto p-7">
                <div id="accordion-open" data-accordion="open" className="w-full">
                    {FAQsData.map((item, index) => (
                        <div key={index}>
                            <h2 id={`accordion-open-heading-${index}`}>
                                <button
                                    type="button"
                                    className="flex text-justify justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-slate-100 rounded-t-xl focus:ring-4 focus:ring-slate-200 hover:bg-slate-100 gap-3"
                                    onClick={() => toggleAccordion(index)}
                                    aria-expanded={openIndex === index}
                                    aria-controls={`accordion-open-body-${index}`}
                                >
                                
                                <div className="flex items-center">
                                        <span className="font-bold text-xl text-black">{item.questionNo}</span>
                                        <span className="font-normal ml-3 text-lg text-left"> {item.question}</span>
                                    </div>
                                    <svg
                                        className={`w-3 h-3 shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                    </svg>
                                </button>
                            </h2>
                            <div
                                id={`accordion-open-body-${index}`}
                                className={`p-5 text-lg border border-b-0 border-gray-200 transition-all duration-200 ${openIndex === index ? '' : 'hidden'}`}
                                aria-labelledby={`accordion-open-heading-${index}`}
                            >
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQs;
