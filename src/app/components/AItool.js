import { AIToolData } from "../dataset/data";

const AiTool=()=>{
    return (
        <>
            <div className="container-fluid p-0">
                <div className="flex justify-center items-center text-center mt-6">
                    <div className="w-full sm:w-[600px] lg:w-[800px] mt-6">
                        <div className="mt-5 w-full lg:max-w-[1320px] mx-auto p-4">
                            <h1 className="text-2xl sm:text-3xl font-bold">Why Use Our AI Rewriter Tool?</h1>
                            <p className="text-md sm:text-lg mt-4">
                            You can choose our rewrite AI tool to rewrite your paragraphs for the following reasons.
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
                                    <td className="p-4 border-r">⚡ <span>AI Technology</span></td>
                                    <td className="p-4"><span>Fast and Accurate</span></td>
                                </tr>
                                <tr className="border">
                                    <td className="p-4 border-r">✅ <span>Better Experience</span></td>
                                    <td className="p-4"><span>Simple Interface</span></td>
                                </tr>
                                <tr className="border">
                                    <td className="p-4 border-r">💥 <span>Rewrite Style</span></td>
                                    <td className="p-4"><span>5 Rewriting Modes</span></td>
                                </tr>
                                <tr className="border">
                                    <td className="p-4 border-r">🚀 <span>Improves</span></td>
                                    <td className="p-4"><span>Content Quality</span></td>
                                </tr>
                                <tr className="border">
                                    <td className="p-4 border-r"> 🧾 <span>Results</span></td>
                                    <td className="p-4"><span>100% Unique</span></td>
                                </tr>
                                <tr className="border">
                                    <td className="p-4 border-r">💰 <span>Pricing</span></td>
                                    <td className="p-4"><span>Free with no Signup</span></td>
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