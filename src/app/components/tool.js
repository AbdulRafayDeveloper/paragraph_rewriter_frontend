"use client";
import { useState } from "react";

const Tool = () => {
  const [activeTab, setActiveTab] = useState("Normal");
  const [data, setdata] = useState("");
  
  const SampleText = [
    "Lorem ipsum dolor sit amet.",
    "Consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore.",
    "Lorem ipsum dolor sit amet.",
    "Consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore.",
  ];

  const sampleText = () => {
    // Setting the first sample text as an example
    const randomIndex = Math.floor(Math.random() * SampleText.length);

    setdata(SampleText[randomIndex]);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="flex justify-center items-center text-center">
          <div className="w-full sm:w-[600px] lg:w-[800px]">
            <h1 className="text-2xl sm:text-3xl font-bold">Paragraph Rewriter</h1>
            <p className="text-md sm:text-lg">
              Use our AI Paragraph Rewriter tool to turn any paragraph into a new and unique one without changing the original context.
            </p>
          </div>
        </div>
        <div className="mt-5 p-5 w-full lg:max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-100 rounded-lg p-3">
            <div className="w-full">
              <div className="md:hidden mb-4">
                <label htmlFor="tabs" className="sr-only">Select your option</label>
                <select
                  id="tabs"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={(e) => handleTabClick(e.target.value)}
                  value={activeTab}
                >
                  {["Normal", "Fluent", "Formal", "Innovative", "Coherent", "Academic"].map(tab => (
                    <option key={tab} value={tab}>{tab}</option>
                  ))}
                </select>
              </div>
              <ul className="hidden md:flex space-x-3 text-sm font-medium text-center text-gray-500">
                {["Normal", "Fluent", "Formal", "Innovative", "Coherent", "Academic"].map((tab) => (
                  <li className="w-full" key={tab}>
                    <button
                      className={`text-lg inline-block w-full py-2 rounded-lg focus:ring-4 focus:ring-blue-300 ${
                        activeTab === tab
                          ? "bg-blue-400 text-white"
                          : "bg-gray-100 hover:bg-blue-400 text-gray-900"
                      }`}
                      onClick={() => handleTabClick(tab)}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
            <div className="gap-1">
              <div className="relative h-[400px] p-4 w-full  bg-slate-100  rounded-lg">
                <input
                  type="text"
                  className="bg-slate-100 text-xl w-full"
                  placeholder="Enter Paragraph to rewrite..."
                  value={data}
                  onChange={(e) => setdata(e.target.value)}
                />
                <div className="mt-24 p-6 inset-0 flex justify-center items-center">
                  <div className="flex gap-2 h-[90px] mt-10 justify-center items-center">
                  <div
                      className="border rounded-md border-gray-500 p-4 h-[90px] w-[130px] hover:bg-gray-300"
                      onClick={sampleText}
                    >
                    
                    <div className="justify-center items-center text-center">
                    <i class="fa-solid fa-paste text-2xl"></i>
                      <p>Paste Text</p>
                    </div>
                    </div>
                    <div
                      className="border rounded-md border-gray-500 p-4 h-[90px] w-[130px] hover:bg-gray-300"
                      onClick={sampleText}
                    >
                    <div className="justify-center items-center text-center">
                      <i class="fa-regular fa-file-lines text-2xl"></i>
                      <p>Sample Text</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2 bg-slate-100 rounded-lg p-4">
                <div className="">
                  <button className="border border-gray-600 p-1 rounded-lg hover:bg-gray-700 hover:text-white flex items-center">
                    <i className="fa-solid fa-upload p-1"></i>
                    <span className="ml-2">Upload</span>
                  </button>
                </div>
                <div>
                  <button className="border border-gray-600 p-1 rounded-lg hover:bg-gray-700 hover:text-white">
                   <span className="p-2"> Rewrite</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="gap-1 bg-slate-100 p-5 rounded-lg">

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tool;
