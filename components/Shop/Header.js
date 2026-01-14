export default function Header() {
  const activePage = window.location.hash.replace('#/', '') || 'shop';

  return /*html*/`
    <header style="
        background: #2c5530;
        color: white;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    ">
      <nav style="display: flex; gap: 120px;">
        <a href="#/shop"
           style="
             color: white;
             text-decoration: none;
             font-weight: ${activePage === 'shop' ? 'bold' : 'normal'};
             padding: 0.5rem 1rem;
             border-radius: 4px;
             background: ${activePage === 'shop' ? 'rgba(255,255,255,0.2)' : 'transparent'};
           ">
          🛍️ Shop
        </a>

        <a href="#/profile"
           style="
             color: white;
             text-decoration: none;
             font-weight: ${activePage === 'profile' ? 'bold' : 'normal'};
             padding: 0.5rem 1rem;
             border-radius: 4px;
             background: ${activePage === 'profile' ? 'rgba(255,255,255,0.2)' : 'transparent'};
           ">
          👤 Profile
        </a>
      </nav>
    </header>
  `;
}
