import  {Fragment } from 'react';
import { useContext } from 'react';
import { ProductsContext } from '../../context/products.context';
import  ProductCard  from '../../components/product-card/product-card.component';
import "./shop.component.scss";

const Shop = () => {
    const {products} = useContext(ProductsContext);
   
    // const { products } = products;
    console.log("check shopd", products);
    return (
        <div className='products-container'>
            {products.map((product) => (
                // const {id, name, imageUrl, price} = product;
                <ProductCard key={product.id} product = {product}></ProductCard>        
             
            ))
            }
    
    </div>
    )
    }   
    
        

export default Shop;