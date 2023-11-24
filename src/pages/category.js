import { useParams } from "react-router-dom";
import productItems from "../productItems";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Size from "../components/Size";
import ProductItem from "../components/ProductItem";

const CategoryPage = ({ isArabic }) => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state);
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  const products = productItems.filter((product) => product.category === categoryName);


  const notify = (product, size) => {
    const price = product.price || product.prices[size];

    toast.success(isArabic ? "تمت الإضافة إلى سلة التسوق" : "Added To Cart", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    if (categoryName === "Pizzas") {
      dispatch({ type: "ADD_TO_CART", payload: { ...product, size, price } });
    } else {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...product, price },
      });
    }
  };

  const view = isArabic ? "عرض الكل" : "DOMINO’S SELECTION";
  const viewPrice = isArabic ? "الأسعار متاحة عند الطلب" : "PRICING AVAILABLE WHEN ORDERING";

  const arabicCategoryNames = {
    Pizzas: "البيتزا",
    Chicken: "الدجاج",
    Sides: "المقبلات",
    Drinks: "المشروبات",
    Desserts: "الحلويات",
    Extras: "إضافات",
  };

  const [date, setDate] = useState("");
  const [isTimerFinished, setIsTimerFinished] = useState(false);
  const [countdown, setCountdown] = useState(15);
  const [restartTimer, setRestartTimer] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const formattedDate = new Date().toLocaleString();
    setDate(formattedDate);
  }, []);
  useEffect(() => {
    const handleTimeout = () => {
      setTimeout(() => {
        setIsTimerFinished(true);
      }, 15000);
    };
    handleTimeout();
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(handleTimeout);
    };
  }, [restartTimer]);

  return (
    <section>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="light"
      />
      <h1 className={`heading ${isArabic ? "rtl" : "ltr"}`}>
        {isArabic ? arabicCategoryNames[categoryName] : categoryName}
      </h1>
      <div className={`fill-bar ${isArabic ? "rtl" : "ltr"}`}>
        <span>{view}</span>
        <span>{viewPrice}</span>
      </div>

      <div className={`product-list ${isArabic ? "rtl" : "ltr"}`}>
        {products.map((product, index) => (
          <ProductItem
            product={product}
            isArabic={isArabic}
            index={index}
            categoryName={categoryName}
            notify={notify}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;
