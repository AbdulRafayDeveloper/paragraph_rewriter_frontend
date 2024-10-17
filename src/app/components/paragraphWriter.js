import { Textparagraph } from "../dataset/data";
import Card from "./card";

const WriterText=()=>{
    return (
        <>
            <div className="container-fluid p-0">
                <div className="flex justify-center items-center text-center">
                    <div className="w-full sm:w-[600px] lg:w-[950px] p-10">
                        <div className="mt-5 w-full lg:max-w-[1320px] ">
                            {
                                Textparagraph.map((el,idx)=>(
                                    <div key={idx} className="mt-8 p-6">
                                        <h1 className="text-2xl sm:text-3xl font-bold">{el.title}</h1>
                                        <p className="text-md sm:text-lg mt-3">{el.content}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* cards section start */}
                <div className="flex mt-5 w-full lg:max-w-[1320px] mx-auto">
                    <Card/>
                </div>
            </div>
        </>
    )
}
export default WriterText;