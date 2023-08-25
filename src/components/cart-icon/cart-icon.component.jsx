import { useContext } from "react";
import {CartIconContainer, ItemCount, ShoppingIcon} from "./cart-icon.styles.jsx";
// import { ReactComponent as ShoppingBag } from '../../assets/images/shopping-bag.svg';
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const toggle = () => setIsCartOpen(!isCartOpen); 
    
    const currentCartCount = cartCount;
    
    // console.log("In icon page", cartItems);

    // const totalCartItems = cartItems.reduce((accumulator, cartItem)=>accumulator += cartItem.quantity,0);
    // console.log("Total elements in cart", totalCartItems);
    return (
        <CartIconContainer>
            <ShoppingIcon onClick={toggle}/>
            <ItemCount>{currentCartCount}</ItemCount>

        </CartIconContainer>
    );
}

export default CartIcon;