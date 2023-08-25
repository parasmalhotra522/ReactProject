import { createContext, useEffect, useState } from "react"; 
import SHOP_DATA from '../assets/data/shop-data';
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.util";

export const CategoriesContext = createContext({
    categoriesMap : [],
   
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setcategoriesMap] = useState({});
    

    useEffect(()=>{
        const getCategoriesMap = async() => {
            const categoryMap = await getCategoriesAndDocuments();
            // console.log('cccc', categoryMap);
            setcategoriesMap(categoryMap);
        }
        getCategoriesMap();
    },[]);

    const value = { categoriesMap };
    // pushed data once to firestore normally is not done fromn frontend
    // useEffect(()=>{addCollectionAndDocuments('categories', SHOP_DATA)},[]);
    return (<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>)
}
