import ProductCard from "./ProductCard.js";
import ShopDetails from "./ShopDetails.js";
const products = [
  { 
    name: "Organic Green Tea", price: "€10", type: "tea",
    rating: 5, description: "Fresh organic green tea leaves",  details: "Our Organic Green Tea is sourced from premium tea plantations in Japan, renowned for their high-quality leaves. To prepare, steep one teaspoon of leaves in hot water at 75-80°C (167-176°F) for 2-3 minutes. This gentle brewing process preserves the delicate flavors and antioxidants, delivering a smooth, refreshing cup full of natural goodness."
  },
  { 
    name: "Cold Brew Beans", price: "€9", type: "coffee",
    rating: 5, description: "Smooth cold brew coffee",details: "Made from carefully selected Arabica beans from Colombia, our Cold Brew Beans are ground coarsely and steeped in cold water for 12-24 hours. This slow extraction results in a rich, mellow flavor with low acidity. Perfect for a refreshing, caffeine-packed drink on hot days. Serve over ice or dilute with your preferred milk."
  },
  { 
    name: "Herbal Chamomile", price: "€12", type: "tea",
    rating: 3, description: "Calming herbal infusion",details: "Our Chamomile is sourced from organic farms in Egypt, known for their fragrant flowers. To brew, steep 1-2 teaspoons of dried chamomile flowers in hot water at 90°C (194°F) for 5-7 minutes. This soothing tea promotes relaxation and is ideal for winding down in the evening."
  },
  { 
    name: "Espresso Beans", price: "€8", type: "coffee",
    rating: 3, description: "Strong Italian espresso", details: "Crafted from a blend of premium Arabica and Robusta beans from Brazil and Ethiopia, our Espresso Beans are roasted to a dark finish. For the perfect shot, grind the beans finely and brew under high pressure for about 25-30 seconds. The result is a bold, intense flavor with a rich crema, perfect for espresso lovers."
  },
  { 
    name: "Matcha Powder", price: "€11", type: "tea",
    rating: 4, description: "Creamy matcha green tea", details: "Our ceremonial-grade Matcha is sourced from lush tea gardens in Japan, shade-grown for 3-4 weeks before harvest. To prepare, whisk 1 teaspoon of matcha powder with 2 oz of hot water (80°C/176°F) until frothy. Rich in antioxidants, this vibrant green tea offers a smooth, umami flavor and a sustained caffeine boost."
  },
  { 
    name: "Fresh Lemonade Powder", price: "€7", type: "other",
    rating: 4, description: "Refreshing citrus drink",details: "Our Lemonade Powder is made from natural lemon flavor and organic sugar. To serve, mix 2-3 tablespoons of powder with 250 ml of cold water, stir well, and enjoy a tangy, revitalizing beverage. Perfect for quick refreshment or outdoor gatherings."
  }
];

const htmlTemplate = /*html*/`
<div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">

<div v-for="p in products" :key="p.name" class="product-card" style="border: 1px solid #ccc; padding: 15px; text-align: center;">
     
<div style="font-size: 40px; margin-bottom: 10px;">
      {{ p.type === "tea" ? "🍵" : p.type === "coffee" ? "☕" : "🥤" }}
    </div>
    <h4 style="margin: 10px 0;">{{ p.name }}</h4>
    <p style="font-weight: bold; margin: 0;">{{ p.price }}</p>
    <p style="font-size: 14px; color: #555;">{{ p.description }}</p>
    <p style="color: #f39c12; margin: 5px 0;">
      <span v-for="star in 5" :key="star">
        <span v-if="star <= Math.floor(p.rating)">★</span></span>
</p>
    
    <ShopDetails :details="p.details"/>
    <ProductCard /> 
  </div>
</div>
`;

export default {
  template: htmlTemplate,
  components: { ShopDetails, ProductCard },
  data() {
    return {
      products: products
    }
  }
};
