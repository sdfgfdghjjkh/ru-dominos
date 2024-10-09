import { useState } from "react";
import LanguageToggle from "./LanguageToggle";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/dpz-logo.svg";

const BurgerMenu = ({ toggleLanguage, isArabic }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    isArabic ? "العروض" : "ЗАКАЗАТЬ ОНЛАЙН",
    isArabic ? "للطلب" : "МЕНЮ",
    isArabic ? "القائمة" : "АКЦЦИИ",
  ];

  const handleCLick = (route) => {
    navigate(`/${route}`);
    setIsOpen(false);
  };

  // Создаем переменные для стилей меню
  const arabicMenuStyles = {
    position: "fixed",
    top: 0,
    bottom: 0,
    width: "320px",
    height: "100vh",
    background: "#006491",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "24% 10%",
    transition: "transform 0.3s, opacity 0.3s",
    gap: "0.6rem",
    zIndex: 1,
    right: 0,
    transform: isOpen ? "translateX(0)" : "translateX(100%)",
  };

  const englishMenuStyles = {
    position: "fixed",
    top: 0,
    bottom: 0,
    width: "320px",
    height: "100vh",
    background: "#006491",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "24% 10%",
    transition: "transform 0.3s, opacity 0.3s",
    gap: "0.6rem",
    zIndex: 1,
    left: 0,
    transform: isOpen ? "translateX(0)" : "translateX(-100%)",
  };

  return (
    <div
      className={`burger-menu ${isOpen ? "open" : ""} ${
        isArabic ? "rtl-menu" : "ltr-menu"
      }`}
      
    >
      <div className="burger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="menu-wrapper">
        <section className="menu-items" style={isArabic ? arabicMenuStyles : englishMenuStyles}>
          <Link to="/" className="logo-burger">
            <img src={Logo} alt="logo" />
          </Link>
          <h3 onClick={() => handleCLick("")}>{navItems[0]}</h3>
          <h3 onClick={() => handleCLick("menu")}>{navItems[1]}</h3>
          <h3 onClick={() => handleCLick("offers")}>{navItems[2]}</h3>
          {/* <LanguageToggle toggleLanguage={toggleLanguage} isArabic={isArabic} /> */}
        </section>
      </div>
    </div>
  );
};

export default BurgerMenu;
