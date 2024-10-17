import { CardData } from "../dataset/data";

const Card=()=>{
    return (
        <>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 p-2 mt-4">
            {
                CardData.map((el,idx)=>(
                    <div key={idx} class="max-w-sm p-6 bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-110 transition-transform duration-300">
                        <img src={el.image} alt="cards" />
                        <a href="#">
                            <h5 class="mb-2 mt-5 font-thin text-xl tracking-tight text-gray-900 dark:text-white">{el.title}</h5>
                        </a>
                        <p class="mb-3 mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">{el.content}</p>
                        
                    </div>
                ))
            }
        </div>
            
        </>
    )
}
export default Card;