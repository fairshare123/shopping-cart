import formatPrice from "../data/formatPrice";

// One row in the cart: name, quantity controls (+ and -), line total and Remove.

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <li className="cart-item">
      <img src={item.image} alt="" width="48" height="36" />

      <div className="cart-item-info">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-price">{formatPrice(item.price)} each</p>

        <div className="quantity">
          <button
            type="button"
            onClick={() => onDecrease(item.id)}
            aria-label={`Decrease ${item.name}`}
          >
            −
          </button>
          <span aria-label={`Quantity of ${item.name}`}>{item.quantity}</span>
          <button
            type="button"
            onClick={() => onIncrease(item.id)}
            aria-label={`Increase ${item.name}`}
          >
            +
          </button>
        </div>
      </div>

      <div className="cart-item-side">
        <p className="line-total">{formatPrice(item.price * item.quantity)}</p>
        <button type="button" className="remove-button" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
