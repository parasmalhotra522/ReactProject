import "./category-item.component.scss";

const CategoryItem = ({ category }) => {
    let { title, imageUrl } = category;

    // don't forget the return statement else the render won't be done
    return (
        <div className="category-container" >
            <div className="background-image" style={
                {
                    backgroundImage: `url(${imageUrl})`
                }
            }></div>
            <div className="category-body-container">

                <h2>{title}</h2>
                <p className="shop-now">Shop Now</p>
            </div>


        </div>
    );
}
export default CategoryItem;