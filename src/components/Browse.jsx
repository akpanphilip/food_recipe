import Trending from './Trending'
import Tags from './Tags'
const Browse = () => {
    return (
        <div className="lg:flex sm:flex-col md:flex-col lg:flex-row mt-20 mb-20 gap-16 sm:gap-y-10">
            <Trending />
            <Tags />
        </div>
    )
}
export default Browse