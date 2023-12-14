"use client";

import { useState } from 'react'
import recipeImg from '../../public/hero-img.webp'
import profileImg from '../../public/profile.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
const Recipe = () => {

    const [desc, setDesc] = useState(true);
    const [review, setReview] = useState(false);
    const [nutrition, setNutrition] = useState(false);

    const reviewHandler = (() => {
        setDesc(false);
        setNutrition(false);
        setReview(true);
    })

    const descriptionHandler = (() => {
        setDesc(true);
        setNutrition(false);
        setReview(false);
    })

    const nutritionHandler = (() => {
        setDesc(false);
        setNutrition(true);
        setReview(false);
    })
    return (
        <div className="hero">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-16 item_section">
                <div className="item_section_img">
                    <motion.div
                        initial={{
                            x: 8, y: 8,
                        }}
                        animate={{
                            x: 0, y: 0,
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "mirror",
                            duration: 2,
                            ease: "easeInOut",
                        }}
                    >
                        <Image src={recipeImg} className="rounded-md" alt='' />
                    </motion.div>
                </div>
                <div className="item_desc">
                    <p className="item_title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, accusamus?</p>
                    <p className="hero_subtitle">
                        Lorem ipsum dolor sit amet.
                    </p>
                    <div className="recipe_rating mt-3 mb-3">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                    </div>
                    <div className="tag_lists">
                        <span className="tag">Salad</span>
                        <span className="tag">Fried Rice</span>
                        <span className="tag">Salad</span>
                        <span className="tag">Fried Rice</span>
                        <span className="tag">Salad</span>
                        <span className="tag">Fried Rice</span>
                        <span className="tag">Salad</span>
                        <span className="tag">Fried Rice</span>
                        <span className="tag">Salad</span>
                        <span className="tag">Fried Rice</span>
                    </div>

                    <ul className="flex gap-3 mt-5 recipeLink">
                        <li onClick={descriptionHandler} className={`hover:cursor-pointer ${desc ? 'activeLink' : ''}`}>
                            Description
                        </li>
                        <li onClick={nutritionHandler} className={`hover:cursor-pointer ${nutrition ? 'activeLink' : ''}`}>Nutrition</li>
                        <li onClick={reviewHandler} className={`hover:cursor-pointer ${review ? 'activeLink' : ''}`}>Reviews</li>
                    </ul>
                    {desc && (<div className="item_description mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quam magnam excepturi, optio perspiciatis, quidem quisquam esse nulla odit impedit numquam cum, in asperiores ea. Harum, eius enim. Repellat, blanditiis! Labore ducimus dolores consequuntur alias consectetur ullam debitis cum veritatis!
                    </div>)
                    }
                    {review && (
                        <div className="reviews mt-5">
                            <p className="title_description mb-3">Reviews</p>
                            <div className="review">
                                <div className="flex flex-row mb-3">
                                    <div className="mr-3">
                                        <Image src={profileImg} alt width={170} height={170} />
                                    </div>
                                    <div className="flex flex-col">
                                        <div><span className="review_name">@Johnny</span> <span className="review_date">1 day ago</span></div>
                                        <div className="review_desc">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur doloremque perferendis eligendi, totam dolorum facilis voluptatibus, et non quisquam numquam ipsa, magni dignissimos inventore ullam commodi amet voluptate iure. Repudiandae?
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }

                    {nutrition && (<div className="nutrition mt-5">
                        <p className="title_description mb-3">Nutrition</p>
                        <div className="grid grid-cols-3 gap-2 item_description">
                            <span>100g CA</span>
                            <span>100g CA</span>
                            <span>100g CA</span>
                            <span>100g CA</span>
                            <span>100g CA</span>
                            <span>100g CA</span>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}
export default Recipe