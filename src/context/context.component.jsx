import { createContext, useEffect, useState } from "react"
import {createUserDocumentFromAuth, onAuthStateChangedListener} from '../utils/firebase/firebase.util';


//  context is actually a third party place or we can say a component that will act as parent to store the data and we will
//  wrap the components or if we want to give access to every component wrap App component inside this context component
//  so this way each component will have access to the context.
// We have to initialize the state and then set the state of the object and then wrap app component inside this UserContext so this way each component
// will be able to grasp the properties of the object

export const UserContext = createContext({
    currentUser : null,
    setCurrentUser: ()=>null,
});


// we need to export the provider that does the work of wrapping the components. The inside or the children components will exist too

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null); // initializing the state as null or empty 
    const value = {currentUser, setCurrentUser}; // the value which will be storeed in the user context
    
    useEffect(()=>{
       const unsubscribe = onAuthStateChangedListener(
        (user) => {
            if(user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
            console.log(user);
       });
        
    //    return unsubscribe;
    },
    []);
  
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>; // it is kind off depicting that UserContext is parent to all the children components

}

