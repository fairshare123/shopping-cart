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
        Your cart{" "}
        {/* The key changes with the count, so the badge "pops" each time */}
        <span className="badge" key={itemCount}>
          {itemCount}
        </span>
      </h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="9" cy="20" r="1.5" />
            <circle cx="18" cy="20" r="1.5" />
            <path d="M2 3h3l2.7 12.2a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L22 7H6" />
          </svg>
          <p>Your cart is empty. Add a product to get started.</p>
        </div>
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
