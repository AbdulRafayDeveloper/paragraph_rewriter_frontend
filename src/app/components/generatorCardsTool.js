import { generatorTextparagraph } from "../dataset/data";
import GenerateCardData from "./generateCards";
import GeneratorBenefits from "./generatorBenefits";
const GeneratorCards=()=>{
    return (
        <>
            <div className="container-fluid p-0">
                <div className="flex justify-center items-center text-center">
                    <div className="w-full sm:w-[600px] lg:w-[950px] p-10">
                        <div className="mt-5 w-full lg:max-w-[1320px] ">
                            <div className="mt-8 p-2">
                                <h2 className="text-3xl sm:text-2xl font-bold">How to Use the AI Paragraph Generator?</h2>
                                <p className="text-md sm:text-lg mt-3">Our tool is simple and easy to use. It involves only a few steps. Here is what you need to do:</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* cards section start */}
                <div className="flex mt-2 w-full lg:max-w-[1320px] mx-auto">
                    <GenerateCardData/>
                </div>
                <div className="flex justify-center items-center text-center">
                    <div className="w-full sm:w-[600px] lg:w-[1200px] p-10">
                        <div className="mt-5 w-full lg:max-w-[1320px] ">
                            <div className="mt-8 p-2 border border-gray-300 border-1 bg-slate-100">
                                <div className="p-8">
                                    {
                                        generatorTextparagraph.map((el,idx)=>(
                                            <div key={idx} className="mt-5">
                                                <h2 className="text-3xl sm:text-2xl font-bold">{el.title}</h2>
                                                <p className="text-md sm:text-lg mt-3">{el.content}</p>
                                            </div>
                                        ))
                                    }
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mt-2 w-full lg:max-w-[1320px] mx-auto">
                        <GeneratorBenefits/>
                    </div>
            </div>
            
        </>
    )
}
export default GeneratorCards;