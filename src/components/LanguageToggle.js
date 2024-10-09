import EnglishFlag from "../images/flag/english-flag.png";
import ArabicFlag from "../images/flag/arabic-flag.png";

const LanguageToggle = ({ toggleLanguage, isArabic, mobileClass }) => {
  return (
    <div className={mobileClass ? mobileClass : "language-toggle"} onClick={toggleLanguage}>
      {isArabic ? (
        <div className="language">
          <img src={EnglishFlag} alt="" />
          <span>Русский</span>
        </div>
      ) : (
        <div className="language">
          <img src={ArabicFlag} alt="" />
          <span>عربي</span>
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
