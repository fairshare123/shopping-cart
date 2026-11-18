import formatPrice from "../data/formatPrice";

// Shows ONE product with an "Add to cart" button.
// If it's already in the cart, the button shows how many and adds one more.

function ProductCard({ product, quantityInCart, onAdd }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} width="200" height="150" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">{formatPrice(product.price)}</p>
        <button type="button" className="add-button" onClick={() => onAdd(product)}>
          {quantityInCart > 0 ? `Add another (${quantityInCart} in cart)` : "Add to cart"}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
