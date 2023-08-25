import { useContext } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import "./categories-preview.component.scss";
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);


    // const { products } = products;
    console.log("check categories preview", categoriesMap);
    return (
        <div className='categories-preview-container'>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} products={products}></CategoryPreview>
                    );
                })
            }
        </div>
    )
}



export default CategoriesPreview;