import "./Product.scss";
import Gallery from "../Gallery/Gallery";
import ProductInfo from "../ProductInfo/ProductInfo";

export default function Product() {
  return (
    <div className="product-container">
      <Gallery></Gallery>
      <ProductInfo></ProductInfo>
    </div>
  );
}
