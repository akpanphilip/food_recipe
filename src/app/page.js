"use client";
import Browse from "@/components/Browse";
import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import Recipes from "@/components/Recipes";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 500, opacity: 0 }}
        transition={{ type: "tween" }}
      >
        <Hero />
        <Categories />
        <Browse />
        <Recipes />
      </motion.div>
    </AnimatePresence>
  );
}
