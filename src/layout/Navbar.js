import Logo from "../images/dpz-logo.svg";
import BurgerMenu from "../components/BurgerMenu";
// import LanguageToggle from "../components/LanguageToggle";

import Cart from "../components/Cart";
import { Link } from "react-router-dom";

const Navbar = ({ isArabic, toggleLanguage }) => {
  const navItems = [
    isArabic ? "العروض" : "ЗАКАЗАТЬ ОНЛАЙН",
    isArabic ? "للطلب" : "МЕНЮ",
    isArabic ? "القائمة" : "АКЦЦИИ",
  ];

  return (
    <nav className={`navbar ${isArabic ? "rtl" : "ltr"}`}>
      <section className={`items ${isArabic ? "rtl" : "ltr"}`}>
        <BurgerMenu isArabic={isArabic} toggleLanguage={toggleLanguage} />
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>
        <section className="nav-items">
          <Link className="item" to="/menu">
            {navItems[0]}
          </Link>
          <Link className="item" to="/menu">
            {navItems[1]}
          </Link>
          <Link className="item" to="/offers">
            {navItems[2]}
          </Link>
        </section>
      </section>
      <div className={`panel ${isArabic ? "rtl" : "ltr"}`}>
        {/* <LanguageToggle
          mobileClass="mobile-language-toggle-menu"
          toggleLanguage={toggleLanguage}
          isArabic={isArabic}
        /> */}
        <Cart isArabic={isArabic} />
      </div>
    </nav>
  );
};

export default Navbar;
