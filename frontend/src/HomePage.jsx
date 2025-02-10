import React from "react";
import './HomePage.css';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">Silex</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#Signup">Sign up</a></li>
            <li><a href="#Login">Login</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero-section">

        <div className="hero-content">
          <h1>Stylish. Comfortable. Affordable.</h1>
          <p>Find the latest trends in fashion at ClothingBrand.</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </section>

      <section id="shop" className="shop-section">
        <h2>New Arrivals</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="\1.1.png" alt="Product 1" />
            <h3>BL001</h3>
            <p>Rs4100.00</p>
          </div>
          <div className="product-card">
            <img src="/2.1.png" alt="Product 2" />
            <h3>BR002</h3>
            <p>Rs4100.00</p>
          </div>
          <div className="product-card">
            <img src="/3.1png.png" alt="Product 3" />
            <h3>BL003</h3>
            <p>Rs4100.00</p>
          </div>
          <div className="product-card">
            <img src="\1.1.png" alt="Product 1" />
            <h3>BL001</h3>
            <p>Rs4100.00</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 ClothingBrand. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
