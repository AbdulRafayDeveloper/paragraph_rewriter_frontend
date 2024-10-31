'use client';
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const Contact=()=>{
    const [data, setdata] = useState({
        email:'',
        subject:'',
        message: '',
    });
    
    const inputEvent=(event)=>{
       const {name,value}=event.target;
       setdata((prevValue=>{
            return {
                ...prevValue,
                [name]:value
            }
        }
    ))
    }
    const Submit=(event)=>{
        event.preventDefault();
        let p=document.createElement("p");
        let btn=document.querySelector("button");
        const d=[data.email,data.subject,data.message];
        p.innerText=d;
        p.style.color="black";
        btn.appendChild(p);
        console.log(data);
        setdata(
            {
                email:'',
                subject: '',
                message:'',
            }
        );
        // console.log("data submit");
    }
    return (
        <>
            <Navbar/>
            <div className="font-[sans-serif] max-w-6xl mx-auto relative bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl overflow-hidden mt-36 mb-24">
                <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-gray-700"></div>
                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gray-700"></div>

                <div className="grid md:grid-cols-2 gap-8 py-8 px-6">
                    <div className="flex flex-col">
                        <div className="mt-10">
                            <h1 className="text-4xl font-bold">Get in Touch</h1>
                            <p className="text-md mt-5 text-justify">
                                Have questions or feedback? We are here to help! Our dedicated support team is just a click away, ready to assist you on your learning journey. Whether you need technical assistance, guidance on course selection, or simply want to share your thoughts, we value your input and are committed to providing a seamless experience. Reach out to us today and lets embark on this educational adventure together!
                            </p>
                            <p className="mt-5">
                                <i class="fa-solid fa-phone"></i><span className="ml-5">111-222-333</span>
                            </p>
                            <p className="mt-5">
                            <i class="fa-solid fa-envelope"></i><span className="ml-5">paraWriter@gmail.com</span>
                            </p>
                            
                        </div>
                    </div>

                    <form className="rounded-tl-3xl rounded-bl-3xl">
                    <h2 className="text-2xl text-gray-800 font-bold text-center mb-6">Contact us</h2>
                    <div className="max-w-md mx-auto space-y-3 relative mb-7">
                        
                        <input type='email' placeholder='Email'
                        className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm border-none outline-none"  name="email" value={data.email} onChange={inputEvent}  autoComplete='off'/>
                        <input type='text' placeholder='Subject of your message'
                        className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm border-none outline-none"  name="subject" value={data.subject} onChange={inputEvent} autoComplete='off' required/>
                        <textarea placeholder='Message' rows="6"
                        className="w-full bg-gray-100 rounded-md px-4 text-sm pt-3 border-none outline-none"  name="message" value={data.message} onChange={inputEvent}  autoComplete='off'></textarea>

                        <button type='button'
                        className="text-white w-full font-bold relative bg-gray-700 hover:bg-gray-600 rounded-md text-sm px-6 py-3 !mt-6"  onClick={Submit}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2 inline" viewBox="0 0 548.244 548.244">
                            <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000" />
                        </svg>
                        Send Message
                        </button>
                    </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Contact;