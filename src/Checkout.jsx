import React from 'react'
import "./Checkout.css"
import CheckoutItem from './CheckoutItem';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {
     
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
               <div className="checkout__left">
               
               <div className="checkout__titleContainer">
                  <h2 className="checkout__title">Your Shopping Basket</h2>
               </div>
               <CheckoutItem
                id={1}
                name="PlayStaion 5"
                rating={5}
                price={499.99}
                image="data:image/jpeg;base64,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" 
          />
          {basket.map((basketItem) =>{
             return <CheckoutItem 
                  id={basketItem.id}
                  name={basketItem.name}
                  rating={basketItem.rating}
                  price={basketItem.price}
                  image={basketItem.image}
              />
          })}
    </div>
            
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
