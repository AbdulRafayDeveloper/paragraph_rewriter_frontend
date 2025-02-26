import React from 'react'
import { benefitData } from '../dataset/data';
const GeneratorBenefits = () => {
  return (
    <div className="container-fluid p-0">
        <div className="flex justify-center items-center text-center mt-6">
            <div className="w-full sm:w-[600px] lg:w-[800px] mt-6">
                <div className="mt-5 w-full lg:max-w-[1320px] mx-auto p-4">
                    <h2 className="text-3xl sm:text-2xl font-bold">What Are the Benefits of Using a Paragraph Generator?</h2>
                    <p className="text-md sm:text-lg mt-4">
                        There are numerous benefits and uses of a paragraph generator. For example, you could:
                    </p>
                </div>
            </div>
        </div>
        <div className="flex mt-5 w-full lg:max-w-[1320px] mx-auto p-7">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
                {
                    benefitData.map((el,idx)=>(
                        <div key={idx} className=" p-6 bg-slate-100 border border-gray-200 rounded-lg shadow ">
                            <a>
                                <span className="mb-2 text-xl tracking-tight text-gray-900 font-bold">{el.title}</span>
                            </a>
                            <p className="mb-3 mt-4 text-lg font-normal text-black"> {el.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default GeneratorBenefits;