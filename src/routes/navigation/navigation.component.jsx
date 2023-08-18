import { Link, Outlet } from "react-router-dom";
import "./navigation.component.scss";
import { Fragment } from "react";

// we can import svg in React as component
import {ReactComponent as CrownLogo} from '../../assets/images/crown.svg';

// we have concept of Fragment which are provided by React we can say they are just container which don't
// pose extra tag onto DOM when we see them in console

const Navigation = () => {
    // we use Fragment as the main div tag to be returned
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
                <Link className="nav-link" to="/sign-in">SignIn</Link>
                
            </div>
        </div>
          <Outlet></Outlet>
    </Fragment>
    )
  }

  export default Navigation;