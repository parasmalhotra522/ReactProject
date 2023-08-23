import { useContext } from "react";
import "./cart-icon.component.scss";
import { ReactComponent as ShoppingBag } from '../../assets/images/shopping-bag.svg';
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const toggle = () => setIsCartOpen(!isCartOpen); 
    
    const currentCartCount = cartCount;
    
    // console.log("In icon page", cartItems);

    // const totalCartItems = cartItems.reduce((accumulator, cartItem)=>accumulator += cartItem.quantity,0);
    // console.log("Total elements in cart", totalCartItems);
    return (
        <div className="cart-icon-container">
            <ShoppingBag className='shopping-icon' onClick={toggle}/>
            <span className="item-count">{currentCartCount}</span>

        </div>
    );
}

export default CartIcon;