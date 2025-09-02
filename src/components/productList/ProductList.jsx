import Product from "../product/Product";

export default function ProductList({ product }) {
  return (
    <div>
      {product.map((product) => (
        <div key={product.name}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}
