import Link from "next/link"
import Image from "next/image"
import Button from "./UI/Button";
const RecipeListCard = ({ recipe }) => {
    return (
        <div className="recipe" key={recipe.id}>
            <div className="recipe_img">
                <Image src={recipe.img} alt={recipe.title} width={300} height={300} />
            </div>
            <div className="recipe_info">
                <p className="recipe_name">{recipe.title}</p>
                <p className="recipe_flag">{recipe.flag}</p>
                <div className="recipe_rating">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                </div>
                <div className="mt-4 mb-4 w-full">
                    <Button className="see_more" onClick={() => { }}>see more</Button>
                    {/* <Link href={`/recipe/${recipe.id}`}>see more</Link> */}
                </div>
            </div>
            <div className="recipe_category">{recipe.flag}</div>
        </div>


        // <img src={recipe.img} alt={recipe.title} />
        // <p>{recipe.description}</p>

        // <h3>Tags</h3>
        // <ul>
        //     {recipe.tags.nutrition.map(tag => (
        //         <li key={tag}>{tag}</li>
        //     ))}
        // </ul>

        // <h3>Nutrition Information</h3>
        // <ul>
        //     {recipe.nutrition.map(nutrient => (
        //         <li key={nutrient.nutrientName}>
        //             {nutrient.nutrientName}: {nutrient.amount} {nutrient.unit}
        //         </li>
        //     ))}
        // </ul>

        // <h3>Preparation Steps</h3>
        // <ol>
        //     {recipe.preparationSteps && recipe.preparationSteps.steps
        //         ? recipe.preparationSteps.steps.map((step, index) => (
        //             <li key={index}>{step}</li>
        //         ))
        //         : null}
        // </ol> 
    );
};

export default RecipeListCard;
