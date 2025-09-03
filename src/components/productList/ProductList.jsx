import Product from "../product/Product";

export default function ProductList({ product }) {
  return (
    <div>
      <h1>Product list page</h1>
      {product.map((product) => (
        <div key={product.name}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}
