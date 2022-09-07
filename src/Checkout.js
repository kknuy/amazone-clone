import React from 'react'
import {useStateValue} from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';

import './Checkout.css';
import Subtotal from './Subtotal';


function Checkout() {

    const [{basket}] = useStateValue();

  return (
    <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__ad" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg" alt=""/>

            {basket?.length === 0 ? (
                <div>
                    <h2>Your ShoppingBasket is empty!</h2>
                    <p>You can add a new shopping basket to your shopping basket.</p>
                </div>
            ):(
            <div>
                <h2 className="checkout__title">Your ShoppingBasket</h2>
                {basket.map((item)  =>{
                    return (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                            )}
                        )}
            </div>
            )}
        </div>
        {basket.length > 0 && (
            <div className="checkout__right">
                <Subtotal/>
            </div>
        )}
    </div>
  )
}

export default Checkout;