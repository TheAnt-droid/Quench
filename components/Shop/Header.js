const activePage = 'shop'; 

const htmlTemplate = /*html*/`

<header style="
    background: #2c5530; 
    color: white; 
    padding: 1rem 2rem; 
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
">
    <h1 style="margin: 0; font-size: 1.8rem; font-weight: bold;">Quench</h1>
    
    <nav style="display: flex; gap: 2rem;">
        <a href="/" data-link 
           style="
               color: white; 
               text-decoration: none; 
               font-weight: ${activePage === 'shop' ? 'bold' : 'normal'};
               padding: 0.5rem 1rem;
               border-radius: 4px;
               background: ${activePage === 'shop' ? 'rgba(255,255,255,0.2)' : 'transparent'};
               transition: background 0.3s ease;
           "
           onmouseover="this.style.background='rgba(255,255,255,0.1)'"
           onmouseout="this.style.background='${activePage === 'shop' ? 'rgba(255,255,255,0.2)' : 'transparent'}'">
           🛍️ Shop
        </a>
        
        <a href="/profile" data-link 
           style="
               color: white; 
               text-decoration: none; 
               font-weight: ${activePage === 'profile' ? 'bold' : 'normal'};
               padding: 0.5rem 1rem;
               border-radius: 4px;
               background: ${activePage === 'profile' ? 'rgba(255,255,255,0.2)' : 'transparent'};
               transition: background 0.3s ease;
           "
           onmouseover="this.style.background='rgba(255,255,255,0.1)'"
           onmouseout="this.style.background='${activePage === 'profile' ? 'rgba(255,255,255,0.2)' : 'transparent'}'">
           👤 Profile
        </a>
    </nav>
</header>
`;

export default {
  template: htmlTemplate
};
