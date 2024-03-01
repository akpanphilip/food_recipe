import recipeImg from '../../public/hero-img.webp'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import RecipeCard from '../components/RecipeCard';
import RecipeData from '../components/Recipe'; // Update the path to your actual data file


const Recipes = () => {
    return (
        <div className="mt-20 mb-20">
            <p className="subtitle text-center">just for you</p>
            <p className="title text-center">What are your favorite cuisines?</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {RecipeData.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div >
    )
}
export default Recipes