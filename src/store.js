import { applyMiddleware, createStore } from "redux";

const initialState = {
  cartItems: [],
  offerMeals: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_CART_FROM_LOCAL_STORAGE":
      return {
        ...state,
        cartItems: [...state.cartItems, ...action.payload], 
      };

    case "ADD_TO_CART":
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      ); 
      if (!existingItem) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            {
              ...action.payload,
              isShow: false,
              count: 1,
            },
          ],
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id 
              ? { ...item, count: item.count + 1 }
              : item
          ),
        };
      }

    case "CHANGE_COUNT":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id 
            ? { ...item, count: action.payload.count }
            : item
        ),
      };

    case "SET_IS_SHOW":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id 
            ? { ...item, isShow: !item.isShow }
            : item
        ),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.id), 
      };

    case "ADD_OFFER_MEAL":
      return {
        ...state,
        offerMeals: [...state.offerMeals, action.payload],
      };

    case "CLEAR_OFFERS":
      return {
        ...state,
        offerMeals: [],
      };

    case "REMOVE_FROM_OFFERS":
      return {
        ...state,
        offerMeals: state.offerMeals.filter((i) => i.name !== action.payload),
      };

    default:
      return state;
  }
};

const saveToLocalStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("cart", JSON.stringify(store.getState().cartItems));
  return result;
};

const store = createStore(cartReducer, applyMiddleware(saveToLocalStorageMiddleware));

export default store;
