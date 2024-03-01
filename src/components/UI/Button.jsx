"use client";
import { motion } from "framer-motion";

const Button = ({ onClick, children, ...props }) => {
    return (
        <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.95 }}
            {...props}>
            {children}
        </motion.button>
    )
}
export default Button
