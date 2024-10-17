"use client";
import { useState } from "react";

const Tool = () => {
  const [activeTab, setActiveTab] = useState("Normal");
  const [inputData, setInputData] = useState(""); // State for input textarea
  const [rewrittenData, setRewrittenData] = useState(""); // State for rewritten textarea
  
  const SampleText = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
  const sampleText = () => {
    setInputData(SampleText);
  };
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setInputData(clipboardText);
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  };
  const handleFileChange = (e) => {
    const files = e.target.files;
    console.log(files); // Handle file uploads here
  };
  const handleRewrite = () => {
    console.log("Rewrite button clicked");
    const generatedText = "This is a generated text for the rewriting tool. It serves as a placeholder to show how the tool can transform text based on user input. The aim is to provide a unique output while maintaining the essence of the original input.";
    setRewrittenData(generatedText.length > 1500 ? generatedText.substring(0, 1500) : generatedText);
  };

  return (
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
            <div className="relative h-[400px] p-4 w-full bg-slate-100 rounded-lg">
              <textarea
                className="bg-slate-100 text-xl w-full h-[180px] resize-none border-none p-2"
                placeholder="Enter Paragraph to rewrite..."
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                maxLength={1500}
              />
              <div className="mt-24 p-6 inset-0 flex justify-center items-center">
                {inputData.length === 0 && (
                  <div className="flex gap-2 h-[30px] justify-center items-center">
                    <div
                      className="border rounded-md border-gray-500 p-4 h-[90px] w-[130px] hover:bg-gray-300 cursor-pointer"
                      onClick={handlePaste}
                    >
                      <div className="justify-center items-center text-center">
                        <i className="fa-solid fa-paste text-2xl"></i>
                        <p>Paste Text</p>
                      </div>
                    </div>
                    <div
                      className="border rounded-md border-gray-500 p-4 h-[90px] w-[130px] hover:bg-gray-300 cursor-pointer"
                      onClick={sampleText}
                    >
                      <div className="justify-center items-center text-center">
                        <i className="fa-regular fa-file-lines text-2xl"></i>
                        <p>Sample Text</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 bg-slate-100 rounded-lg p-4">
              <label className="border border-gray-600 p-1 rounded-lg hover:bg-gray-700 hover:text-white flex items-center cursor-pointer">
                <i className="fa-solid fa-upload p-1"></i>
                <span className="ml-2">Upload</span>
                <input
                  id="multiple_files"
                  type="file"
                  accept=".txt, .doc, .docx, .pdf"  // Specify allowed file types
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              <button
                className="border border-gray-600 p-1 rounded-lg hover:bg-gray-700 hover:text-white"
                onClick={handleRewrite}
              >
                <span className="p-2">Rewrite</span>
              </button>
            </div>
          </div>
          <div className="gap-1 bg-slate-100 p-5 rounded-lg hidden sm:block">
          <textarea
            className="bg-slate-100 text-xl w-full h-full resize-none border-none p-2"
            placeholder="Rewritten paragraph will appear here..."
            value={rewrittenData}
            onChange={(e) => setRewrittenData(e.target.value)}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
