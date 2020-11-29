export const initialState = {
  cart: [],
  user: null
};

export const getCartTotal = (cart) => // Optionally select cart to total the items for the checkout page
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => { // Reducer updates the data layer based on a defined action
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
