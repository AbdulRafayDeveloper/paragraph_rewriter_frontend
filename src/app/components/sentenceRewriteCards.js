// import { SentenceRewriteText } from "../dataset/data";
import SentenceCards from "./sentenceCards";

const SentenceRewriteCards=()=>{
    return (
        <>
            <div className="container-fluid p-0">
                <div className="flex justify-center items-center text-center">
                    <div className="w-full sm:w-[600px] lg:w-[950px] p-10">
                        <div className="mt-5 w-full lg:max-w-[1320px] ">
                            <div className="mt-8 p-2">
                                <h2 className="text-3xl sm:text-2xl font-bold">How to Use the Sentence Rewriter Tool?</h2>
                                <p className="text-md sm:text-lg mt-3">The steps required to use our tool are quite simple and straightforward. Here is how you can use our tool to rewrite your sentences:</p>
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
                            <div className="mt-8 p-2 border border-gray-300 border-1 bg-slate-100">
                                <div className="p-8">
                                    <div className="mt-5">
                                        <h2 className="text-3xl sm:text-2xl font-bold">What Exactly is the Sentence Rewriter?</h2>
                                        <p className="text-md sm:text-lg mt-3">
                                            The sentence rewriter is an online tool that allows you to change the wording and phrasing of any sentence to make it look different from its original version. The purpose of the sentence rewriter is to make the sentence look different but have the same meaning as before.
                                            There are many different uses and purposes for our sentence rewriter. For example, you can use it to:
                                        </p>
                                        <ul role="list">
                                            <li className="text-md sm:text-lg mt-3">Reword a piece of content to remove plagiarism from it.</li>
                                            <li className="text-md sm:text-lg mt-3">Improve a piece of text by replacing words and phrases with other suitable alternatives.</li>
                                        </ul>
                                    </div>
                                    {/*  */}
                                    <div className="mt-5">
                                        <h2 className="text-3xl sm:text-2xl font-bold">How Does Our Sentence Rewriter Work?</h2>
                                        <p className="text-md sm:text-lg mt-3">
                                            Our sentence rewriter utilizes generative AI models to analyze the provided content and then make suitable changes to it. Since the tool is based on AI, it does not make clunky changes, nor does it alter the context of the text.
                                            There are various changes that our tool makes to the provided content, including:
                                        </p>
                                        <ul role="list">
                                            <li className="text-md sm:text-lg mt-3"><strong>Synonymizing</strong>  which means changing the existing words with suitable synonyms. Our tool finds the words/phrases in the content that are safe to change before making the replacements.</li>
                                            <li className="text-md sm:text-lg mt-3"><strong>Changing the sentence structure and sequence</strong> Our tool shuffles the parts of the sentences to make them look even more different from their original versions.</li>
                                            <li className="text-md sm:text-lg mt-3"><strong>Size reduction</strong> which only takes place if you select the “Shorten” mode. In this mode, the text is reduced in size as compared to its original form.</li>
                                        </ul>
                                    </div>
                                    {/* {
                                        SentenceRewriteText.map((el,idx)=>(
                                            <div key={idx} className="mt-5">
                                                <h2 className="text-3xl sm:text-2xl font-bold">{el.title}</h2>
                                                <p className="text-md sm:text-lg mt-3">{el.content}</p>
                                            </div>
                                        ))
                                    } */}
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