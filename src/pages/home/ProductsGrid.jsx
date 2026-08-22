import { Product } from "./Product";
export function ProductsGrid({ products, loadCart }) {
  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
          // <>When you use .map(), the outermost element returned by each iteration must have a key.The <>...</> is the outermost element returned by .map(). so you cant use <></> fragment here like you  commented
          <Product key={product.id} product={product} loadCart={loadCart} />
          // </>
        );
      })}
    </div>
  );
}
