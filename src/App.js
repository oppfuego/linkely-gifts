import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import CartDetails from "./pages/CartDetails";
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import SignIn from "./pages/SignIn";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/cart-details-1920":
        title = "";
        metaDescription = "";
        break;
      case "/checkout-1920":
        title = "";
        metaDescription = "";
        break;
      case "/products-1920":
        title = "";
        metaDescription = "";
        break;
      case "/product-detail-1920":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cart-details" element={<CartDetails />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}
export default App;
