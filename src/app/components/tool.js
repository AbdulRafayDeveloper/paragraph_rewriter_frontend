"use client";
import { useState, useEffect } from "react";

const Tool = () => {
  const [activeTab, setActiveTab] = useState("Normal");
  const [inputData, setInputData] = useState(""); // State for input textarea
  const [rewrittenData, setRewrittenData] = useState(""); // State for rewritten textarea
  const [isRewritten, setIsRewritten] = useState(false); // State to control input visibility on mobile
  const [isMobile, setIsMobile] = useState(false); // State to track if the screen is mobile
  const [showRewrittenSection, setShowRewrittenSection] = useState(false); // State to show rewritten textarea section on mobile

  const SampleText =
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...";

  const sampleText = () => {
    setInputData(SampleText);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      const combinedText = inputData + clipboardText;
      if (combinedText.length > 1500) {
        setInputData(combinedText.substring(0, 1500));
      } else {
        setInputData(combinedText);
      }
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setInputData(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  const handleRewrite = async () => {
    if (!inputData) return;
    try {
      const generatedText =
        "This is a generated text for the rewriting tool...";
      setRewrittenData(generatedText);
      
      // Only hide input if it's mobile view and show the rewritten section
      if (isMobile) {
        setIsRewritten(true);
        setShowRewrittenSection(true); // Show the rewritten section in mobile view
      }
    } catch (error) {
      console.error("Error rewriting text:", error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(rewrittenData);
    alert("Rewritten text copied to clipboard!");
  };

  const handleDownload = (fileType) => {
    const blob = new Blob([rewrittenData], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `rewritten-text.${fileType}`;
    link.click();
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0">
      <div className="flex justify-center items-center text-center">
        <div className="w-full sm:w-[600px] lg:w-[800px]">
          <h1 className="text-2xl sm:text-3xl font-bold">Paragraph Rewriter</h1>
          <p className="text-md sm:text-lg mt-4">
          Use our AI Paragraph Rewriter tool to turn any paragraph into a new and unique one without changing the original context.
          </p>
        </div>
      </div>

      <div className="mt-5 p-5 w-full lg:max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-100 text-black rounded-lg p-3">
          <div className="w-full">
            <div className="sm:hidden">
              <label htmlFor="tabs" className="sr-only">Select rewriting style</label>
              <select
                id="tabs"
                value={activeTab}
                onChange={(e) => handleTabClick(e.target.value)}
                className="bg-gray-50 border border-slate-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[290px] p-2.5"
              >
                {["Normal", "Fluent", "Formal", "Innovative", "Coherent", "Academic"].map((tab) => (
                  <option key={tab} value={tab}>{tab}</option>
                ))}
              </select>
            </div>
            <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex ">
              {["Normal", "Fluent", "Formal", "Innovative", "Coherent", "Academic"].map((tab) => (
                <li className="w-full focus-within:z-10" key={tab}>
                  <button
                    className={`inline-block w-full p-4 text-gray-900 bg-slate-100 hover:bg-blue-600 hover:text-white  border-r border-gray-200 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none ${
                      activeTab === tab ? "bg-blue-600 text-black" : "bg-gray-50 hover:bg-gray-500 "
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
          {!isRewritten && (
            <div className="gap-1">
              <div className="relative h-[400px] p-4 w-full bg-slate-100 rounded-lg">
                <textarea
                  className="bg-slate-100 text-xl w-full h-[180px] resize-none border-none p-2"
                  placeholder="Enter paragraph to rewrite..."
                  value={inputData}
                  onChange={(e) => {
                    if (e.target.value.length <= 1500) {
                      setInputData(e.target.value);
                    }
                  }}
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
                    accept=".txt, .doc, .docx, .pdf"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
                <span className="text-sm px-4">{inputData.length} / 1500 characters</span>
                <button
                  className={`border border-gray-600 p-1 rounded-lg text-sm ${
                    inputData.length === 0
                      ? "cursor-not-allowed opacity-50"
                      : "hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={handleRewrite}
                  disabled={inputData.length === 0}
                >
                  Rewrite
                </button>
              </div>
            </div>
          )}
          
          {/* Rewritten Section - Only show when the rewrite button is clicked on mobile */}
          {(!isMobile || showRewrittenSection) && (
            <div className="gap-1 grid-cols-2 bg-slate-100 p-5 rounded-lg">
              <div>
                <textarea
                  className="bg-slate-100 w-full h-[370px] resize-none p-3 border-none text-lg"
                  placeholder="Rewritten text will appear here..."
                  value={rewrittenData}
                  onChange={(e) => setRewrittenData(e.target.value)} // Make it editable
                />
              </div>
              <div className="flex justify-end items-center mt-2 bg-slate-100 rounded-lg">
                <div className="p-1">
                  <button
                    className={`border border-gray-600 p-1 rounded-lg ${
                      rewrittenData.length === 0
                        ? "cursor-not-allowed opacity-50"
                        : "hover:bg-gray-700 hover:text-white"
                    }`}
                    onClick={handleCopy}
                    disabled={rewrittenData.length === 0}
                  >
                    Copy
                  </button>
                </div>
                <div className="p-1">
                  <button
                    className={`border border-gray-600 p-1 rounded-lg ${
                      rewrittenData.length === 0
                        ? "cursor-not-allowed opacity-50"
                        : "hover:bg-gray-700 hover:text-white"
                    }`}
                    onClick={() => handleDownload("txt")}
                    disabled={rewrittenData.length === 0}
                  >
                    Download .txt
                  </button>
                </div>
                <div className="p-1">
                  <button
                    className={`border border-gray-600 p-1 rounded-lg ${
                      rewrittenData.length === 0
                        ? "cursor-not-allowed opacity-50"
                        : "hover:bg-gray-700 hover:text-white"
                    }`}
                    onClick={() => handleDownload("doc")}
                    disabled={rewrittenData.length === 0}
                  >
                    Download .doc
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Tool;
