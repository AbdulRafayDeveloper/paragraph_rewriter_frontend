import { GenerateFeaturedCardData } from "../dataset/data";

const GenerateFeatureCards=()=>{
    return (
        <>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
                {
                    GenerateFeaturedCardData.map((el,idx)=>(
                        <div key={idx} className=" p-6 bg-slate-100 border border-gray-200 rounded-lg shadow ">
                            <a href="#">
                                <span className="text-xl font-bold " style={el.style}>{el.id}:
                                <span className="mb-2 text-xl tracking-tight text-gray-900">{el.title}</span>
                                </span>
                            </a>
                            <p className="mb-3 mt-4 text-lg font-normal text-gray-700"> {el.content}</p>
                        </div>
                    ))
                }
            </div>
            

        </>
    )
}
export default GenerateFeatureCards;