import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import pizza from "../images/pizza-card.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function MiniCart({ isArabic, toggleCart, isCartOpen }) {
  // useEffect(() => {
  //   // Добавить класс для отключения скролла при открытии модального окна
  //   if (isCartOpen) {
  //     document.body.classList.add("no-scroll");
  //   } else {
  //     // Убрать класс для включения скролла при закрытии модального окна
  //     document.body.classList.remove("no-scroll");
  //   }

  //   // Очистить класс при размонтировании компонента
  //   return () => {
  //     document.body.classList.remove("no-scroll");
  //   };
  // }, [isCartOpen]);
  const { cartItems } = useSelector((state) => state);
  const [showDetails, setShowDetails] = useState(false);
  const dispatch = useDispatch();
  const modalRef = useRef();
  const navigate = useNavigate();

  const setIsShow = (name) => {
    dispatch({
      type: "SET_IS_SHOW",
      payload: name,
    });
  };
  const orderTotal = cartItems?.reduce((acc, curr) => {
    return (acc += curr?.count * +curr?.price);
  }, 0);

  const handleClick = () => {
    toggleCart();
    navigate("/checkout");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        toggleCart();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleCart]);

  return (
    <>
      <div ref={modalRef} className={isArabic ? "cart_popup_rtl" : "cart_popup_ltr"}>
        <div className="cart_popup_content">
          <div className="cart">
            <div className="cart__title"> {isArabic ? "استعراض الطلب" : "YOUR CART"}</div>
            <div className="cart__line"></div>
            <div className="cart__details">
              <div className="cart__details_helper_text">
                {isArabic
                  ? "سنبقي عربة التسوق الخاصة بك جاهزة لك! اطلب في أي وقت اليوم."
                  : "We'll keep your cart ready for you! Order any time today."}
              </div>
              {cartItems?.map((item) => (
                <>
                  <div className="cart__details_product">
                    <div className="cart__details_product_info">
                      <div className="cart__details_product_info_photo">
                        <img src={item?.image} alt="" />
                      </div>
                      <div className="cart__details_product_info_title">
                        <h4>{isArabic ? item?.name?.arabic : item?.name?.english}</h4>
                        {item?.description?.english !== "" ? (
                          <div onClick={() => setIsShow(item?.name?.english)}>
                            <span>{isArabic ? <IoMdArrowDropleft /> : <IoMdArrowDropright />}</span>
                            <p>{isArabic ? "ظهار الإضافات الأخرى:" : "Show toppings:"}</p>
                          </div>
                        ) : (
                          ""
                        )}
                        {item?.isShow ? (
                          <p className="cart_item_desc">
                            {isArabic ? item.description.arabic : item?.description?.english}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                      <span>{item?.size}sm</span>
                    </div>
                    <b style={{ width: "140px", display: "flex", justifyContent: "right" }}>
                      {isArabic
                        ? +item?.price * +item?.count + " درهم"
                        : +item?.price * +item?.count + " AED"}
                    </b>
                  </div>
                  <div className="cart__details_product_actions">
                    <div className="quantity">
                      <span>{isArabic ? "الكمية:" : "Quantity:"}</span>
                      <input
                        min={1}
                        type="number"
                        value={item?.count}
                        onChange={(e) =>
                          dispatch({
                            type: "CHANGE_COUNT",
                            payload: {
                              ...item,
                              count: +e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <span>|</span>
                    <div className="action_btns">
                      <button
                        onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}
                        className="remove_btn">
                        {isArabic ? "حذف" : "Remove"}
                      </button>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="cart__line"></div>
          </div>
          <div className="cart_footer">
            <div className="cart__details_total">
              <span className="total_price">
                {isArabic
                  ? "الطلب الكلي:" + orderTotal + " AED"
                  : "Order Total: " + orderTotal + "AED"}
              </span>
              <span onClick={handleClick} className="push_btn">
                <button>{isArabic ? "استعراض الطلب" : "GO TO CHECKOUT"}</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MiniCart;
