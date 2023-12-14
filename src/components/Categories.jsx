"use client";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import Image from "next/image"
import categoryImg from '../../public/hero-img-1.jpg'
const Categories = () => {

    // const [data, setData] = useState();
    // const url = 'https://yummly2.p.rapidapi.com/categories/list';
    // useEffect(() => {
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': '9ea6f7415amshd66bac1e7e2aff1p119fbajsn9b6d8fc8e386',
    //             'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
    //         }
    //     };

    //     fetch(url, options)
    //         .then(response => response.json())
    //         .then(response => {
    //             console.log(response);
    //             setData(response['browse-categories']);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }, [])

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
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="section">
            <p className="subtitle text-center">personalize your experience</p>
            <p className="title text-center">What are your favorite cuisines?</p>
            {/* <Slider {...settings}>
                {data && data.map((d, index) => (
                    <div key={index} className="category">
                        <div className="category_in">
                            <div className="display_name">{d.display.displayName}</div>
                            <Image src={d.display.categoryImage} className="border-md" fill alt="category img" />
                        </div>
                    </div>
                ))}
            </Slider> */}

            <Slider {...settings}>
                <div className="categories_list">
                    <div className="categories_wrap">
                        <div className="categories_wrap_in">
                            <Image src={categoryImg} alt="category img" />
                            <p className="category_text">Baked Salad</p>
                        </div>
                    </div>
                </div>
                <div className="categories_list">
                    <div className="categories_wrap">
                        <div className="categories_wrap_in">
                            <Image src={categoryImg} alt="category img" />
                            <p className="category_text">Baked Salad</p>
                            <div className="category_icon"></div>
                        </div>
                    </div>
                </div>
                <div className="categories_list">
                    <div className="categories_wrap">
                        <div className="categories_wrap_in">
                            <Image src={categoryImg} alt="category img" />
                            <p className="category_text">Baked Salad</p>
                            <div className="category_icon"></div>
                        </div>
                    </div>
                </div>
                <div className="categories_list">
                    <div className="categories_wrap">
                        <div className="categories_wrap_in">
                            <Image src={categoryImg} alt="category img" />
                            <p className="category_text">Baked Salad</p>
                            <div className="category_icon"></div>
                        </div>
                    </div>
                </div>
                <div className="categories_list">
                    <div className="categories_wrap">
                        <div className="categories_wrap_in">
                            <Image src={categoryImg} alt="category img" />
                            <p className="category_text">Baked Salad</p>
                            <div className="category_icon"></div>
                        </div>
                    </div>
                </div>
                <div className="categories_list">
                    <div className="categories_wrap">
                        <div className="categories_wrap_in">
                            <Image src={categoryImg} alt="category img" />
                            <p className="category_text">Baked Salad</p>
                            <div className="category_icon"></div>
                        </div>
                    </div>
                </div>
                <div className="categories_list">
                    <div className="categories_wrap">
                        <div className="categories_wrap_in">
                            <Image src={categoryImg} alt="category img" />
                            <p className="category_text">Baked Salad</p>
                            <div className="category_icon"></div>
                        </div>
                    </div>
                </div>
                <div className="categories_list">
                    <div className="categories_wrap">
                        <div className="categories_wrap_in">
                            <Image src={categoryImg} alt="category img" />
                            <p className="category_text">Baked Salad</p>
                            <div className="category_icon"></div>
                        </div>
                    </div>
                </div>
                <div className="categories_list">
                    <div className="categories_wrap">
                        <div className="categories_wrap_in">
                            <Image src={categoryImg} alt="category img" />
                            <p className="category_text">Baked Salad</p>
                            <div className="category_icon"></div>
                        </div>
                    </div>
                </div>
                <div className="categories_list">
                    <div className="categories_wrap">
                        <div className="categories_wrap_in">
                            <Image src={categoryImg} alt="category img" />
                            <p className="category_text">Baked Salad</p>
                            <div className="category_icon"></div>
                        </div>
                    </div>
                </div>
            </Slider>



        </div>
    )
}
export default Categories