"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Button = ({ href, children, ...props }) => {
    return (
        <motion.span
            initial={{ scale: 1 }}
            animate={{ scale: 0 }}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link href={href} {...props} className="see_more">
                {children}
            </Link>
        </motion.span>
    )
}
export default Button
