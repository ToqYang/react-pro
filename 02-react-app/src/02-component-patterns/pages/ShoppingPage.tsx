import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import { products } from "../data/products";
import { Product } from "../interfaces/interfaces";
import "../styles/custom-styles.css";

const product = products[1];

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
        key={product.id}
        className="bg-dark"
        product={product}
      >
        {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
          <>
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
            <ProductTitle
              className="text-white text-bold"
              title={product.title}
            />
            <ProductButtons className="custom-buttons" />

            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}> -2 </button>

            {!isMaxCountReached && (
              <button onClick={() => increaseBy(+2)}> +2 </button>
            )}

            <span>
              {count} - {maxCount}
            </span>
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
