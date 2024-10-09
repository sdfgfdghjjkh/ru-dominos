import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productItems from "../productItems";
import { useLocation, useNavigate } from "react-router-dom";
import OfferProductItem from "../components/OfferProductItem";

const SelectedOffer = ({ isArabic }) => {
  const [choosenProducts, setChoosenProducts] = useState([]);
  const { offerMeals } = useSelector((state) => state);
  const [pizzaProducts, setPizzaProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setPizzaProducts(
      productItems
        .filter((product) => product.category === "pizza")
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

  const getRandomElements = (count) => {
    const randomElements = [];
    while (randomElements.length < count) {
      const randomIndex = Math.floor(Math.random() * pizzaProducts.length);
      const randomElement = pizzaProducts[randomIndex];
      if (!randomElements.includes(randomElement)) {
        randomElements.push({
          ...randomElement,
          price: 0,
        });
      }
    }
    return randomElements;
  };

  const choosePizza = (item, size) => {
    if (item.choosen) {
      setPizzaProducts(
        pizzaProducts.map((el) => {
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
    } else {
      const filteredPizzas = offerMeals.filter((el) => el.category === "pizza");
      if (offerType === "get_free") {
        if (choosenProducts.length === 4) {
          setChoosenProducts([]);
          setChoosenProducts([{ ...item, choosen: true, size, price: item?.prices[size] }]);
          const randomPizzas = getRandomElements(3);

          // Обновляем состояние с использованием функции обратного вызова
          setChoosenProducts((prevProducts) => [...prevProducts, ...randomPizzas]);
          setPizzaProducts(
            pizzaProducts.map((elem) => {
              return elem.name === item.name
                ? {
                    ...elem,
                    choosen: true,
                  }
                : {
                    ...elem,
                    choosen: false,
                  };
            }),
          );
        } else {
          setChoosenProducts([{ ...item, choosen: true, size, price: item?.prices[size] }]);
          const randomPizzas = getRandomElements(3);

          // Обновляем состояние с использованием функции обратного вызова
          setChoosenProducts((prevProducts) => [...prevProducts, ...randomPizzas]);
          setPizzaProducts(
            pizzaProducts.map((elem) => {
              if (elem.name.english == item.name.english) {
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
        }
      } else if (offerType == "meal_one") {
        if (filteredPizzas.length <= 2) {
          if (offerMeals.length === 1) {
            dispatch({
              type: "REMOVE_FROM_OFFERS",
              payload: offerMeals[0]?.name,
            });
            dispatch({
              type: "ADD_OFFER_MEAL",
              payload: { ...item, price: "3.50", choosen: true },
            });
            setPizzaProducts(
              pizzaProducts.map((elem) => {
                if (elem.name.english == offerMeals[0]?.name.english) {
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
            dispatch({
              type: "ADD_OFFER_MEAL",
              payload: { ...item, price: "3.50", choosen: true },
            });
            setPizzaProducts(
              pizzaProducts.map((elem) => {
                if (elem.name.english == item.name.english) {
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
          }
        }
      } else if (offerType == "meal_two") {
        if (filteredPizzas.length <= 3) {
          if (filteredPizzas.length === 2) {
            dispatch({
              type: "REMOVE_FROM_OFFERS",
              payload: offerMeals[0]?.name,
            });
            dispatch({
              type: "ADD_OFFER_MEAL",
              payload: { ...item, price: "3.00", choosen: true },
            });
            setPizzaProducts(
              pizzaProducts.map((elem) => {
                if (elem.name.english == offerMeals[0]?.name.english) {
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
            dispatch({
              type: "ADD_OFFER_MEAL",
              payload: { ...item, price: "3.00", choosen: true },
            });
            setPizzaProducts(
              pizzaProducts.map((elem) => {
                if (elem.name.english == item.name.english) {
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
          }
        }
      }
    }
  };

  const pizzaForChoose = () => {
    if (offerType === "meal_two") {
      return "2";
    } else {
      return "1";
    }
  };
  const pizzaCount = pizzaForChoose();

  const handleCheckout = () => {
    const filteredPizzas = offerMeals.filter((item) => item.category === "pizza");
    if (offerType === "get_free" && choosenProducts.length == 4) {
      navigate("/checkout", { state: { offer: choosenProducts } });
    } else if (offerType === "meal_one" && filteredPizzas.length === 1) {
      navigate("/offer/chicken", { state: { offer } });
    } else if (offerType === "meal_two" && filteredPizzas.length === 2) {
      navigate("/offer/chicken", { state: { offer } });
    }
  };

  return (
    <section>
      <button onClick={handleCheckout} className="continue-fixed">
        {isArabic ? "يكمل" : "Продолжить"}
      </button>
      <h2 className={isArabic ? "choose-product-rtl" : "choose-product-ltr"}>
        {isArabic ? `اختر ${pizzaCount} بيتزا من أي نوع` : `Выберите ${pizzaCount}`}
      </h2>
      <div style={{ marginTop: "50px" }} className={`fill-bar ${isArabic ? "rtl" : "ltr"}`}>
        <span>{isArabic ? "بيتزا" : "Пиццы"}</span>
      </div>

      <div className={`product-list ${isArabic ? "rtl" : "ltr"}`}>
        {pizzaProducts?.map((product, index) => (
          <OfferProductItem
            product={product}
            index={index}
            isArabic={isArabic}
            choosePizza={choosePizza}
          />
        ))}
      </div>
    </section>
  );
};

export default SelectedOffer;
