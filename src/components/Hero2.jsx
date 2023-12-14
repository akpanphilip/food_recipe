// "use client";

// import Slider from "react-slick";
// import heroImg from '../../../public/hero-img.webp'
// import Image from 'next/image'
// import Link from 'next/link'


// const Hero = () => {
//     var settings = {
//         dots: true,
//         autoplay: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     };
//     return (
//         <div className="hero">
//             <Slider {...settings}>
//                 <div className="hero_banner">
//                     <div className="hero_banner_in">
//                         <div className="hero_desc">
//                             <p className="hero_title">Culinary Chronicles</p>
//                             <p className="hero_subtitle">Wholesome Ingredients, Wholesome Living. </p>
//                             <p className="hero_subtitle mb-3">
//                                 Bringing the World's Best Recipes to Your Table
//                             </p>
//                             <Link href="" className='see_more'>Get Started</Link>
//                         </div>
//                         <div className="hero_banner_img">
//                             <Image src={heroImg} className='rounded-md' alt='Hero Image' />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="hero_banner">
//                     <div className="hero_banner_in">
//                         <div className="hero_desc">
//                             <p className="hero_title">Culinary Chronicles</p>
//                             <p className="hero_subtitle">Wholesome Ingredients, Wholesome Living. </p>
//                             <p className="hero_subtitle mb-3">
//                                 Bringing the World's Best Recipes to Your Table
//                             </p>
//                             <Link href="" className='see_more'>Get Started</Link>
//                         </div>
//                         <div className="hero_banner_img">
//                             <Image src={heroImg} className='rounded-md' alt='Hero Image' />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="hero_banner">
//                     <div className="hero_banner_in">
//                         <div className="hero_desc">
//                             <p className="hero_title">Culinary Chronicles</p>
//                             <p className="hero_subtitle">Wholesome Ingredients, Wholesome Living. </p>
//                             <p className="hero_subtitle mb-3">
//                                 Bringing the World's Best Recipes to Your Table
//                             </p>
//                             <Link href="" className='see_more'>Get Started</Link>
//                         </div>
//                         <div className="hero_banner_img">
//                             <Image src={heroImg} className='rounded-md' alt='Hero Image' />
//                         </div>
//                     </div>
//                 </div>
//             </Slider>
//         </div>
//     )
// }
// export default Hero