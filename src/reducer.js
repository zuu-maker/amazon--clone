export const initialState = {
    basket: [],
};

// a selector
export const BasketTotal = (basket) =>{
    return basket?.reduce((accumilator, item) => item.price + accumilator, 0);
}
  

const reducer = (state, action) => {

    console.log(action);

    switch(action.type){
        case "ADD_TO__BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            let id = action.item;
            let newBasket = state.basket;
            let index = state.basket.findIndex((basketItem) =>{
               return basketItem.id === id;
            })
            newBasket.splice(index,1)
            return {
                ...state,
                basket: newBasket,
            }
        default:
            return state;
    }
};

export default reducer;