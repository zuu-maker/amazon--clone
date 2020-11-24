import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';

function Product(props) {
  const [state, dispatch] = useStateValue();
  
  const addToBasket = () => {

    dispatch({
      type:"ADD_TO__BASKET",
      item:{
        id: props.id,
        name: props.name,
        rating: props.rating,
        price: props.price,
        image: props.image,
      },
    });
  };

    return (
        <div className="product">
        <div className="product__info">
              <p className="product__name"> <strong>{props.name}</strong></p>
              <div>
              {Array(props.rating)
              .fill()
              .map((_, i) => (
                <span className="product__rating">⭐</span>
              ))}
              </div>
              <small>$</small>
              <strong>{props.price}</strong>
        </div>
        <img src={props.image} alt=""/>
        <button onClick={addToBasket}>Add to basket</button>

        </div>
    )
}

export default Product
