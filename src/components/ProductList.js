import ProductCard from "./ProductCard";

// Shows every product as a grid of ProductCards.

function ProductList({ products, cartItems, onAdd }) {
  return (
    <section className="product-list" aria-labelledby="products-title">
      <h2 id="products-title">Products</h2>
      <div className="product-grid">
        {products.map((product) => {
          const inCart = cartItems.find((item) => item.id === product.id);
          return (
            <ProductCard
              key={product.id}
              product={product}
              quantityInCart={inCart ? inCart.quantity : 0}
              onAdd={onAdd}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ProductList;
