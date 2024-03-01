"use client";
import Item from "@/components/Item"
// import RelatedItem from "@/components/RelatedItem"
import { motion, AnimatePresence } from "framer-motion"
import Recipe from "@/components/Recipe";
const page = ({ params }) => {

    // const selectedItem = Recipe.find(item => item.id === params.id);
    const filteredItem = Recipe.filter(item => item.id === params.id);
    // const selectedItem = Recipe.filter(item =>
    //     item.id === params.id
    // );

    console.log(filteredItem);
    // return (
    // <AnimatePresence>
    //     <motion.div
    //         initial={{ x: 500, opacity: 0 }}
    //         animate={{ x: 0, opacity: 1 }}
    //         exit={{ x: 500, opacity: 0 }}
    //         transition={{ type: "tween" }}
    //         className="wrapper">
    //         <h1>{params.item}</h1>
    //         <Item />
    //         {/* <RelatedItem /> */}
    //     </motion.div>
    // </AnimatePresence>

    // )
    if (!filteredItem) {
        return <div>Item not found {params.id}</div>;
    }

    return (
        <div>
            {params.id}
            {/* <h1>{selectedItem.name}</h1>
            <p>{selectedItem.description}</p> */}
        </div>
    );
}
export default page