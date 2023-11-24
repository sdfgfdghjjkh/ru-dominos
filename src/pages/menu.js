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
    { name: "Pizzas", image: PizzaCategory, arabicName: "البيتزا" },
    { name: "Chicken", image: ChickenCategory, arabicName: "الدجاج" },
    { name: "Sides", image: SidesCategory, arabicName: "المقبلات" },
    { name: "Drinks", image: DrinksCategory, arabicName: "المشروبات" },
    { name: "Desserts", image: DessertsCategory, arabicName: "الحلويات" },
    { name: "Extras", image: ExtrasCategory, arabicName: "إضافات" },
  ];
  

  return (
    <section className={`category-block ${isArabic ? "rtl" : "ltr"}`}>
      
      <h1>{isArabic ? "قائمة دومينو الوطنية" : "DOMINO'S NATIONAL MENU"}</h1>
      <p>
        {isArabic
          ? "لرؤية الأسعار والعروض والعناصر المتاحة بالضبط لك ، حدد متجرك المحلي. خصم 50٪ لجميع القائمة"
          : "To see prices, offers, and exactly what items are available to you, select your local store. -50% discount for all menu"}
      </p>
      <div className={`category-list ${isArabic ? "rtl" : "ltr"}`}>
        {categories.map((category, index) => (
          <Link key={index} to={`/menu/${category.name}`} className="item">
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
