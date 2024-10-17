import { FeaturedCardData } from "../dataset/data";

const FeaturedCards=()=>{
    return (
        <>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
                {
                    FeaturedCardData.map((el,idx)=>(
                        <div key={idx} class=" p-6 bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <span className="text-xl font-bold text-cyan-800">{el.id}:
                                <span class="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">{el.title}</span>
                                </span>
                            </a>
                            <p class="mb-3 mt-4 text-lg font-normal text-gray-700 dark:text-gray-400"> {el.content}</p>
                        </div>
                    ))
                }
            </div>
            

        </>
    )
}
export default FeaturedCards;