import React from 'react';
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
            <li>
              <div className="product">
                <img className="product-image" src="/images/sophies_world.jpg" alt="Book 1"/>
                <div className="product-details">
                  <div className="product-name"><a href="product.html">Sophie's World</a></div>
                  <div className="product-author">Jostein Gaarder</div>
                  <div className="product-price">$22.90</div>
                  <div className="product-rating">4.5 start (331 reviews)</div>
                </div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/meditations.jpg" alt="Book 2"/>
                <div className="product-details">
                  <div className="product-name"><a href="product.html">Meditations</a></div>
                  <div className="product-author">Marcus Aurelius</div>
                  <div className="product-price">$14.50</div>
                  <div className="product-rating">5 stars (729 reviews)</div>
                </div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/letters_from_a_stoic.jpg" alt="Book 3"/>
                <div className="product-details">
                  <div className="product-name"><a href="product.html">Letters From A Stoic</a></div>
                  <div className="product-author">Seneca</div>
                  <div className="product-price">$16.00</div>
                  <div className="product-rating">5 stars (642 reviews)</div>
                </div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/beyond_good_and_evil.jpg" alt="Book 4"/>
                <div className="product-details">
                  <div className="product-name"><a href="product.name">Beyond Good and Evil</a></div>
                  <div className="product-author">Friedrich Nietzsche</div>
                  <div className="product-price">$18.00</div>
                  <div className="product-rating">4.5 stars (495 reviews)</div>
                </div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/the_antichrist.jpg" alt="Book 5"/>
                <div className="product-details">
                  <div className="product-name"><a href="product.html">The Anti-christ</a></div>
                  <div className="product-author">Friedrich Nietzsche</div>
                  <div className="product-price">$16.00</div>
                  <div className="product-rating">4.0 stars (17 reviews)</div>
                </div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/the_myth_of_sisyphus.jpg" alt="Book 6"/>
                <div className="product-details">
                  <div className="product-name"><a href="product.html">The Myth of Sisyphus</a></div>
                  <div className="product-author">Albert Camus</div>
                  <div className="product-price">$22.50</div>
                  <div className="product-rating">4.5 stars (251 reviews)</div>
                </div>
              </div>
            </li>  
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
