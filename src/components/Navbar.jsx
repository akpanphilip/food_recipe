"use client";

import Link from 'next/link'
import { useState } from 'react'
// import ThemeToggle from '../themeToggle/ThemeToggle';
import { motion, useScroll } from "framer-motion";
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()

    const isHome = pathname === '/';
    const isAbout = pathname === '/about';
    const isContact = pathname === '/contact';

    const { scrollYProgress } = useScroll();
    const [open, setOpen] = useState(false);
    const toggleHandler = () => {
        setOpen(!open);
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
                    <Link href="/" className="logo">Yum<span>mee</span></Link>

                </motion.div>
                <i className="ri-menu-3-line" onClick={toggleHandler}></i>
            </div>
            <motion.ul
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="links_lg">
                <li><Link href="/" className={isHome ? 'active' : ''}>Home</Link></li>
                <li><Link href="/about" className={isAbout ? 'active' : ''}>About</Link></li>
                <li><Link href="/contact" className={isContact ? 'active' : ''}>Contact</Link></li>
            </motion.ul>

            {open && <motion.ul
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="links_sm">
                <li><Link className={isHome ? 'active' : ''} href="/">Home</Link></li>
                <li><Link className={isHome ? 'active' : ''} href="/about">About</Link></li>
                <li><Link className={isHome ? 'active' : ''} href="/contact">Contact</Link></li>
            </motion.ul>}
        </div>
    )
}
export default Navbar