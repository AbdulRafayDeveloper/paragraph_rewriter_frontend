import Link from "next/link";
import Image from "next/image";
import Logo from '../assets/logo/logo.jpg';
import ScrollToTop from "./scrollTop";
const Footer = () => {
  return (
    <>
      <div className="container-fluid mt-5 p-0 bg-slate-100">
        <div className="w-full lg:max-w-[1320px] mx-auto p-2">
          <div className="flex flex-col lg:flex-row gap-10 justify-center mx-auto lg:max-w-[1270px] p-3">
            <div className="w-full lg:w-[900px]">
              <a
                href="#"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <Image src={Logo} className="rounded-[50px] w-[40px] h-[40px]"
                  alt="Logo" />
                <div>
                  <p className="self-center text-lg font-semibold whitespace-nowrap">
                    PARAGRAPH
                  </p>
                  <span className="self-center text-sm font-serif">
                    REWRITER
                  </span>
                </div>
              </a>
              <div className="mt-6 w-full lg:w-[300px]">
                <p className="text-lg leading-relaxed">
                  Paragraph rewriter is an AI-based rewriting tool that can
                  rewrite text with advanced NLP-trained models. This online
                  paragraph rewriter is the best solution for writers block.
                </p>
              </div>
            </div>
            {/* Our Free Tool */}
            <div className="w-full lg:w-[520px] mt-4">
              <div>
                <h1 className="text-lg lg:text-lg font-bold">Our Free Tool</h1>
              </div>
              <div className="mt-6 space-y-2 text-lg">
              <Link href="/" className="block hover:text-blue-600">
                  Paragraph Rewriter
                </Link>
                <Link href="/paragraphGenerator" className="block hover:text-blue-600">
                  Paragraph Generator
                </Link>
                <Link href="/sentenceRewriter" className="block hover:text-blue-600">
                  Sentence Rewriter
                </Link>
              </div>
              
            </div>
            {/* Information Section */}
            <div className="w-full lg:w-[500px] mt-4">
              <div>
                <h1 className="text-lg lg:text-lg font-bold">Information</h1>
              </div>
              <div className="mt-6 space-y-2 text-lg">
              <Link href="/contact" className="block hover:text-blue-600">
                  Contact Us
                </Link>
                <Link href="/about" className="block hover:text-blue-600">
                  About Us
                </Link>
                <Link href="/privacy" className="block hover:text-blue-600">
                  Privacy & Policy
                </Link>
                <Link href="/terms" className="block hover:text-blue-600">
                  Terms & Conditions
                </Link>
                <Link href="/disclaimer" className="block hover:text-blue-600">
                  Disclaimer
                </Link>
              </div>
            </div>
            
            {/* Contact Us Section */}
            <div className="w-full lg:w-[500px] mt-4">
              <div>
                <h1 className="text-lg lg:text-lg font-bold">Social Media</h1>
              </div>
              <div className="mt-6 space-y-2 text-lg">
                <Link href="/about-us" className="flex items-center hover:text-blue-600">
                  <i className="fa-brands fa-twitter text-black text-xl hover:text-blue-600"></i>
                  <span className="ml-3">Twitter</span>
                </Link>
                <Link href="/privacy" className="flex items-center hover:text-blue-600">
                  <i className="fa-brands fa-instagram text-black text-xl hover:text-blue-600"></i>
                  <span className="ml-3">Instagram</span>
                </Link>
                <Link href="/terms" className="flex items-center hover:text-blue-600">
                  <i className="fa-brands fa-facebook text-black text-xl hover:text-blue-600"></i>
                  <span className="ml-3">Facebook</span>
                </Link>
              </div>
            </div>
            {/* newsletter */}
            <div className="w-full lg:w-[700px] mt-4">
                <div>
                  <h1 className="text-lg lg:text-lg font-bold">Subscribe to our Newsletter</h1>
                </div>
                <div className="mt-6 space-y-2">
                  <div className="mb-2">
                    <input placeholder="Enter your Email" className="p-2 border-none focus:outline-none rounded-md"/>
                  </div>
                  <div>
                    <button className="bg-gray-600 text-white rounded-md p-1 w-[120px]">Subscribe</button>
                  </div>
                </div>
              </div>            
          </div>
        </div>
        {/* Bottom copyright section */}
        <div className="bg-slate-800">
          <div className="flex p-4 text-center justify-center items-center">
            <h1 className="text-white text-sm lg:text-lg">
              Copyright © 2024 Paragraph Rewriter
            </h1>
          </div>
        </div>
      </div>
      <div>
        <ScrollToTop />
    </div>
    </>
  );
};

export default Footer;
