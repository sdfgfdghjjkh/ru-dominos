import React from "react";
import Size from "./Size";

const OfferProductItem = ({ index, product, choosePizza, isArabic }) => {
  const [activeTypes, setActiveTypes] = React.useState(0);
  const [selectedSize, setSelectedSize] = React.useState(20);
  return (
    <div className="product-item" key={index}>
      <img src={product.image} alt={product.name} />
      <div className="selector">
        <ul>
          {product.prices &&
            Object.keys(product.prices).map((el, id) => (
              <Size
                setSelectedSize={setSelectedSize}
                activeTypes={activeTypes}
                setActiveTypes={setActiveTypes}
                el={el}
                id={id}
              />
            ))}
        </ul>
      </div>
      {product.choosen ? (
        <button onClick={() => choosePizza(product)} className="added_to_order_btn">
          {isArabic ? "مختار" : "CHOOSEN"}
        </button>
      ) : (
        <button onClick={() => choosePizza(product, selectedSize)} className="add_to_order_btn">
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
  );
};

export default OfferProductItem;
