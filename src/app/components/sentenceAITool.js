import { AIToolData } from "../dataset/data";

const SentenceAiTool=()=>{
    return (
        <>
            <div className="container-fluid p-0">
                <div className="flex justify-center items-center text-center mt-6">
                    <div className="w-full sm:w-[600px] lg:w-[800px] mt-6">
                        <div className="mt-5 w-full lg:max-w-[1320px] mx-auto p-4">
                            <h2 className="text-3xl sm:text-2xl font-bold">Why Use Our AI Sentence Rewriter?</h2>
                            <p className="text-md sm:text-lg mt-4">
                                Here are some of the factors that make our AI-based sentence-rewriting tool a must for everyone.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 w-full lg:max-w-[1320px] mx-auto">
                    <div className="w-full lg:max-w-[820px] mx-auto">
                        
                        {/* tools describe */}
                        <div className="bg-slate-100 p-6">
                            <table className="table-auto border-collapse w-full text-left bg-white">
                                <tbody>
                                    <tr className="border">
                                        <td className="p-4 border-r"><h3 className="text-xl font-bold">Features</h3></td>
                                        <td className="p-4"><h3 className="text-xl font-bold">Discription</h3></td>
                                    </tr>
                                    <tr className="border">
                                        <td className="p-4 border-r">⚡ <span>AI Technology</span></td>
                                        <td className="p-4"><span>Cutting-edge and Advanced Generative AI</span></td>
                                    </tr>
                                    <tr className="border">
                                        <td className="p-4 border-r">💥 <span>File Uploads and Downloads</span></td>
                                        <td className="p-4"><span>Multiple Formats Supported</span></td>
                                    </tr>
                                    <tr className="border">
                                        <td className="p-4 border-r">💥 <span>Multiple Rewriting Modes</span></td>
                                        <td className="p-4"><span>4 Different Modes to Pick From</span></td>
                                    </tr>
                                    <tr className="border">
                                        <td className="p-4 border-r">🚀 <span>Improves and Enhances</span></td>
                                        <td className="p-4"><span>Flow and Quality of Content</span></td>
                                    </tr>
                                    <tr className="border">
                                        <td className="p-4 border-r"> 🧾 <span>Results</span></td>
                                        <td className="p-4"><span>100% Unique</span></td>
                                    </tr>
                                    <tr className="border">
                                        <td className="p-4 border-r">💰 <span>Pricing</span></td>
                                        <td className="p-4"><span>100% Free</span></td>
                                    </tr>
                                    <tr className="border">
                                        <td className="p-4 border-r">🚀 <span>Speed and Accuracy</span></td>
                                        <td className="p-4"><span>Outstanding and On-Point</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default SentenceAiTool;