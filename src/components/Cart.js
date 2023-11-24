import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartImg from "../images/icon-cart.svg";
import MiniCart from "./MiniCart";

const Cart = ({ isArabic }) => {
  const cartItems = useSelector((state) => state.cartItems);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (cartItems?.length == 0) {
      setIsCartOpen(false);
    }
  }, [cartItems]);

  const toggleCart = () => {
    if (cartItems.length) {
      setIsCartOpen(!isCartOpen);
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-icon" onClick={toggleCart}>
        <div className="cart">
          <img src={CartImg} alt="cart" />
          <span className={`cart-badge ${isArabic ? "" : "right"}`}>{cartItems?.length}</span>
        </div>
      </div>
      {isCartOpen && (
        <MiniCart isCartOpen={isCartOpen} toggleCart={toggleCart} isArabic={isArabic} />
      )}
    </div>
  );
};

export default Cart;
