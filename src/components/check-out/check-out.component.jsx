import "./check-out.component.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CheckOutPage = () => {
    const { cartItems, addItemToCart, removeItem, removeFullItem, total } = useContext(CartContext);



    const decreaseQuantity = () => {
        console.log("decrease the number");
        removeItem();
    }


    console.log("inside the checkout page", cartItems);
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>

                <div className="header-block">
                    <span>Description</span>
                </div>

                <div className="header-block">
                    <span>Quantity</span>
                </div>

                <div className="header-block">
                    <span>Price</span>
                </div>


                <div className="header-block">
                    <span>Remove</span>
                </div>



            </div>

            {
                cartItems.map((cartItem) => {
                    const { id, name, quantity, price, imageUrl } = cartItem;



                    return (
                        <div key={id} className="checkout-item-container">

                            <div className="image-container">
                                <img src={imageUrl} alt={name}></img>
                            </div>

                            <span className="name">{name}</span>
                           
                            <span className="quantity">
                                <div className="arrow"  onClick={() => removeItem(cartItem)}>
                                    &#10094;
                                </div>
                               
                                
                                <span className="value">{quantity}</span>
                                <div className="arrow"  onClick={() => addItemToCart(cartItem)}>
                                    &#10095;
                                </div>
                             
                            </span>
                           
                            <div className="price">{price}</div>

                            <span className="remove-button" onClick={() => { removeFullItem(cartItem) }}>&#10005;</span>
                        </div>
                    );
                }

                )
            }

        <span className="total">Total: {total}</span>

        </div>

    );
}

export default CheckOutPage;