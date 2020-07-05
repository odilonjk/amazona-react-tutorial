import React from 'react';
import data from './data';
import './App.css';

const openMenu = () => {
  document.querySelector(".sidebar").classList.add("open");
}
const closeMenu = () => {
  document.querySelector(".sidebar").classList.remove("open");
}
function App() {
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="index.html">amazona books</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li>
            <a href="philosophy.html">Philosophy</a>
          </li>
          <li>
            <a href="technology">Technology</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            {
              data.products.map(product =>
                <li>
                  <div className="product">
                    <img className="product-image" src={product.image} alt={product.name}/>
                    <div className="product-details">
                      <div className="product-name"><a href="product.html">{product.name}</a></div>
                      <div className="product-author">{product.author}</div>
                      <div className="product-price">${product.price}</div>
                      <div className="product-rating">{product.rating} stars ({product.totalReviews} reviews)</div>
                    </div>
                  </div>
                </li>)
            }  
          </ul>
        </div>
      </main>
      <footer className="footer">
        All right reserved.
      </footer>
    </div>
  );
}

export default App;
