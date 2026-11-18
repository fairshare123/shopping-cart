import ShoppingCart from "./components/ShoppingCart";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <span className="tag">WEEK 11 · REACT STATE</span>
        <h1>Campus Corner Shop</h1>
        <p>Student essentials, by Dipika Aryal</p>
      </header>

      <main>
        <ShoppingCart />
      </main>

      <footer className="app-footer">Dipika Aryal · Web Programming © 2026</footer>
    </div>
  );
}

export default App;
