"use client";
import Slider from "react-slick";
// import { useEffect, useState } from "react";
// import Image from "next/image"
// import categoryImg from '../../public/hero-img-1.jpg'
import CategoryCard from "./CategoryCard";
import CategoryList from "./CategoryList";
const Categories = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3
                }
            }
        ]
    };
    return (
        <div className="section">
            <p className="subtitle text-center">personalize your experience</p>
            <p className="title text-center">What are your favorite cuisines?</p>
            <Slider {...settings}>
                {CategoryList.map((category) => (
                    <CategoryCard key={category.id} {...category} />
                ))}
            </Slider>



        </div>
    )
}
export default Categories