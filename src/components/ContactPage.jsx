"use client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { useRef } from 'react';
const ContactPage = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const sumbitHandler = (e) => {
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
            <p className="subtitle text-center">get in touch</p>
            <p className="title text-center">Contact Us</p>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-20 mt-20">
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="about_info">
                            <i class="ri-mail-line"></i>
                            <span className="about_mid">Email</span>
                            <Link href="mailto:akpanphilip1122@gmail.com" target="_blank" className="about_base">Send a Message</Link>
                        </div>
                        <div className="about_info">
                            <i class="ri-messenger-line"></i>
                            <span className="about_mid">Messenger</span>
                            <Link href="https://www.facebook.com/philddev/" target="_blank" className="about_base">Send a Message</Link>
                        </div>
                        <div className="about_info">
                            <i class="ri-whatsapp-line"></i>
                            <span className="about_mid">Whatsapp</span>
                            <Link href="https://wa.me/+2348133441949" target="_blank" className="about_base">Send a Message</Link>
                        </div>

                    </div>
                </div>

                <form onSubmit={sumbitHandler}>
                    <input type="text" className="formInput mb-2" placeholder="Full Name" ref={nameRef} required />
                    <input type="email" className="formInput mb-2" placeholder="Email" ref={emailRef} required />
                    <textarea className="formTextArea mb-2" placeholder="Message" ref={messageRef} required></textarea>
                    <button className="see_more" type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}
export default ContactPage