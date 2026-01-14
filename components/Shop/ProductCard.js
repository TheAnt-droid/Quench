
export default {
  template: `
  
    <div class="product-card" style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; text-align: center; background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
      <div class="emoji" style="font-size: 48px; margin-bottom: 15px;">🍵</div>
      <h4 style="margin: 10px 0; color: #2c5530;">Product Name</h4>
      <p style="font-weight: bold; margin: 5px 0; color: #4a7c59;">€0</p>
      <p style="color: #ffb300; margin: 5px 0;">⭐ 0/5</p>
      <p style="font-size: 14px; color: #666; margin: 10px 0;">Description</p>
      <button 
        onclick="
          const counter = document.getElementById('cart-counter');
          const current = parseInt(counter.textContent.replace('Cart: ', '')) || 0;
          counter.textContent = 'Cart: ' + (current + 1);
          this.textContent='Added!'; 
          this.style.background='#2c5530'; 
          setTimeout(() => { 
              this.textContent='Add to Cart'; 
              this.style.background='#4a7c59'; 
          }, 1000);
        "
        style="margin-top: 10px; padding: 8px 16px; background: #4a7c59; color: white; border: none; border-radius: 4px; cursor: pointer;"
      >
        Add to Cart
      </button>
    </div>
  `
};
