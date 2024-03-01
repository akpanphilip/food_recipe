"use client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { useRef } from 'react';
import Button from './UI/Button';
const ContactPage = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const formSubmitHandler = (e) => {
        e.preventDefault();
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";

        toast.success("Message Sent!", {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    return (
        <div className="mt-10 mb-10">
            <ToastContainer />

            <div className="contact-wide">
                <p className="subtitle text-center ">get in touch</p>
                <p className="titleLarge text-center ">Don't hesitate to reach out</p>

                <div className="flex flex-row justify-center mt-10">
                    <div className="basis-3/4 form-wrap">
                        {/* <p className="subtitle text-center p-6">Let's start working together</p> */}

                        <form onSubmit={formSubmitHandler}>
                            <input type="text" className="formInput mb-2" placeholder="Full Name" ref={nameRef} required />
                            <input type="email" className="formInput mb-2" placeholder="Email" ref={emailRef} required />
                            <textarea className="formTextArea mb-2" rows="4" placeholder="Message" ref={messageRef} required></textarea>
                            <div className="flex justify-center">
                                <Button click={formSubmitHandler} className="mt-3 see_more">Send Message</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center mt-10">
                <div className="basis-3/4">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                        <div className="about_info">
                            <i className="ri-mail-line"></i>
                            <span className="about_mid">Email</span>
                            <Link href="mailto:akpanphilip1122@gmail.com" target="_blank" className="about_base">Send a Message</Link>
                        </div>
                        <div className="about_info">
                            <i className="ri-messenger-line"></i>
                            <span className="about_mid">Messenger</span>
                            <Link href="https://www.facebook.com/philddev/" target="_blank" className="about_base">Send a Message</Link>
                        </div>
                        <div className="about_info">
                            <i className="ri-whatsapp-line"></i>
                            <span className="about_mid">Whatsapp</span>
                            <Link href="https://wa.me/+2348133441949" target="_blank" className="about_base">Send a Message</Link>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default ContactPage