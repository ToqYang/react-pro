import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "./coffee-mug.png",
};

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard className="bg-dark" product={product}>
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title
            className="text-white text-bold"
            title={"Agupanela"}
          />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard className="bg-dark" product={product}>
          <ProductImage
            className="custom-image"
            style={{
              boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
          <ProductTitle className="text-white text-bold" title={"Cafe"} />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          style={{
            backgroundColor: "#70D1F8",
          }}
          product={product}
        >
          <ProductImage
            style={{
              boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
          <ProductTitle
            style={{
              fontWeight: "bold",
            }}
            title={"Cafe"}
          />
          <ProductButtons
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
