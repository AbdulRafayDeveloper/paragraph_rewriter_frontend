import { GenerateCardData } from "../dataset/data";

const GenerateCards=()=>{
    return (
        <>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 p-4 mt-4">
            {
                GenerateCardData.map((el,idx)=>(
                    <div key={idx} className="max-w-sm p-6 bg-slate-100 border border-gray-200 rounded-lg shadow  hover:scale-110 transition-transform duration-300">
                        <img src={el.image} alt="cards" className="w-[50px] h-[50px]" />
                        <a href="#">
                            <h5 className="mb-2 mt-5 font-thin text-xl tracking-tight text-gray-900">{el.title}</h5>
                        </a>
                        <p className="mb-3 mt-2 text-lg font-normal text-gray-500">{el.content}</p>
                        
                    </div>
                ))
            }
        </div>
            
        </>
    )
}
export default GenerateCards;