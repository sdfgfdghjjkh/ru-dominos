import React, { useState } from "react";
import "../styles/compStyles/personal-cart.scss";
import pizza from "../images/pizza_for_cart.png";

const PersonalCart = ({ isArabic }) => {
  const [count, setCount] = useState(0);
  return (
    <div className={isArabic ? "popup_container_rtl" : "popup_container_ltr"}>
      <div className="popup" id="popup">
        <div className="popup-content">
          <div className="title">
            <h2> {isArabic ? "دجاج التكا" : "PANEER TIKKA"}</h2>
            <span className="close">&times;</span>
          </div>
          <div className="line"></div>
          <p className="product_description">
            {isArabic
              ? "صلصة البيتزا، وموزاريلا، ودجاج التكا، وبصل، وفلفل أخضر، مع صوص النعناع"
              : "Fresh Paneer Tikka with red & green pepper, Onion, mozzarella and signature Marinara sauce topped with Mint sauce."}
          </p>
          <div className="line"></div>
          <div className="product">
            <h3 className="product__title"> {isArabic ? "البيتزا الخاصة بي" : "MY PIZZA"}</h3>
            <div className="product__line"></div>
            <p className="product__category">
              {isArabic ? "دجاج تكا الأصلية كبيرة" : "Large Hand Tossed Paneer Tikka"}
            </p>
            <div className="product__red_line"></div>
            <div className="product__counter">
              <button
                onClick={() => setCount((count) => (count == 0 ? 0 : count - 1))}
                className="counter__minus">
                -
              </button>
              <div className="count">{count}</div>
              <button onClick={() => setCount((count) => count + 1)} className="counter__plus">
                +
              </button>
            </div>
          </div>
          <div className="product_photo">
            <img src={pizza} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalCart;
