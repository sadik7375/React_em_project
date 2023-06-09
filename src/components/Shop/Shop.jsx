import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
 import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {

    const [products,setProduct]=useState([]);
const[cart,setCart]=useState([]);
const [displayProduct,setDisplayProduct]=useState([]);


    useEffect(()=>{
   
         fetch('./products.JSON').then(res=>res.json()).then(data=>{setProduct(data);   setDisplayProduct(data); });
    },[])
    

    useEffect(()=>{
     
      const savedCart=getStoredCart();
       const storedCart=[];

      if(products.length)
      {
        for(const key in savedCart)
      {
      
        const addedProduct=products.find(product=>product.key==key);
        
        if(addedProduct)
        {
            storedCart.push(addedProduct);
        }
     

       
      }
      setCart(storedCart);
      }

      



    },[products]);

    const handleAddToCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart);
        addToDb(product.key);
    }
 const handleSearch=event=>{
    const searchText=event.target.value;
    const matchProducts=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));

    setDisplayProduct(matchProducts);
    console.log(matchProducts);
 }
    return (

      <div>
        <div className="search-container">
             <input type="text" onChange={handleSearch} placeholder='search items'/>
        </div>
        <div className="shop-container">
            <div className="product-container">

                {
                    // eslint-disable-next-line react/jsx-key
                    displayProduct.map(product => <Product product={product} key={product.key} handleAddToCart={handleAddToCart}>



                    </Product>)}


            </div>
            <div className="cart-container">

                <Cart cart={cart}></Cart>


            </div>

        </div>
        </div>
    );
};

export default Shop;