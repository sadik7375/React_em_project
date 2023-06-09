import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
   //console.log(product);
   const{name,img,seller,price,stock}=props.product;


   const element = <FontAwesomeIcon icon={faCartShopping} />
  
    return (
        <div className="product">
        
          <img src={img} alt=""/>
          <div>
          <h4 className='name'>{name}</h4>
          <p><small>by:{seller}</small></p>
          <p>Price:{price}</p>
          <p><small>only {stock} left in stoke-order soon</small></p>
          
          <button onClick=  { ()=>  props.handleAddToCart(props.product)} className='purchese-btn'>{element}add to cart</button>

          </div>
          
        </div>
    );
};

export default Product;