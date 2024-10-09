import { useEffect, useState } from "react";
import Navbar from "./layout/Navbar";
import HomePage from "./pages/home";
import Footer from "./layout/Footer";

import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import OffersPage from "./pages/offers";
import CodeConfirmPage from "./pages/codeConfirm";
import MenuPage from "./pages/menu";
import CheckoutPage from "./pages/Checkout";
import CategoryPage from "./pages/category";
import { useDispatch } from "react-redux";
import Error404 from "./pages/error404";
import Offers from "./pages/OffersPage";
import SuccessfullyPage from "./pages/successfully";
import Offer from "./pages/SelectedOffer";
import SelectedDrinks from "./pages/SelectedDrinks";
import SelectedChicken from "./pages/SelectedChicken";

function App() {
  const [isArabic, setIsArabic] = useState(false);
  const dispatch = useDispatch();
  const loadCartFromLocalStorage = () => {
    const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
    dispatch({
      type: "LOAD_CART_FROM_LOCAL_STORAGE",
      payload: cartItemsFromLocalStorage,
    });
  };

  useEffect(() => {
    loadCartFromLocalStorage();
  }, []);

  const toggleLanguage = () => {
    setIsArabic((prevIsArabic) => !prevIsArabic);
  };

  return (
    <Router>
      <Routes>
        <Route element={<Layout isArabic={isArabic} toggleLanguage={toggleLanguage} />}>
          <Route path="/offers" element={<OffersPage isArabic={isArabic} />} />
          <Route path="/menu" element={<MenuPage isArabic={isArabic} />} />
          <Route path="/code" element={<CodeConfirmPage isArabic={isArabic} />} />
          <Route path="/menu/:categoryName" element={<CategoryPage isArabic={isArabic} />} />
          <Route path="/checkout" element={<CheckoutPage isArabic={isArabic} />} />
          <Route path="/order" element={<HomePage isArabic={isArabic} />} />
          <Route path="/offer/pizzas" element={<Offer isArabic={isArabic} />} />
          <Route path="/offer/drinks" element={<SelectedDrinks isArabic={isArabic} />} />
          <Route path="/offer/chicken" element={<SelectedChicken isArabic={isArabic} />} />
          <Route path="/successfully" element={<SuccessfullyPage isArabic={isArabic} />} />
          <Route path="/" element={<Offers isArabic={isArabic} />} />
        </Route>
        <Route path="*" element={<Error404 isArabic={isArabic} />} />
      </Routes>
    </Router>
  );
}

function Layout({ isArabic, toggleLanguage }) {
  return (
    <>
      <header>
        <Navbar isArabic={isArabic} toggleLanguage={toggleLanguage} />
      </header>
      <main className="container-main">
        <Outlet />
      </main>
      <footer>
        <Footer isArabic={isArabic} />
      </footer>
    </>
  );
}

export default App;
