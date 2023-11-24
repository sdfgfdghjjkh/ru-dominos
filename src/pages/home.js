import HomeBlock from "../components/HomeBlock";
// import MiniCart from "../components/MiniCart";
// import PersonalCart from "../components/PersonalCart";
import ArabicMenu from "../images/menu-arabic.png";
import EnglishMenu from "../images/menu-english.png";
import ArabicOffer from "../images/offers-arabic.png";
import EnglishOffer from "../images/offers-english.png";
import LoaderPage from "./loader";

const HomePage = ({ isArabic }) => {
  const menuBlockData = {
    isArabic,
    imageSrc: {
      arabic: ArabicMenu,
      english: EnglishMenu,
    },
    buttonText: {
      arabic: "للطلب",
      english: "MENU",
    },
    link: "/menu",
  };

  const offersBlockData = {
    isArabic,
    imageSrc: {
      arabic: ArabicOffer,
      english: EnglishOffer,
    },
    buttonText: {
      arabic: "العروض",
      english: "OFFERS",
    },
    link: "/offers",
  };

  return (
    <div className="home-block">
      {/* <video src="../images/dominos-loader.mp4"></video> */}
      <HomeBlock {...menuBlockData} />
      <HomeBlock {...offersBlockData} />
    </div>
  );
};

export default HomePage;
