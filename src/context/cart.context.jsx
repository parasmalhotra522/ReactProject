import { createContext, useState, useEffect } from "react";


const addCartItem = (cartItems, productToAdd) => {
    // find if the cartItems already contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    // if found increment quantity by 1

    if (existingCartItem) {
        return(cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        ))
    }


    // returns new array with modified new items
    return [...cartItems, {...productToAdd, quantity:1}];
}


// remove element completely from the cart
const removeFullItemFromCart = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id===itemToRemove.id);
    if (existingCartItem) {
        return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id )
    }
}


// remove element from the cart
const removeItemFromCart = (cartItems, itemToRemove) => {
    console.log("All cart Items, ", cartItems, "to remove", itemToRemove);
    // check if the item exists in the cart
    const existingCartItem = cartItems.find(cartItem => cartItem.id===itemToRemove.id);
    if (existingCartItem) {

        if (existingCartItem.quantity === 1) {
            return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id )
        }

        return cartItems.map((cartItem) => {
            return (cartItem.id === itemToRemove.id 
            ?
            {...cartItem, quantity: cartItem.quantity-1}
            
            : cartItem
            )
        })
        
    }
}
     
     






export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart: ()=>{},
    cartCount:0,

    removeItem: ()=>{},
    removeFullItem : () => {},

    total : 0

});

export const CartContextProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const [cartCount, setCartCount] = useState(0);
    
    const [total, setTotal] = useState(0);

    useEffect(()=> {
        const newCartCount = cartItems.reduce((total,currentCartItem) => total+currentCartItem.quantity,0);
        setCartCount(newCartCount);

    }, [cartItems])
    
    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total, currentCartItem) =>  total + currentCartItem.price * currentCartItem.quantity, 0);
          setTotal(newCartTotal);
        }, [cartItems]);


    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd));
    }

    const removeItem = (itemToRemove) => {
        console.log(" I am in the remove meeeethod", itemToRemove);
        setCartItems(removeItemFromCart(cartItems, itemToRemove))
    }

    const removeFullItem = (itemToRemove) => {
        console.log("OI am completely removing the item from cart");
        setCartItems(removeFullItemFromCart(cartItems, itemToRemove));
    }

    const value = {isCartOpen,setIsCartOpen, addItemToCart, cartItems, cartCount,removeItem, removeFullItem, total};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}