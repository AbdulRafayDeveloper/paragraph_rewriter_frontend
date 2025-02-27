import SentenceFeatureCards from '../components/generateFeatureCards'

const SentenceFeatures=()=>{
    return (
        <>
            <div className="container-fluid p-0">
                <div className="flex justify-center items-center text-center mt-6">
                    <div className="w-full sm:w-[600px] lg:w-[800px] mt-6">
                        <div className="mt-5 w-full lg:max-w-[1320px] mx-auto p-4">
                            <h2 className="text-3xl sm:text-2xl font-bold">Impressive Features of Our AI Rewriter for Sentences</h2>
                            <p className="text-md sm:text-lg mt-4">
                                Here are some of the excellent, user-friendly features that you can enjoy with our tool.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex mt-5 w-full lg:max-w-[1320px] mx-auto p-7">
                    <SentenceFeatureCards/>
                </div>
            </div>
        </>
    )
}
export default SentenceFeatures;