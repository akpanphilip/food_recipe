"use client";
import Browse from "@/components/Browse";
import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import Recipes from "@/components/Recipes";
import { motion, AnimatePresence } from "framer-motion";
// import { CategoryProvider } from "@/context/CategoryContext";
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap" rel="stylesheet"></link>
export default function Home() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 500, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Categories />
        <Browse />
        <Recipes />
      </motion.div>
    </AnimatePresence>
  );
}
