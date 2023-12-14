"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Button from "../components/UI/Button";
import styles from "./bubble.module.css"

const ShuffleHero = () => {
    return (
        <section className="hero py-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-8">
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "tween" }}
            >
                <div className="hero_desc">
                    <p className="hero_title">
                        {"Culinary Chronicles".split("").map((child, idx) => (
                            <span className={styles.hoverText} key={idx}>
                                {child}
                            </span>
                        ))}
                    </p>
                    <p className="hero_subtitle">Wholesome Ingredients, Wholesome Living. </p>
                    <p className="hero_subtitle mb-3">
                        Bringing the World's Best Recipes to Your Table
                    </p>
                    <div className="mt-4">
                        <Button href="">Learn more</Button>
                    </div>
                </div>
            </motion.div>
            <ShuffleGrid />
        </section>
    );
};

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

const squareData = [
    {
        id: 1,
        src: "https://img.freepik.com/free-photo/crop-hand-holding-baking-with-fish_23-2147753659.jpg?w=996&t=st=1702549847~exp=1702550447~hmac=90acda005fd3c359af902c7be78eb319b05237297d9e6f0ece2dd44adbe605e6",
    },
    {
        id: 2,
        src: "https://img.freepik.com/free-photo/pieces-chicken-fillet-with-mushrooms-stewed-tomato-sauce-with-boiled-broccoli-rice-proper-nutrition-healthy-lifestyle-dietetic-menu-top-view_2829-20015.jpg?w=996&t=st=1702549992~exp=1702550592~hmac=2f6858e19b6ee7044cf61ce28503b6911f301aee6509c4cf83bdcca4dd6a3439",
    },
    {
        id: 3,
        src: "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=996&t=st=1702550037~exp=1702550637~hmac=fa7ebc79ac655837acd3920f5031bee8f5a98b3e72bb51eefcdd82c13efe01ab",
    },
    {
        id: 4,
        src: "https://img.freepik.com/free-photo/top-view-delicious-pineapple-still-life_23-2150408046.jpg?w=900&t=st=1702550094~exp=1702550694~hmac=51d04941c66a5a373ead1a1f27d52a8e07e8dccae4c3da70318e883242c15735",
    },
    {
        id: 5,
        src: "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209231.jpg?w=996&t=st=1702550154~exp=1702550754~hmac=6800db53e1663792fff4aacc6dfaa33475b1e057f721b40eaf65b23b751bd485",
    },
    {
        id: 6,
        src: "https://img.freepik.com/free-photo/grilled-meat-veggies-wooden-plate-generated-by-ai_188544-10123.jpg?w=1060&t=st=1702550222~exp=1702550822~hmac=4491ffd4959c03a7114e0db7c585bfd123a5c957a9b1b082e5884a613ac153ad",
    },
    {
        id: 7,
        src: "https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate_2829-10657.jpg?w=900&t=st=1702550258~exp=1702550858~hmac=0bcdee3bf2d61095d3a78c6bcad8a6b82029c52baddcc94519ec4dec188cc444",
    },
    {
        id: 8,
        src: "https://img.freepik.com/free-photo/baked-potatoes-with-garlic-herbs-fried-chanterelles-cast-iron-skillet-top-view_2829-17379.jpg?w=996&t=st=1702550255~exp=1702550855~hmac=2299f005a090a8eea1e792c4cf8b9cc10184c4b7719a54adac915fe3ea0f15fa",
    },
    {
        id: 9,
        src: "https://img.freepik.com/free-photo/quinoa-with-vegetables-cooked-lunch-dinner-served-bowl-closeup_1220-5345.jpg?w=996&t=st=1702550250~exp=1702550850~hmac=154bdbebdb893208108bfb5be78ad30f19c6d6046f744b8d61cf13d287e01cfe",
    },

];

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 2, type: "spring" }}
            className="w-full h-full"
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover",
                borderRadius: "10px",
            }}
        ></motion.div>
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());

    useEffect(() => {
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());

        timeoutRef.current = setTimeout(shuffleSquares, 4000);
    };

    return (
        <div className="grid grid-cols-3 grid-rows-3 h-[450px] gap-2">
            {squares.map((sq) => sq)}
        </div>
    );
};

export default ShuffleHero;