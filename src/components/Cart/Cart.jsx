import React from 'react';
import './Cart.css'

const Cart = (props) => {
    

    const{cart}=props;
    let total=0;
    for(const product of cart)
    {
        total=total+product.price;
    }
    
    const shipping =15;
    const tax =(total+shipping)*.10;
    const grandTotal=total+shipping+tax;

    return (
        <div className=''>
              <h3>order summary</h3>
                <h5>Item order:{props.cart.length}</h5>
                <br/>
                <p>Total:{total}</p>
                <p>Shipping:{shipping}</p>
                <p>Tax:{tax}</p>
                <p>grandTotal:{grandTotal}</p>
            
        </div>
    );
};

export default Cart;