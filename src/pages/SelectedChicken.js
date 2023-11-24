import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productItems from "../productItems";
import { useLocation, useNavigate } from "react-router-dom";

const SelectedChicken = ({ isArabic }) => {
  const [choosenProducts, setChoosenProducts] = useState([]);
  const { offerMeals } = useSelector((state) => state);
  const [chickenProducts, setChickenProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setChickenProducts(
      productItems
        .filter((product) => product.category === "Chicken")
        .map((el) => {
          return {
            ...el,
            choosen: false,
          };
        }),
    );
  }, []);
  const navigate = useNavigate();
  const {
    state: { offer },
  } = useLocation();
  const offerType = offer && offer;

  const chickenForChoose = () => {
    if (offerType === "meal_two") {
      return "2";
    } else {
      return "1";
    }
  };
  const chickenCount = chickenForChoose();

  //   const getRandomElements = (count) => {
  //     const randomElements = [];
  //     while (randomElements.length < count) {
  //       const randomIndex = Math.floor(Math.random() * pizzaProducts.length);
  //       const randomElement = pizzaProducts[randomIndex];
  //       if (!randomElements.includes(randomElement)) {
  //         randomElements.push({
  //           ...randomElement,
  //           price: 0,
  //         });
  //       }
  //     }
  //     return randomElements;
  //   };

  //   useEffect(() => {
  //     if (offerMeals.length === 4) {
  //       navigate("/checkout", { state: { offer: offerMeals } });
  //     }
  //   }, [offerMeals]);

  const chooseChicken = (item) => {
    if (item.choosen) {
      setChickenProducts(
        chickenProducts.map((el) => {
          return item.name.english === el.name.english
            ? {
                ...el,
                choosen: false,
              }
            : el;
        }),
      );
      dispatch({
        type: "REMOVE_FROM_OFFERS",
        payload: item.name,
      });
      setChoosenProducts(offerMeals.filter((el) => el.name !== item.name));
    }
    const filteredChicken = offerMeals.filter((el) => el.category === "Chicken");
    if (offerType == "meal_one") {
      if (filteredChicken.length <= 1) {
        if (filteredChicken.length === 1) {
          dispatch({
            type: "REMOVE_FROM_OFFERS",
            payload: offerMeals[1]?.name,
          });
          dispatch({ type: "ADD_OFFER_MEAL", payload: { ...item, price: "2.50", choosen: true } });
          setChickenProducts(
            chickenProducts.map((elem) => {
              return elem.name === item.name
                ? {
                    ...elem,
                    choosen: !elem.choosen,
                  }
                : elem.name === offerMeals[1]?.name
                ? {
                    ...elem,
                    choosen: !elem.choosen,
                  }
                : {
                    ...elem,
                  };
            }),
          );
        } else {
          dispatch({ type: "ADD_OFFER_MEAL", payload: { ...item, price: "2.50", choosen: true } });
          setChickenProducts(
            chickenProducts.map((elem) => {
              return elem.name === item.name
                ? {
                    ...elem,
                    choosen: !elem.choosen,
                  }
                : {
                    ...elem,
                  };
            }),
          );
        }
      }
    } else if (offerType == "meal_two") {
      if (filteredChicken.length <= 3) {
        if (offerMeals.length === 4) {
          dispatch({
            type: "REMOVE_FROM_OFFERS",
            payload: offerMeals[2]?.name,
          });
          dispatch({ type: "ADD_OFFER_MEAL", payload: { ...item, price: "2.50", choosen: true } });
          setChickenProducts(
            chickenProducts.map((elem) => {
              return elem.name === item.name
                ? {
                    ...elem,
                    choosen: !elem.choosen,
                  }
                : elem.name === offerMeals[2]?.name
                ? {
                    ...elem,
                    choosen: !elem.choosen,
                  }
                : {
                    ...elem,
                  };
            }),
          );
        } else {
          dispatch({ type: "ADD_OFFER_MEAL", payload: { ...item, price: "2.50", choosen: true } });
          setChickenProducts(
            chickenProducts.map((elem) => {
              return elem.name === item.name
                ? {
                    ...elem,
                    choosen: !elem.choosen,
                  }
                : elem;
            }),
          );
        }
      }
    }
  };

  // useEffect(() => {
  //   const filteredDrinks = offerMeals.filter((item) => item.category === "Drinks");
  //   if (offerType === "meal_one" && filteredDrinks.length === 1) {
  //     navigate("/checkout", { state: { offer: offerMeals } });
  //   } else if (offerType === "meal_two" && filteredDrinks.length === 2) {
  //     navigate("/checkout", { state: { offer: offerMeals } });
  //   }
  // }, [offerMeals]);

  const handleCheckout = () => {
    const filteredChickens = offerMeals.filter((item) => item.category === "Chicken");
    if (offerType === "meal_one" && filteredChickens.length === 1) {
      navigate("/offer/drinks", { state: { offer: offer } });
    } else if (offerType === "meal_two" && filteredChickens.length === 2) {
      navigate("/offer/drinks", { state: { offer: offer } });
    }
  };

  return (
    <section>
      {/* <h1 className={`heading ${isArabic ? "rtl" : "ltr"}`}>
        {isArabic ? arabicCategoryNames[categoryName] : categoryName}
      </h1>
      */}
      <button onClick={handleCheckout} className="continue-fixed">
        {isArabic ? "يكمل" : "Continue"}
      </button>
      <h2 className={isArabic ? "choose-product-rtl" : "choose-product-ltr"}>
        {isArabic ? `أي دجاج ${chickenCount} أي مشروب` : `Choose ${chickenCount} any chicken`}
      </h2>
      <>
        <div style={{ marginTop: "50px" }} className={`fill-bar ${isArabic ? "rtl" : "ltr"}`}>
          <span>{isArabic ? "مشروبات" : "Drinks"}</span>
        </div>
        <div className={`product-list ${isArabic ? "rtl" : "ltr"}`}>
          {chickenProducts?.map((product, index) => (
            <div className="product-item" key={index}>
              <img src={product.image} alt={product.name} />
              {product?.choosen ? (
                <button onClick={() => chooseChicken(product)} className="added_to_order_btn">
                  {isArabic ? "مختار" : "CHOOSEN"}
                </button>
              ) : (
                <button onClick={() => chooseChicken(product)} className="add_to_order_btn">
                  {isArabic ? "يختار" : "CHOOSE"}
                </button>
              )}
              <h2 className={`product-heading ${isArabic ? "rtl" : "ltr"}`}>
                {isArabic ? product.name.arabic : product.name.english}
              </h2>
              <p className={`${isArabic ? "rtl" : "ltr"}`}>
                {isArabic ? product.description.arabic : product.description.english}
              </p>
            </div>
          ))}
        </div>
      </>
    </section>
  );
};

export default SelectedChicken;
