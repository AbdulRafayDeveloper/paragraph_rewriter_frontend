import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Terms=()=>{
    return (
        <>
            <Navbar/>
            <div className="container-fluid p-0">
                <div className="flex justify-center items-center text-center mt-6">
                    <div className="w-full sm:w-[600px] lg:w-[800px] mt-6">
                        <div className="mt-5 w-full lg:max-w-[1320px] mx-auto p-4">
                            <h1 className="text-4xl font-bold mt-7">Terms & Conditions</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full lg:max-w-[1200px] mx-auto p-7 mb-20">
                    <div className="">
                        <h1 className="text-3xl font-bold">Introduction</h1>
                        <p className="text-md mt-3 text-justify">Welcome to [Tool Name], a service designed to help you rephrase, enhance, and refine your written content. By accessing or using our tool, you agree to comply with these Terms and Conditions, which govern your use of our website and services. Our goal is to provide a user-friendly and ethically sound platform that supports individuals in crafting original, well-articulated text for educational, personal, and professional purposes. These terms outline acceptable usage, your responsibilities as a user, and important information regarding data privacy and intellectual property rights. We encourage you to review this document carefully to ensure a positive experience and full understanding of our policies.</p>
                    </div>
                    <div className="mt-5">
                        <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-6">
                            <div className="bg-white shadow-md p-4">
                                <h1 className="text-3xl font-bold ">Usage Policy</h1>
                                <p className="text-md mt-3 text-justify">In the Usage Policy, the terms define acceptable uses, such as paraphrasing for educational or research purposes, avoiding plagiarism, or enhancing personal writing. Prohibited uses are also clearly outlined, including using the tool to create spam content, generating text that violates copyright, or engaging in any illegal activity, such as creating defamatory or harmful content. This structure ensures users understand the ethical boundaries.</p>
                            </div>
                            <div className="bg-white shadow-md p-4">
                                <h1 className="text-3xl font-bold">Usage Responsibility</h1>
                                <p className="text-md mt-3 text-justify">User Responsibilities include using the rewritten content responsibly and ethically, such as crediting sources if paraphrasing others’ ideas. Additionally, users are reminded of their duty to comply with local laws, especially regarding intellectual property and plagiarism, and understand they assume liability for using and distributing tool-generated content. This protects the company from liability in case of misuse.</p>
                            </div>
                            <div className="bg-white shadow-md p-4">
                                <h1 className="text-3xl font-bold">Palagarism</h1>
                                <p className="text-md mt-3 text-justify">The Plagiarism Policy emphasizes that the tool is intended to support original content creation and should not be used to circumvent plagiarism. Students, for instance, are encouraged to follow institutional guidelines on originality and citation. Misusing the tool for plagiarism may result in account suspension or other corrective actions, depending on the severity of misuse.</p>
                            </div>
                            <div className="bg-white shadow-md p-4">
                                
                                <h1 className="text-3xl font-bold">Accounts and Terms</h1>
                                <p className="text-md mt-3 text-justify">Account Terms, if applicable, include details on account creation and necessary user information. An overview of how account data is protected is also provided, especially if login or payment information is required. Users are reminded that the company reserves the right to terminate accounts if users violate the Terms and Conditions.</p>
                            </div>
                            <div className="bg-white shadow-md p-4">
                                <h1 className="text-3xl font-bold">Intellectual Property Rights</h1>
                                <p className="text-md mt-3 text-justify">Intellectual Property Rights cover both user and company rights. Users retain ownership of their original text, while the company retains rights to the tool and its underlying algorithms. Although users are granted use rights, they do not own the tool and cannot reverse-engineer or resell the output. The company also asserts that any branding, logo, and software are protected under copyright laws.</p>
                            </div>
                            <div className="bg-white shadow-md p-4">
                                <h1 className="text-3xl font-bold">Privacy and Data Collection</h1>
                                <p className="text-md mt-3 text-justify">In the Privacy and Data Collection section, the tool provider summarizes what user data is collected, such as usage data or account information, and why. It outlines options for users to control their data, such as opting out of data collection or deleting their account, and includes a link to the Privacy Policy for full details on how personal information is protected.</p>
                            </div>
                            <div className="bg-white shadow-md p-4">
                                <h1 className="text-3xl font-bold">Liability Limitation</h1>
                                <p className="text-md mt-3 text-justify">The Liability Limitation informs users that the tool is provided “as-is,” with no guarantees on performance, reliability, or fitness for a specific purpose. The company liability for damages or losses due to using the tool is limited, especially as content generation quality may vary.</p>
                            </div>
                            <div className="bg-white shadow-md p-4">
                                <h1 className="text-3xl font-bold">Indemnity Clause</h1>
                                <p className="text-md mt-3 text-justify">An Indemnity Clause specifies that users agree to hold the company harmless from any claims or damages arising from improper or unlawful use of the tool. This protects the service provider against potential legal repercussions.</p>
                            </div>
                            <div className="bg-white shadow-md p-4">
                                <h1 className="text-3xl font-bold">Governing Law and Dispute Resolution</h1>
                                <p className="text-md mt-3 text-justify">Governing Law and Dispute Resolution clarify which country or state’s laws govern the terms and outline processes for resolving disputes, such as arbitration instead of court proceedings. This helps both the company and the user understand the legal framework for resolving any disagreements.</p>
                            </div>
                            <div className="bg-white shadow-md p-4">
                                <h1 className="text-3xl font-bold">Changes to Terms</h1>
                                <p className="text-md mt-3 text-justify">Changes to Terms provide transparency, notifying users that the company may update the T&Cs and that continued use of the tool signifies agreement to any updates. A “Last Update” date is listed to help users stay informed on any modifications. Lastly, the Contact Information section includes company contact details, such as an email address, allowing users to ask questions or raise concerns regarding the T&Cs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
export default Terms;