import ShoppingCart from "./components/ShoppingCart";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <span className="tag">Week 11 · React state</span>
        <h1>
          Campus Corner <em>Shop</em>
        </h1>
        <p>Student essentials, by Dipika Aryal</p>
      </header>

      <main>
        <ShoppingCart />
      </main>

      <footer className="app-footer">
        <p>Dipika Aryal · Web Programming © 2026</p>
        <p className="photo-credits">
          Photos from Unsplash by Kelly Sikkema, Luke Peterson, Wiser by the Mile,
          Quokka Bottles, Brina Blum and Lucia Macedo.
        </p>
      </footer>
    </div>
  );
}

export default App;
