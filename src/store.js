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
        cartItems: [...state.cartItems, ...action.payload], // Объединяем данные из localStorage с текущими cartItems
      };
    case "ADD_TO_CART":
      if (action.payload.category === "Pizzas") {
        const existingItem = state.cartItems.find(
          (item) => item?.size === action?.payload?.size && item.name === action.payload.name,
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
            cartItems: state.cartItems.map((item) => {
              return item.size === action.payload.size
                ? {
                    ...item,
                    count: item.count + 1,
                  }
                : item;
            }),
          };
        }
      }
      const existingItem = state.cartItems.find((item) => item?.name === action?.payload?.name);
      if (!existingItem) {
        if (action.payload.category === "Chicken") {
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
        } else if (action.payload.category === "Sides") {
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
        } else if (action.payload.category === "Drinks") {
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
        } else if (action.payload.category === "Desserts") {
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
        } else if (action.payload.category === "Extras") {
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
        }
      } else {
        return {
          ...state,
          cartItems: state.cartItems.map((item) => {
            if (item.name === action.payload.name) {
              return {
                ...item,
                count: item.count + 1,
                price: action.payload.price,
              };
            } else return item;
          }),
        };
      }
    case "CHANGE_COUNT":
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (action.payload.category === "Pizzas") {
            if (item?.size === action.payload?.size) {
              return {
                ...item,
                count: action.payload?.count,
              };
            } else {
              return item;
            }
          } else {
            if (item.name === action.payload.name) {
              return {
                ...item,
                count: action.payload?.count,
              };
            }
          }
        }),
      };
    // case "ADD_OFFER":
    // const products = productItems.filter((product) => product.category === categoryName);
    // if(action.payload == 'first')
    case "SET_IS_SHOW":
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (action.payload.category === "Pizzas") {
            if (item.name.size === action.payload.size) {
              return {
                ...item,
                isShow: !item.isShow,
              };
            } else {
              return item;
            }
          } else {
            if (item.name === action.payload.name) {
              return {
                ...item,
                isShow: !item.isShow,
              };
            } else {
              return item;
            }
          }
        }),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          if (action.payload.category === "Pizzas") {
            return item.size !== action.payload.size;
          } else {
            return item.name !== action.payload.name;
          }
        }),
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
