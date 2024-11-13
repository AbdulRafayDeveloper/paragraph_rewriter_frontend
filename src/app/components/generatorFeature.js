import GenerateFeatureCards from '../components/generateFeatureCards'

const GeneratorFaature=()=>{
    return (
        <>
            <div className="container-fluid p-0">
                <div className="flex justify-center items-center text-center mt-6">
                    <div className="w-full sm:w-[600px] lg:w-[800px] mt-6">
                        <div className="mt-5 w-full lg:max-w-[1320px] mx-auto p-4">
                            <h1 className="text-2xl sm:text-3xl font-bold">Features of Our Paragraph Rewriter:</h1>
                            <p className="text-md sm:text-lg mt-4">
                                Our AI Rewriter free tool possesses useful features to enhance the results as well as the user experience. The features of our rewrite paragraph tool are below:
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex mt-5 w-full lg:max-w-[1320px] mx-auto p-7">
                    <GenerateFeatureCards/>
                </div>
            </div>
        </>
    )
}
export default GeneratorFaature;