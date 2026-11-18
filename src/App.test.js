import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("adds products, changes quantity and updates the total", () => {
  render(<App />);

  // 6 products, empty cart
  expect(screen.getAllByRole("article")).toHaveLength(6);
  expect(screen.getByTestId("cart-total")).toHaveTextContent("0");

  // Add the notebook (₩4,500) twice using + : total ₩9,000
  fireEvent.click(screen.getAllByRole("button", { name: "Add to cart" })[0]);
  fireEvent.click(screen.getByRole("button", { name: "Increase Study Notebook" }));
  expect(screen.getByTestId("cart-total")).toHaveTextContent("9,000");

  // - brings it back to 1, Remove empties the cart
  fireEvent.click(screen.getByRole("button", { name: "Decrease Study Notebook" }));
  expect(screen.getByTestId("cart-total")).toHaveTextContent("4,500");
  fireEvent.click(screen.getByRole("button", { name: "Remove" }));
  expect(screen.getByText(/Your cart is empty/)).toBeInTheDocument();
});
