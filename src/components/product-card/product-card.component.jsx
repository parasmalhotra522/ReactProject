import "./product-card.component.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const ProductCard = ({product}) => {
    // console.log('I am in ',product);
    const {name, imageUrl, price} = product;
    const {addItemToCart} = useContext(CartContext);
 
    const addProductToCart = () => addItemToCart(product);
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <button type="button" className="add-to-cart"
                onClick = {addProductToCart}
            >Add to cart</button>
        </div>
    );
}


export default ProductCard;