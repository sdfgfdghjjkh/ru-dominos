import FaceBook from "../images/contact/facebook.png";
import Twitter from "../images/contact/twitter.png";
import Instagram from "../images/contact/instagram.png";
import YouTube from "../images/contact/youtube.png";
import Sponsor from "../images/footer/sponsor.png";

import AppStore from "../images/footer/app-store.png";
import GooglePlay from "../images/footer/app-store-android.png";
import AppGallery from "../images/footer/app-store-huawei.png";

const Footer = ({ isArabic }) => {
  const footerItems = [
    {
      text: isArabic ? "التغذية" : "Питание",
      link: "http://cdn.dpz.bz/ae/nutritional_facts/UAE_NutritionalFacts.pdf",
    },
    {
      text: isArabic ? "ردود الفعل" : "Обратная связь",
      link: "http://feedbackdominos.com/",
    },
    {
      text: isArabic ? "وظائف" : "Вакансии",
      link: "https://forms.office.com/r/R1ye7mkj9X",
    },
    {
      text: isArabic ? "سياسة الخصوصية" : "Политика Конфиденциальности",
      link: "https://www.dominos.ae/en/#/content/privacy/",
    },
  ];

  const info = isArabic
    ? "ضمان دومينوز: إذا لم تكن راضيا عن خدمتنا، سيتم تصحيح ذلك فوراً "
    : "Наша гарантия: если вы не полностью удовлетворены, мы исправим это.";

  return (
    <section className="content">
      <section className={`navigation-items ${isArabic ? "rtl" : "ltr"}`}>
        {footerItems.map((item, index) => (
          <div className={`item ${isArabic ? "rtl" : "ltr"}`} key={index}>
            {index > 0 && !isArabic && <span className="item-stick">|</span>}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <span>{item.text}</span>
            </a>
            {index > 0 && isArabic && <span className="item-stick">|</span>}
          </div>
        ))}
      </section>

      <section className={`social-items ${isArabic ? "rtl" : "ltr"}`}>
        <div className="facebook">
          <a
            href="https://www.facebook.com/DominosEgypt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FaceBook} alt="facebook" />
          </a>
        </div>
        <div className="twitter">
          <a
            href="https://twitter.com/dominosegypt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter} alt="twitter" />
          </a>
        </div>
        <div className="instagram">
          <a
            href="https://www.instagram.com/dominosegypt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="instagram" />
          </a>
        </div>
        <div className="youtube">
          <a
            href="https://www.youtube.com/channel/UCBZE3YjFPQBgITrz59PUoJQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={YouTube} alt="youtube" />
          </a>
        </div>
        {/* <div className="pepsi">
          <img src={Sponsor} alt="pepsi" />
        </div> */}
        {/* <div className="app-store">
          <a
            href="https://apps.apple.com/eg/app/dominos-pizza/id1077828937?platform=iphone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={AppStore} alt="app-store" />
          </a>
        </div>
        <div className="google-play">
          <a
            href="https://play.google.com/store/apps/details?id=com.dominos.international"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GooglePlay} alt="google-play" />
          </a>
        </div>
        <div className="app-gallery">
          <a
            href="https://appgallery.huawei.com/app/C101232619"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={AppGallery} alt="app-gallery" />
          </a>
        </div> */}
      </section>

      <p className={`info ${isArabic ? "rtl" : "ltr"}`}>{info}</p>
    </section>
  );
};

export default Footer;
