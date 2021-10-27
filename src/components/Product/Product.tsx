import "./Product.scss";
import Gallery from "../Gallery/Gallery";
import ProductInfo from "../ProductInfo/ProductInfo";

interface Props {
  addToCart: (num: number) => void;
}

export default function Product({ addToCart }: Props) {
  return (
    <div className="product-container">
      <Gallery></Gallery>
      <ProductInfo addToCart={addToCart}></ProductInfo>
    </div>
  );
}
