"use client";
import Recipe from "@/components/Recipe"
import RelatedItem from "@/components/RelatedItem"
import { motion, AnimatePresence } from "framer-motion"

const page = () => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 500, opacity: 0 }}
                transition={{ type: "tween" }}
                className="wrapper">
                <Recipe />
                <RelatedItem />
            </motion.div>
        </AnimatePresence>
    )
}
export default page