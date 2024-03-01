import Image from "next/image";

const CategoryCard = ({ id, title, img }) => {
    return (
        <div className="categories_list" key={id}>
            <div className="categories_wrap">
                <div className="categories_wrap_in">
                    <Image src={img} alt={title} fill />
                </div>
                <p className="category_text">{title}</p>
            </div>
        </div>
    )
}
export default CategoryCard
