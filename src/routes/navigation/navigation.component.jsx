import { Link, Outlet } from "react-router-dom";
import "./navigation.component.scss";
import { Fragment, useContext } from "react";

// we can import svg in React as component
import {ReactComponent as CrownLogo} from '../../assets/images/crown.svg';
import { UserContext } from "../../context/context.component"; 
import { SignOutUser } from "../../utils/firebase/firebase.util";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";



// we have concept of Fragment which are provided by React we can say they are just container which don't
// pose extra tag onto DOM when we see them in console

const Navigation = () => {
    // we use Fragment as the main div tag to be returned

    const {currentUser, setCurrentUser} = useContext(UserContext);
    
    const { isCartOpen } = useContext(CartContext);

    const SignOutUserHandler = async() => {
      const res = await SignOutUser();
      // setCurrentUser(null);
      console.log(res);
    } 

    const toggleCart = (state) => {
      console.log("check togle",state);
    }


    // console.log("Check logged in user from nav-bar", currentUser);
    return (
      <Fragment>
        
        <div className="navigation">
        {/* Link is similar to a tag in html */}
            <Link className="logo-container" to='/'>
                <div>
               <CrownLogo className="logo"/>
                </div>
            </Link>

            <div className="nav-links-container">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/shop">Shop</Link>
                <Link className="nav-link" to="/sign-up">Sign Up</Link>
                { currentUser ? (<Link className="nav-link" onClick={SignOutUserHandler} >Sign Out</Link>)
                : (<Link className="nav-link" to="/sign-in">Sign In</Link>)
                }

                <Link className="nav-link">
                  <CartIcon ></CartIcon>
                </Link>
               {isCartOpen &&  <CartDropDown/>}
                
            </div>
        </div>
          <Outlet></Outlet>
    </Fragment>
    )
  }

  export default Navigation;