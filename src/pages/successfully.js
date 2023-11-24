import { Link } from "react-router-dom";
import successfully from "../images/SUCCESSFULLY.png"
import { useEffect, useState } from "react";

const SuccessfullyPage = ({ isArabic }) => {
  const messages = {
    en: {
      title: "ORDER SUCCESSFULLY ACCEPTED",
      btn: "Home",
    },
    ar: {
      title: "تم قبول الطلب بنجاح",
      btn: "بيت",
    },
  };

  const [date, setDate] = useState("");
  const [isTimerFinished, setIsTimerFinished] = useState(false);
  const [countdown, setCountdown] = useState(15);
  const [restartTimer, setRestartTimer] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const formattedDate = new Date().toLocaleString();
    setDate(formattedDate);
  }, []);
  useEffect(() => {
    const handleTimeout = () => {
      setTimeout(() => {
        setIsTimerFinished(true);
      }, 15000);
    };
    handleTimeout();
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(handleTimeout);
    };
  }, [restartTimer]);

  const currentMessages = isArabic ? messages.ar : messages.en;
  return (
    <section className="error-page">
      <div className="text-block">
        <img src={successfully} alt="successfully" />
        <h1>{currentMessages.title}</h1>
        <Link to={"/"}>
          <button>{currentMessages.btn}</button>
        </Link>
      </div>
    </section>
  );
};

export default SuccessfullyPage;
