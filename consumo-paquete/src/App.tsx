import "./App.css";
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "tq-do-product-card";

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

function App() {
  return (
    <div className="App App-header">
      <ProductCard
        product={product}
        initialValues={{
          count: 6,
          maxCount: 10,
        }}
      >
        {() => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
}

export default App;
