import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productItems from "../productItems";
import { useLocation, useNavigate } from "react-router-dom";

const SelectedDrinks = ({ isArabic }) => {
  const [choosenProducts, setChoosenProducts] = useState([]);
  const { offerMeals } = useSelector((state) => state);
  const [drinkProducts, setDrinkProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setDrinkProducts(
      productItems
        .filter((product) => product.category === "drink")
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

  const drinkForChoose = () => {
    if (offerType === "meal_two") {
      return "2";
    } else {
      return "1";
    }
  };
  const drinksCount = drinkForChoose();

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

  const chooseDrink = (item) => {
    if (item.choosen) {
      setDrinkProducts(
        drinkProducts.map((el) => {
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
        payload: item.name.english,
      });
      setChoosenProducts(offerMeals.filter((el) => el.name !== item.name));
    }
    const filteredDrinks = offerMeals.filter((el) => el.category === "drink");
    if (offerType == "meal_one") {
      if (filteredDrinks.length <= 1) {
        if (filteredDrinks.length === 1) {
          dispatch({
            type: "REMOVE_FROM_OFFERS",
            payload: filteredDrinks[0].name,
          });
          dispatch({ type: "ADD_OFFER_MEAL", payload: { ...item, price: "1.99", choosen: true } });
          setDrinkProducts(
            drinkProducts.map((elem) => {
              if (elem.name.english == filteredDrinks[0]?.name.english) {
                return {
                  ...elem,
                  choosen: !elem.choosen,
                };
              } else if (elem.name.english == item.name.english) {
                return {
                  ...elem,
                  choosen: !elem.choosen,
                };
              } else
                return {
                  ...elem,
                };
            }),
          );
        } else {
          dispatch({ type: "ADD_OFFER_MEAL", payload: { ...item, price: "1.99", choosen: true } });
          setDrinkProducts(
            drinkProducts.map((elem) => {
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
      if (filteredDrinks.length < 3) {
        if (filteredDrinks.length === 2) {
          dispatch({
            type: "REMOVE_FROM_OFFERS",
            payload: filteredDrinks[0].name,
          });
          dispatch({ type: "ADD_OFFER_MEAL", payload: { ...item, price: "1.495", choosen: true } });
          setDrinkProducts(
            drinkProducts.map((elem) => {
              if (elem.name.english == filteredDrinks[0]?.name.english) {
                return {
                  ...elem,
                  choosen: !elem.choosen,
                };
              } else if (elem.name.english == item.name.english) {
                return {
                  ...elem,
                  choosen: !elem.choosen,
                };
              } else
                return {
                  ...elem,
                };
            }),
          );
        } else {
          dispatch({ type: "ADD_OFFER_MEAL", payload: { ...item, price: "1.495", choosen: true } });
          setDrinkProducts(
            drinkProducts.map((elem) => {
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
    const filteredDrinks = offerMeals.filter((item) => item.category === "drink");
    if (offerType === "meal_one" && filteredDrinks.length === 1) {
      navigate("/checkout", { state: { offer: offerMeals } });
    } else if (offerType === "meal_two" && filteredDrinks.length === 2) {
      navigate("/checkout", { state: { offer: offerMeals } });
    }
  };

  return (
    <section>
      {/* <h1 className={`heading ${isArabic ? "rtl" : "ltr"}`}>
        {isArabic ? arabicCategoryNames[categoryName] : categoryName}
      </h1>
      */}
      <button onClick={handleCheckout} className="continue-fixed">
        {isArabic ? "يكمل" : "Продолжить"}
      </button>
      <h2 className={isArabic ? "choose-product-rtl" : "choose-product-ltr"}>
        {isArabic ? `اختر ${drinksCount} أي مشروب` : `Выберите ${drinksCount}`}
      </h2>
      <>
        <div style={{ marginTop: "50px" }} className={`fill-bar ${isArabic ? "rtl" : "ltr"}`}>
          <span>{isArabic ? "مشروبات" : "Напитки"}</span>
        </div>
        <div className={`product-list ${isArabic ? "rtl" : "ltr"}`}>
          {drinkProducts?.map((product, index) => (
            <div className="product-item" key={index}>
              <img src={product.image} alt={product.name} />
              {product?.choosen ? (
                <button onClick={() => chooseDrink(product)} className="added_to_order_btn">
                  {isArabic ? "مختار" : "ВЫБРАНО"}
                </button>
              ) : (
                <button onClick={() => chooseDrink(product)} className="add_to_order_btn">
                  {isArabic ? "يختار" : "ВЫБРАТЬ"}
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

export default SelectedDrinks;
