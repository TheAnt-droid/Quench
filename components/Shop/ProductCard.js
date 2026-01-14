const htmlTemplate = /*html*/`

    <div>
      <button @click="addToCart($event)" style="background-color: lightgreen;" >{{ inCart ? 'Remove from Cart' : 'Add to Cart' }}</button>
    </div>
  `;

export default {
  template: htmlTemplate,
  data(){
    return {
      inCart: false
    }
  },
  methods: {
    addToCart(event){
      const counter = document.getElementById('cart-counter');
      const current = parseInt(counter.textContent.replace('Cart: ', '')) || 0;
      if(!this.inCart){
          counter.textContent = 'Cart: ' + (current + 1);
          this.inCart=true;
          event.target.style.backgroundColor = '#ff9999';
      }else if(this.inCart){
          counter.textContent = 'Cart: ' + (current -1);
          this.inCart=false;
          event.target.style.backgroundColor = 'lightgreen';
      }
          
        
    }
  }
};
