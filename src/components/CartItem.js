import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
      <button className="remove-button" onClick={removeFromCart}>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
