import React from "react";

const Size = ({ el, id, activeTypes, setActiveTypes, setSelectedSize }) => {
  return (
    <li
      className={activeTypes === id ? "active" : ""}
      style={{fontSize: "12px", textAlign: "center"}}
      onClick={() => {
        setActiveTypes(id);
        setSelectedSize(+el);
      }}
      key={id}>
      {el} cm
    </li>
  );
};

export default Size;
