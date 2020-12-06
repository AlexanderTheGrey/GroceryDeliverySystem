export const initialState = {
  cart: [],
  cartQuantity: 0,
  user: null,
  searchTerm: "",
  browseCategory: ""
};

export const getCartTotal = (cart) => // Optionally select cart to total the items for the checkout page
  cart?.reduce((amount, item) => item.price * item.quantity + amount, 0);

const reducer = (state, action) => { // Reducer updates the data layer based on a defined action
  console.log(action);
  console.log(state.cart)
  switch (action.type) {
    case "BROWSE":
      state.browseCategory = action.browseCategory
      return {
        ...state,
        browseCategory: action.browseCategory,
      };

    case "SEARCH":
      state.searchTerm = action.searchTerm
      return {
        ...state,
        searchTerm: action.searchTerm,
      };

    case "ADD_TO_CART":

      state.cartQuantity += 1

      const indexAdd = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      console.log(indexAdd + " JKSDJFKJ")

      let newCartAdd = [...state.cart];

      if (indexAdd >= 0) {
        console.log(newCartAdd + "CONDITION")
        newCartAdd[Object.keys(newCartAdd)[indexAdd]].quantity += 1

        return {
          ...state,
          cart: newCartAdd
        }
      }
      else {
        return {
          ...state, // Everything from state
          cart: [...state.cart, action.item], // But change cart to include new item
        };
      }

    case "REMOVE_FROM_CART":

      if(state.cartQuantity > 0){
        state.cartQuantity -= 1
      }

      const indexRemove = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCartRemove = [...state.cart];

      if (indexRemove >= 0) {
        newCartRemove[Object.keys(newCartRemove)[indexRemove]].quantity -= 1
      }
      
      if(newCartRemove[Object.keys(newCartRemove)[indexRemove]].quantity <= 0) {
        newCartRemove.splice(indexRemove, 1);
      }

      return {
        ...state,
        cart: newCartRemove
      }

    case "SET_USER":
      return {
        ...state,
        user: action.user
      }

    default:
      return state;
  }
};

export default reducer;
