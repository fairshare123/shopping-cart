import CartItem from "./CartItem";
import formatPrice from "../data/formatPrice";

// The cart sidebar: every item in the cart plus the total price.
// The totals are COMPUTED from the cart state every time it changes.

function CartPanel({ cartItems, onIncrease, onDecrease, onRemove, onClear }) {
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <aside className="cart-panel" aria-labelledby="cart-title">
      <h2 id="cart-title">
        Your cart <span className="badge">{itemCount}</span>
      </h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Add a product to get started.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onRemove={onRemove}
            />
          ))}
        </ul>
      )}

      <div className="cart-total" aria-live="polite">
        <span>Total ({itemCount} {itemCount === 1 ? "item" : "items"})</span>
        <strong data-testid="cart-total">{formatPrice(total)}</strong>
      </div>

      {cartItems.length > 0 && (
        <button type="button" className="clear-button" onClick={onClear}>
          Empty cart
        </button>
      )}
    </aside>
  );
}

export default CartPanel;
