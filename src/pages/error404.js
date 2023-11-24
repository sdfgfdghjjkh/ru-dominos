import { Link } from "react-router-dom";

function Error404({ isArabic }) {
  const messages = {
    en: {
      title: "404",
      pageNotFound: "Page Not Found",
      description:
        "The Page you are looking for doesn't exist or an other error occured. Go to",
      linkText: "Home Page.",
    },
    ar: {
      title: "404",
      pageNotFound: "الصفحة غير موجودة",
      description: "الصفحة التي تبحث عنها غير موجودة أو حدث خطأ آخر. اذهب إلى",
      linkText: "الصفحة الرئيسية.",
    },
  };

  const currentMessages = isArabic ? messages.ar : messages.en;

  return (
    <section className="error-page">
      <div className="text-block">
        <h1>{currentMessages.title}</h1>
        <h3>{currentMessages.pageNotFound}</h3>
        <p>
          {currentMessages.description}{" "}
          <Link to="/">{currentMessages.linkText}</Link>
        </p>
      </div>
    </section>
  );
}

export default Error404;
