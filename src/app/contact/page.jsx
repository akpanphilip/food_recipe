"use client";
import ContactPage from "@/components/ContactPage"
import { motion, AnimatePresence } from "framer-motion"
const page = () => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 500, opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <ContactPage />
            </motion.div>
        </AnimatePresence>
    )
}
export default page