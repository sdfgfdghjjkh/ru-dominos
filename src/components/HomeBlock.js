import { Link } from "react-router-dom";

const HomeBlock = ({ isArabic, imageSrc, buttonText, link }) => {
  return (
    <div className="home-item">
      <img src={isArabic ? imageSrc.arabic : imageSrc.english} alt="Image" />
      <Link to={link}>
        <button>{isArabic ? buttonText.arabic : buttonText.english}</button>
      </Link>
    </div>
  );
};

export default HomeBlock;
