import ProductCard from "./ProductCard.js";

const products = [
  { 
    name: "Organic Green Tea", price: "€10", type: "tea",
    rating: 4.5, description: "Fresh organic green tea leaves"
  },
  { 
    name: "Iced Cold Brew", price: "€9", type: "coffee",
    rating: 4.8, description: "Smooth cold brew coffee"
  },
  { 
    name: "Herbal Chamomile", price: "€12", type: "tea",
    rating: 4.3, description: "Calming herbal infusion"
  },
  { 
    name: "Espresso Shot", price: "€8", type: "coffee",
    rating: 4.7, description: "Strong Italian espresso"
  },
  { 
    name: "Matcha Latte", price: "€11", type: "tea",
    rating: 4.6, description: "Creamy matcha green tea"
  },
  { 
    name: "Fresh Lemonade", price: "€7", type: "other",
    rating: 4.2, description: "Refreshing citrus drink"
  }
];

const htmlTemplate = /*html*/`

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
  ${products.map(p => `
    <div class="product-card" style="border: 1px solid #ccc; padding: 15px; text-align: center;">
      <div style="font-size: 40px; margin-bottom: 10px;">
        ${p.type === "tea" ? "🍵" : p.type === "coffee" ? "☕" : "🥤"}
      </div>
      <h4 style="margin: 10px 0;">${p.name}</h4>
      <p style="font-weight: bold; margin: 0;">${p.price}</p>
      <p style="font-size: 14px; color: #555;">${p.description}</p>
      <p style="color: #f5a623;">${"★".repeat(Math.floor(p.rating))}</p>
    </div>
  `).join("")}
</div>
`;

export default {
  template: htmlTemplate,
  components: { ProductCard } 
};
