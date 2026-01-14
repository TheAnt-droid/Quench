import NavBar from "../../components/Navigation/NavBar.js";
import TopBar from "../../components/Navigation/TopBar.js";
import NavMenu from "../../components/Navigation/NavMenu.js";
import Header from "../../components/Shop/Header.js";
import ProductGrid from "../../components/Shop/ProductGrid.js";

const htmlTemplate = /*html*/`


  <main style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
    <h2 style="color: #2c5530; margin-bottom: 1.5rem;">Discover Your Perfect Beverage</h2>

    <!-- Search box -->
    <div style="margin-bottom: 1.5rem;">
      <input 
        type="text" 
        id="searchInput"
        placeholder="search" 
        style="padding: 10px; width: 300px; border: 2px solid #e0e0e0; border-radius: 6px; font-size: 16px;"
      >
      <button 
        onclick="
          const searchTerm = document.getElementById('searchInput').value.toLowerCase();
          const cards = document.querySelectorAll('.product-card');
          let foundCount = 0;
          cards.forEach(card => {
            const name = card.querySelector('h4').textContent.toLowerCase();
            if (name.includes(searchTerm)) {
              card.style.display = 'block';
              foundCount++;
            } else {
              card.style.display = 'none';
            }
          });
          document.getElementById('search-result').textContent = 
            searchTerm ? 'Found' + foundCount + ' Products' : '';
        "
        style="padding: 10px 20px; margin-left: 10px; background: #4a7c59; color: white; border: none; border-radius: 6px; cursor: pointer;"
      >
        Search
      </button>
      <div id="search-result" style="margin-top: 10px; color: #4a7c59;"></div>
    </div>

    <!-- Filter buttons -->
    <div style="margin-bottom: 2rem; display: flex; gap: 1rem;">
      <button onclick="/* show all products JS */" style="...">Show All</button>
      <button onclick="/* show tea JS */" style="...">Show Tea 🍵</button>
      <button onclick="/* show coffee JS */" style="...">Show Coffee ☕</button>
      <button onclick="/* show other JS */" style="...">Show other 🥤</button>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
      <h3 style="color: #4a7c59; margin: 0;">Popular Now</h3>
      <div id="cart-counter" style="background: #4a7c59; color: white; padding: 5px 10px; border-radius: 12px; font-size: 14px;">
        Cart: 0
      </div>
    </div>

    <div>
      <ProductGrid />
    </div>
  </main>
 
`;

export default {
  template: htmlTemplate,
  components: { Header, ProductGrid , NavBar, TopBar, NavMenu }
};
