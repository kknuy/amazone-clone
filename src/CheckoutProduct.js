import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';

function CheckoutProduct({ id, title, rating ,price, image}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => { 
        dispatch({
            type: "BASK_REMOVE",
            id: id,
        });
    }

  return (
    <div className="checkout__product">
        <img src={image} alt={title}/>
        <div className="checkout__product__info">
            <p className="checkout__product__title">{title}</p>

            <p className='checkout__product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <div className='checkout__product__rating'>
                    {
                        Array(rating).fill().map(
                            (_, i) => (
                                <p>★</p>
                        ))
                    }
            </div>
            <button onClick={removeFromBasket} >Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct