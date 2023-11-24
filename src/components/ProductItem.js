import React from "react";
import Size from "./Size";

const ProductItem = ({ product, isArabic, categoryName, index, notify }) => {
  const [activeTypes, setActiveTypes] = React.useState(0);
  const [selectedSize, setSelectedSize] = React.useState(20);
  return (
    <div className="product-item" key={index}>
      <img src={product.image} alt={product.name} />
      <button
        className="add_to_order_btn"
        onClick={() => notify(product, selectedSize)}
      >
        {isArabic ? "طلب" : "ORDER"}
      </button>

      {categoryName === "Pizzas" ? (
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
      ) : (
        ""
      )}

      <div className={`product-heading ${isArabic ? "rtl" : "ltr"}`}>
        <h2>{isArabic ? product.name.arabic : product.name.english}</h2>
        {categoryName === "Drinks" && <h2>{isArabic ? "1 لتر" : "1 liter"}</h2>}
      </div>

      <p className={`${isArabic ? "rtl" : "ltr"}`}>
        {isArabic ? product.description.arabic : product.description.english}
      </p>

      {categoryName === "Pizzas" && (
        <div className="pizza-size-selector">
          {/* <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(Number(e.target.value))}>
                  {product.prices &&
                    Object.keys(product.prices).map((size) => (
                      <option key={size} value={size}>
                        {size} cm
                      </option>
                    ))}
                </select> */}
        </div>
      )}
    </div>
  );
};

export default ProductItem;
