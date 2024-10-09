import React from "react";
import { Link } from "react-router-dom";
import PizzaCategory from "../images/categories/pizza.png";
import ChickenCategory from "../images/categories/chicken.png";
import SidesCategory from "../images/categories/sides.png";
import DrinksCategory from "../images/categories/drinks.png";
import DessertsCategory from "../images/categories/dessert.png";
import ExtrasCategory from "../images/categories/extras.png";


const MenuPage = ({ isArabic }) => {
  const categories = [
    { name: "Пицца", image: PizzaCategory, arabicName: "البيتزا", category:  "pizza" },
    { name: "Курица", image: ChickenCategory, arabicName: "الدجاج", category: "chicken" },
    { name: "Хлеб", image: SidesCategory, arabicName: "المقبلات", category: "side" },
    { name: "Напитки", image: DrinksCategory, arabicName: "المشروبات", category: "drink" },
    { name: "Дессерты", image: DessertsCategory, arabicName: "الحلويات", category: "dessert" },
    { name: "Соусы", image: ExtrasCategory, arabicName: "إضافات", category: "extra" },
  ];
  

  return (
    <section className={`category-block ${isArabic ? "rtl" : "ltr"}`}>
      
      <h1>{isArabic ? "قائمة دومينو الوطنية" : "Национальное меню DOMINO'S"}</h1>
      <p>
        {isArabic
          ? "لرؤية الأسعار والعروض والعناصر المتاحة بالضبط لك ، حدد متجرك المحلي. خصم 50٪ لجميع القائمة"
          : "Чтобы увидеть цены, предложения и точно узнать, какие товары доступны вам, выберите местный фелиал. -50% скидка на все меню."}
      </p>
      <div className={`category-list ${isArabic ? "rtl" : "ltr"}`}>
        {categories.map((category, index) => (
          <Link key={index} to={`/menu/${category.category}`} className="item">
            <img src={category.image} alt={category.name} className={isArabic ? "reversed" : ""} />
            <h2 className="name-category">{isArabic ? category.arabicName : category.name}</h2>
          </Link>
        ))}
      </div>
      <style>
        {`
          .reversed {
            transform: scaleX(-1);
          }

          .category-block {
            text-align: ${isArabic ? "right" : "left"};
          }

          .category-list .item {
            direction: ${isArabic ? "rtl" : "ltr"};
          }

          .name-category {
            position: absolute;
            color: #006491;
            left: ${isArabic ? "60%" : "20%"};
            @media screen and (max-width: 768px) {
              left: ${isArabic ? "20%" : "60%"};
            }
          }
        `}
      </style>
    </section>
  );
};

export default MenuPage;
