import recipeImg from '../../public/hero-img.webp'
import Image from 'next/image'
import Link from 'next/link'
const RelatedItem = () => {
    return (
        <div>
            <div className="mt-20 mb-20">
                <p className="subtitle text-center">just for you</p>
                <p className="title text-center">Related Recipe</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="recipe">
                        <div className="recipe_img">
                            <Image src={recipeImg} alt />
                        </div>
                        <div className="recipe_info">
                            <p className="recipe_name">Lorem ipsum dolor sit amet consectetur.</p>
                            <p className="recipe_flag">Lorem ipsum dolor.</p>

                            <div className="recipe_rating">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                            <div className="mt-4 mb-4">
                                <Link href="" className="see_more">see more</Link>
                            </div>
                        </div>
                        <div className="recipe_category">Trending</div>
                    </div>
                    <div className="recipe">
                        <div className="recipe_img">
                            <Image src={recipeImg} alt />
                        </div>
                        <div className="recipe_info">
                            <p className="recipe_name">Lorem ipsum dolor sit amet consectetur.</p>
                            <p className="recipe_flag">Lorem ipsum dolor.</p>

                            <div className="recipe_rating">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                            <div className="mt-4 mb-4">
                                <Link href="" className="see_more">see more</Link>
                            </div>
                        </div>
                        <div className="recipe_category">Trending</div>
                    </div>
                    <div className="recipe">
                        <div className="recipe_img">
                            <Image src={recipeImg} alt />
                        </div>
                        <div className="recipe_info">
                            <p className="recipe_name">Lorem ipsum dolor sit amet consectetur.</p>
                            <p className="recipe_flag">Lorem ipsum dolor.</p>

                            <div className="recipe_rating">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                            <div className="mt-4 mb-4">
                                <Link href="" className="see_more">see more</Link>
                            </div>
                        </div>
                        <div className="recipe_category">Trending</div>
                    </div>
                    <div className="recipe">
                        <div className="recipe_img">
                            <Image src={recipeImg} alt />
                        </div>
                        <div className="recipe_info">
                            <p className="recipe_name">Lorem ipsum dolor sit amet consectetur.</p>
                            <p className="recipe_flag">Lorem ipsum dolor.</p>

                            <div className="recipe_rating">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                            <div className="mt-4 mb-4">
                                <Link href="" className="see_more">see more</Link>
                            </div>
                        </div>
                        <div className="recipe_category">Trending</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RelatedItem