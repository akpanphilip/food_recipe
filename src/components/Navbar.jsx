"use client";

import Link from 'next/link'
import { useState } from 'react'
// import ThemeToggle from '../themeToggle/ThemeToggle';
import { motion, useScroll } from "framer-motion";
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname()

    const isHome = pathname === '/';
    const isAbout = pathname === '/about';
    const isContact = pathname === '/contact';


    const router = useRouter();
    const { scrollYProgress } = useScroll();
    const [open, setOpen] = useState(false);
    const toggleHandler = () => {
        setOpen(!open);
    }
    const removeNav = () => {
        setOpen(false);
    }
    return (
        <div className="navbar margin-150">
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <div className="logo_toggle">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                >
                    <div className="logo" onClick={() => router.push('/')}>Yum<span>mee</span></div>
                </motion.div>
                <i className="ri-menu-3-line" onClick={toggleHandler}></i>
            </div>
            <motion.ul
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="links_lg">
                <li className={isHome ? 'active' : ''} onClick={() => router.push('/')}>Home</li>
                <li className={isAbout ? 'active' : ''} onClick={() => router.push('/about')}>About</li>
                <li className={isContact ? 'active' : ''} onClick={() => router.push('/contact')}>Contact</li>

                {/* <li className={isHome ? 'active' : ''} ><Link href="/">Home</Link></li>
                <li className={isAbout ? 'active' : ''}><Link href="about">About</Link></li>
                <li className={isContact ? 'active' : ''}><Link href="contact">Contact</Link></li> */}
            </motion.ul>

            {open && <motion.ul
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="links_sm">
                <li onClick={removeNav}><Link href="/">Home</Link></li>
                <li onClick={removeNav}><Link href="about">About</Link></li>
                <li onClick={removeNav}><Link href="contact">Contact</Link></li>
            </motion.ul>}
        </div>
    )
}
export default Navbar