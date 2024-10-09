import React, { useEffect } from "react";
import offer1 from "../images/banner1.png";
import offer2 from "../images/banner2.png";
import offer3 from "../images/banner3.png";
import offer4 from "../images/banner4.png";
import offer1_ar from "../images/banner1-ar.png";
import offer2_ar from "../images/banner2-ar.png";
import offer3_ar from "../images/banner3-ar.png";
import offer4_ar from "../images/banner4-ar.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Offers = ({ isArabic }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOrder = () => {
    navigate("/order");
  };
  useEffect(() => {
    dispatch({ type: "CLEAR_OFFERS", payload: [] });
  }, []);

  const handleClick = (offer) => {
    if (offer == "get_free") {
      navigate("/offer/pizzas", { state: { offer } });
    } else if (offer == "meal_one") {
      navigate("/offer/pizzas", { state: { offer } });
    } else if (offer == "meal_two") {
      navigate("/offer/pizzas", { state: { offer } });
    } else if (offer == "menu") {
      navigate("/menu/pizza");
    }
  };

  // large 19.95, medium 11.95

  return (
    <div className="offers-wrapper">
      <div className="container">
        <div className="main-offers-top">
          <div className="main-offers-line"></div>
          <div className="main-offers-top-middle">
            <h2>ЗДЕЛАЙТЕ ЗАКАЗ УЖЕ СЕЙЧАС</h2>
            <button onClick={handleOrder}>ДОСТАВКА</button>
          </div>
          <div className="main-offers-line"></div>
        </div>
        <div className="main-offers-wrapper">
          <img onClick={() => handleClick("get_free")} src={isArabic ? offer1_ar : offer1} alt="" />
          <div className="main-small-offers">
            <img
              onClick={() => handleClick("meal_two")}
              src={isArabic ? offer2_ar : offer2}
              alt=""
            />
            <img
              onClick={() => handleClick("meal_one")}
              src={isArabic ? offer3_ar : offer3}
              alt=""
            />
          </div>
        </div>
        <div>
          <img
            onClick={() => handleClick("menu")}
            className="main-last-offer"
            src={isArabic ? offer4_ar : offer4}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
