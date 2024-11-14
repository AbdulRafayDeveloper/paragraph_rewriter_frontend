import { SentenceRewriteText } from "../dataset/data";
import SentenceCards from "./generateCards";

const SentenceRewriteCards=()=>{
    return (
        <>
            <div className="container-fluid p-0">
                <div className="flex justify-center items-center text-center">
                    <div className="w-full sm:w-[600px] lg:w-[950px] p-10">
                        <div className="mt-5 w-full lg:max-w-[1320px] ">
                            <div className="mt-8 p-2">
                                <h1 className="text-2xl sm:text-3xl font-bold">How to Use Regenerate Sentence Tool?</h1>
                                <p className="text-md sm:text-lg mt-3">You can start using our AI Paragraph rewriter by following the below-given simple steps.You can start using our AI Paragraph rewriter by following the below-given simple steps.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* cards section start */}
                <div className="flex mt-2 w-full lg:max-w-[1320px] mx-auto">
                    <SentenceCards/>
                </div>
                <div className="flex justify-center items-center text-center">
                    <div className="w-full sm:w-[600px] lg:w-[1200px] p-10">
                        <div className="mt-5 w-full lg:max-w-[1320px] ">
                            <div className="mt-8 p-2 border border-gray-300 border-1">
                                <div className="p-8">
                                    {
                                        SentenceRewriteText.map((el,idx)=>(
                                            <div key={idx} className="mt-5">
                                                <h1 className="text-2xl sm:text-3xl font-bold">{el.title}</h1>
                                                <p className="text-md sm:text-lg mt-3">{el.content}</p>
                                            </div>
                                        ))
                                    }
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SentenceRewriteCards;