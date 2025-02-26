import { AIToolData } from "../dataset/data";

const GeneratorAiTool=()=>{
    return (
        <>
            <div className="container-fluid p-0">
                <div className="flex justify-center items-center text-center mt-6">
                    <div className="w-full sm:w-[600px] lg:w-[800px] mt-6">
                        <div className="mt-5 w-full lg:max-w-[1320px] mx-auto p-4">
                            <h1 className="text-2xl sm:text-3xl font-bold">Why Use Our Paragraph Generator?</h1>
                            <p className="text-md sm:text-lg mt-4">
                                Here are some of the main reasons why you should generate paragraphs using our tool.
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
                                        <td className="p-4"><span>Quick and accurate functionality</span></td>
                                    </tr>
                                    <tr className="border">
                                        <td className="p-4 border-r">✅ <span>Clean and Simple UI</span></td>
                                        <td className="p-4"><span>Easy to use and navigate</span></td>
                                    </tr>
                                    <tr className="border">
                                        <td className="p-4 border-r">💥 <span>Different paragraph tones</span></td>
                                        <td className="p-4"><span>7 different tones</span></td>
                                    </tr>
                                    <tr className="border">
                                        <td className="p-4 border-r">💥 <span>Paragraph lengths</span></td>
                                        <td className="p-4"><span>3 different tones</span></td>
                                    </tr>
                                    <tr className="border">
                                        <td className="p-4 border-r"> 🧾 <span>Outputs</span></td>
                                        <td className="p-4"><span>Unique and plagiarism-free</span></td>
                                    </tr>
                                    <tr className="border">
                                        <td className="p-4 border-r">💰 <span>Pricing</span></td>
                                        <td className="p-4"><span>Completely free</span></td>
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
export default GeneratorAiTool;