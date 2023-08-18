import { Fragment } from "react";
import "./sign-in.component.scss";
import { signInWithGooglePopUp, createUserDocumentFromAuth } from "../../utils/firebase/firebase.util";

const SignIn = () => {

    const logGoogleUser = async() => {
        const { user } = await signInWithGooglePopUp(); // extracting only the user object from the api call 
        
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(user);
    }

    return (
       <Fragment>
        Hello I am in the Sign-in component

        <button className="sign-in-btn"
            onClick={logGoogleUser}
        > Sign In With Google</button>
        
       </Fragment>
    );
}

export default SignIn;