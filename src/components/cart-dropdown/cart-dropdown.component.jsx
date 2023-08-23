import "./cart-dropdown.component.scss";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";

const CartDropDown = () => {
    const {cartItems} = useContext(CartContext);
    console.log("Cart dropdwn", cartItems);

    const navigate = useNavigate();

    const navigateToCheckout = () => {
        navigate('/checkout');
    }
    
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item}></CartItem>
                
                )
                )    
            }
                <button onClick={navigateToCheckout} >Go to Checkout</button>
            </div>
        </div>
    );
}

export default CartDropDown;