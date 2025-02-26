import { AIToolData } from "../dataset/data";

const AiTool=()=>{
    return (
        <>
            <div className="container-fluid p-0">
                <div className="flex justify-center items-center text-center mt-6">
                    <div className="w-full sm:w-[600px] lg:w-[800px] mt-6">
                        <div className="mt-5 w-full lg:max-w-[1320px] mx-auto p-4">
                            <h2 className="text-3xl sm:text-2xl font-bold">Why Use Our AI Rewriter Tool</h2>
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
                                    <td className="p-4"><span>Fast, Accurate, and Reliable</span></td>
                                </tr>
                                <tr className="border">
                                    <td className="p-4 border-r">✅ <span>Better Experience</span></td>
                                    <td className="p-4"><span>Easy to Use and User-Friendly</span></td>
                                </tr>
                                <tr className="border">
                                    <td className="p-4 border-r">💥 <span>Rewriting Styles</span></td>
                                    <td className="p-4"><span>6 Different Rewriting Modes</span></td>
                                </tr>
                                <tr className="border">
                                    <td className="p-4 border-r">🚀 <span>Enhances</span></td>
                                    <td className="p-4"><span>Content Flow and Quality</span></td>
                                </tr>
                                <tr className="border">
                                    <td className="p-4 border-r"> 🧾 <span>Results</span></td>
                                    <td className="p-4"><span>100% Unique and Plagarism-Free</span></td>
                                </tr>
                                <tr className="border">
                                    <td className="p-4 border-r">💰 <span>Pricing</span></td>
                                    <td className="p-4"><span>Free with no Registration</span></td>
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
export default AiTool;