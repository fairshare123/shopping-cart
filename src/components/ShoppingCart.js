import { useState } from "react";
import ProductList from "./ProductList";
import CartPanel from "./CartPanel";
import products from "../data/products";

// The main component: product list on the left, cart panel on the right.
// The cart is STATE: an array of items like { id, name, price, image, quantity }.

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  // Add a product. If it's already in the cart, add 1 to its quantity instead.
  function addToCart(product) {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === product.id);
      if (existing) {
        return items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  }

  // + button
  function increaseQuantity(id) {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  }

  // - button. When the quantity reaches 0, the item leaves the cart.
  function decreaseQuantity(id) {
    setCartItems((items) =>
      items
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );
  }

  // Remove button
  function removeFromCart(id) {
    setCartItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="shopping-cart">
      <ProductList products={products} cartItems={cartItems} onAdd={addToCart} />
      <CartPanel
        cartItems={cartItems}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeFromCart}
        onClear={() => setCartItems([])}
      />
    </div>
  );
}

export default ShoppingCart;
