import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";

function App() {
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState<number>(0);

  const addToCart = (quantity: number) => {
    setNumberOfItemsInCart(numberOfItemsInCart + quantity);
  };

  return (
    <div className="App">
      <Header
        numberOfItemsInCart={numberOfItemsInCart}
        setNumberOfItemsInCart={setNumberOfItemsInCart}
      ></Header>
      <Product addToCart={addToCart}></Product>
    </div>
  );
}

export default App;
