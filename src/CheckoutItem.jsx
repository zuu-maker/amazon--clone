import React from 'react'
import './CheckoutItem.css'
import { useStateValue } from './StateProvider';

function CheckoutItem(props) {
    const [{ basket }, dispatch] = useStateValue();

    function removeFromBasket(){
        dispatch({
            type:"REMOVE_FROM_BASKET",
            item:{
                id:props.id,
            }
        })
    } 

    return (
        <div className="checkoutItem">
            <img src={props.image}/>
           
     <div className="checkoutItem__info">
            <p className="checkoutItem__name">{props.name}</p>
            <small>$</small>
            <strong>{props.price}</strong>
            <div  className="checkoutItem__rating">
            {Array(props.rating)
            .fill()
            .map(() => (
                <span>⭐</span>
            ))}
            </div>
            <button onClick={removeFromBasket}>Remove From Basket</button>
     </div>
 </div>
    )
}

export default CheckoutItem
