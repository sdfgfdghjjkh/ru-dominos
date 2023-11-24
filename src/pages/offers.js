import englishOfferOne from "../images/offers/en/en-offer-one.png";
import englishOfferTwo from "../images/offers/en/en-offer-two.png";
import englishOfferThree from "../images/offers/en/en-offer-three.png";
import englishOfferFour from "../images/offers/en/en-offer-four.png";
import englishOfferFive from "../images/offers/en/en-offer-five.png";
import englishOfferSix from "../images/offers/en/en-offer-six.png";

import ArabicOfferOne from "../images/offers/ae/ae-offer-one.png";
import ArabicOfferTwo from "../images/offers/ae/ae-offer-two.png";
import ArabicOfferThree from "../images/offers/ae/ae-offer-three.png";
import ArabicOfferFour from "../images/offers/ae/ae-offer-four.png";
import ArabicOfferFive from "../images/offers/ae/ae-offer-five.png";
import ArabicOfferSix from "../images/offers/ae/ae-offer-six.png";
import { Link, useNavigate } from "react-router-dom";

const OffersPage = ({ isArabic }) => {
  const currency = isArabic ? "درهم" : "AED";
  const navigate = useNavigate();

  const offerItems = [
    {
      img: isArabic ? ArabicOfferOne : englishOfferOne,
      price: 94.44,
      description: {
        arabic: "3 بيتزا كبيرة + 10 قطع دجاج كيكرز + عصي الخبز + 2.28 لتر بيبسي",
        english: "3 Large Pizzas + 10pcs Chicken Kickers + Breadsticks + 2.28L Pepsi",
      },
    },
    {
      img: isArabic ? ArabicOfferTwo : englishOfferTwo,
      price: 75.99,
      description: {
        arabic: "3 بيتزا متوسطة + عصي الخبز + بطاطا مقلية + كراونيز + 2.28 لتر بيبسي",
        english: "3 Medium Pizzas + Breadsticks + Potato Wedges + Crownies + 2.28L Pepsi",
      },
    },
    {
      img: isArabic ? ArabicOfferThree : englishOfferThree,
      price: 80.99,
      description: {
        arabic: "3 بيتزا متوسطة + 8 قطع دجاج كيكرز + بطاطا مقلية + 2.28 لتر بيبسي",
        english: "3 Medium Pizzas + 8pcs Chicken Kickers + Potato Wedges + 2.28L Pepsi",
      },
    },
    {
      img: isArabic ? ArabicOfferFour : englishOfferFour,
      price: 65.99,
      description: {
        arabic: "2 بيتزا متوسطة + عصي الخبز + بطاطا مقلية + 2.28 لتر بيبسي",
        english: "2 Medium Pizzas + Breadsticks + Potato Wedges + 2.28L Pepsi",
      },
    },
    {
      img: isArabic ? ArabicOfferFive : englishOfferFive,
      price: 280.0,
      description: {
        arabic:
          "احصل على 6 بيتزا كبيرة + 2 x 10 قطع دجاج كيكرز + 3 بطاطا مقلية + 2 كراونيز + 2 x 2.28 لتر بيبسي",
        english:
          "Get 6 Large Pizzas + 2 x 10 Chicken Kickers + 3 Potato Wedges + 2 Crownies + 2 x 2.28L Pepsi",
      },
    },
    {
      img: isArabic ? ArabicOfferSix : englishOfferSix,
      price: 420.99,
      description: {
        arabic:
          "احصل على 10 بيتزا كبيرة + 3 x 10 قطع دجاج كيكرز + 4 بطاطا مقلية + 3 كراونيز + 3 x 2.28 لتر بيبسي.",
        english:
          "Get 10 Large Pizzas + 3 x 10 Chicken Kickers + 4 Potato Wedges + 3 Crownies + 3 x 2.28L Pepsi.",
      },
    },
  ];

  const handlePaymentClick = (offer) => {
    // const discount = (+offer.price / 100) * 35;
    navigate("/checkout", { state: { offer: [offer] } });
  };

  const heading = isArabic ? "العروض" : "OFFERS";
  const view = isArabic ? "عرض الكل" : "VIEW ALL";

  return (
    <section>
      <h1 className={`heading ${isArabic ? "rtl" : "ltr"}`}>{heading}</h1>
      <div className={`fill-bar ${isArabic ? "rtl" : "ltr"}`}>{view}</div>
      <section className={`offer-list ${isArabic ? "rtl" : "ltr"}`}>
        {offerItems.map((offer, index) => (
          <div onClick={() => handlePaymentClick(offer)} key={index} className="offer-item">
            <img src={offer.img} alt={`Offer ${index + 1}`} />
            <div className="offer-details">
              <span className="offer-price">
                {offer.price}
                {currency}
              </span>
              <p className={`offer-description ${isArabic ? "rtl" : "ltr"}`}>
                {isArabic ? offer.description.arabic : offer.description.english}
              </p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default OffersPage;
