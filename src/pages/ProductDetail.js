import FrameComponent6 from "../components/FrameComponent6";
import ProductDetails from "../components/ProductDetails";
import Footer3 from "../components/Footer3";
import "./ProductDetail.css";

const ProductDetail = () => {
  return (
    <div className="product-detail-1920">
      <main className="main">
        <FrameComponent6 redeemGiftCardsTextDecoration="unset" />
        <ProductDetails />
      </main>
      <Footer3 />
    </div>
  );
};

export default ProductDetail;
