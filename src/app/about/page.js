"use client";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from 'next/image';

const About = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid p-0">
                <div>
                    <div className="flex justify-center items-center text-center mt-6">
                        <div className="w-full sm:w-[600px] lg:w-[800px] mt-10">
                            <div className="mt-5 w-full lg:max-w-[1320px] mx-auto p-4">
                                <h1 className="text-4xl sm:text-3xl font-bold">About US</h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:max-w-[1250px] mx-auto p-3">
                        <p>
                            Welcome to Paragraph Rewriter, your extreme goal for improving and refining all your composed substance. Whether you&apos;re a student, a professional, or basically somebody who enjoys writing, we are here to offer assistance you change your text into clear, concise, and plagiarism-free substance that really shines.
                        </p>
                    </div>
                    <div className="mt-5 w-full lg:max-w-[1250px] mx-auto p-3">
                        <div className="grid grid-cols-1">
                            {/* <div className="p-6">
                                <Image src="https://img.freepik.com/free-vector/office-work-school-education-man-writing-chart-board-woman-designer-drawing-graphic-tablet-teacher-stand-knee-giving-book-little-girl-with-schoolbag_33099-2516.jpg" alt="" className="shrink-0 w-[600px] " />
                            </div> */}
                            <div className="bg-slate-100 mb-5">
                                <div className="p-5">
                                <div className="mt-5">
                                    <h2 className="text-3xl sm:text-2xl font-bold ">Our Mission</h2>
                                    <p className="mt-2">
                                        At Paragraph Rewriter, we recognize that writing can frequently feel overpowering. That&apos;s why we&apos;ve created user-friendly tools like our Sentence Rewriter and Paragraph Generator. These tools are planned to streamline your writing process, making it smoother and more productive.
                                    </p>
                                    <p className="mt-5">
                                        Our arrangements not as it were convey high-quality comes about but moreover guarantee that the quintessence of your unique text is protected. This makes our platform ideal for different writing styles, counting scholastic papers, commerce reports, and imaginative pieces.
                                    </p>
                                </div>
                                {/* our commitment */}
                                <div className="mt-5">
                                    <h2 className="text-3xl sm:text-2xl font-bold ">Our Commitment</h2>
                                    <p className="mt-2">
                                        We take pride in our faithful commitment to shielding your security while conveying consistent client involvement. Your fulfillment is our best need, and we ceaselessly endeavor to improve our administrations based on your valuable feedback. Our devoted group is centered on giving you the best rewriting tools available, allowing you to concentrate on what truly matters—your message.
                                    </p>
                                </div>
                                {/* We&apos;re Here to Help */}
                                <div className="mt-5">
                                    <h2 className="text-3xl sm:text-2xl font-bold ">We&apos;re Here to Help</h2>
                                    <p className="mt-2">
                                       If you have any questions or require help, please don&apos;t hesitate to reach out to us at hi.paragraphrewriter@gmail.com. We are continuously ready to offer assistance you explore any challenges you may experience on your writing journey.
                                    </p>
                                </div>
                                {/* Join our Community */}
                                <div className="mt-5">
                                    <h2 className="text-3xl sm:text-2xl font-bold ">Join Our Community</h2>
                                    <p className="mt-2">
                                        Become one of the countless clients who have experienced the benefits of using Paragraph Rewriter, where upgrading your writing is just a click away. Let us help you in lifting your written content to unused statures, making it not as it were more viable but moreover agreeable to read.
                                    </p>
                                </div>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}
export default About;