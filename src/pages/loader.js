import { useEffect, useState } from "react";
import RedLoader from "../images/red-white-v2.png";
import WhiteLoader from "../images/white-red-v2.png";
import loader from "../images/bkg-loading.gif";

const LoaderPage = ({ showModal }) => {

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 250);

  //   return () => clearInterval(intervalId);
  // }, []);
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showModal]);

  return (
    <section className="loader-modal">
      <div className="loader-content">
        <div className="container">
          <img src={loader} alt="" />
        </div>
      </div>
    </section>
  );
};

export default LoaderPage;
