export default {
  computed: {
    countryCode() {
      return this.$route.params.country;
    },
    country() {
      return this.data[this.countryCode];
    }
  },

  data() {
  return {
    data: {
  austria: {
  name: "Austria",
  info: "Austria is known for herbal teas and its iconic Viennese coffee house culture.",
  recipes: {
    "chamomile": { name: "Chamomile Tea" },
    "mint": { name: "Mint Tea" },
    "peppermint": { name: "Peppermint Tea" },
    "vienna_melange": { name: "Wiener Melange" },
    "homemade_lemonade": { name: "Homemade Lemonade" },
    "vienna_iced_coffee": { name: "Wiener Eiskaffee" }
  }
},
italy: {
  name: "Italy",
  info: "Italy is the heart of espresso culture and refreshing citrus-based drinks.",
  recipes: {
    "espresso": { name: "Espresso" },
    "cappuccino": { name: "Cappuccino" },
    "homemade_lemonade": { name: "Homemade Lemonade" }
  }
},
united_kingdom: {
  name: "United Kingdom",
  info: "The UK is famous for its afternoon tea tradition and classic black tea blends.",
  recipes: {
    "earl_grey": { name: "Earl Grey" },
    "mint": { name: "Mint Tea" },
    "chamomile": { name: "Chamomile Tea" }
  }
},
japan: {
  name: "Japan",
  info: "Japan has a rich history of tea ceremonies and high-quality green tea powders.",
  recipes: {
    "iced_matcha_latte": { name: "Iced Matcha Latte" },
    "peppermint": { name: "Peppermint Tea" }
  }
},
morocco: {
  name: "Morocco",
  info: "In Morocco, tea is a sign of hospitality and is usually served very sweet with fresh herbs.",
  recipes: {
    "mint_moroccan": { name: "Moroccan Mint Tea" },
    "homemade_lemonade": { name: "Lemonade with Mint" }
  }
}
      
    }
  };
},
  template: /*html*/`
    <div v-if="country">
      <h1>{{ country.name }}</h1>
      <p>{{ country.info }}</p>
      <ol style="list-style-type:circle;">
  <li v-for="(details, id) in country.recipes" :key="id">
    <router-link :to="'/tea/' + countryCode + '/' + id">
      {{ details.name }}
    </router-link>
  </li>
</ol>
 <router-link :to="'/countries'">Back to Countries</router-link>
    </div>
    <div v-else>
      <h2>Country not found</h2>
    </div>
  `
};
