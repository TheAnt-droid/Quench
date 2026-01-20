export default {
  name: "RecipeView",
  computed: {
    countryParam() { return this.$route.params.country; },
    recipeParam() { return this.$route.params.recipe; },
    
    recipeData() {
      
      return this.allData[this.countryParam]?.recipes[this.recipeParam];
    }
  },
  data() {
    return {
      allData: {
      austria: {
        recipes: {
          chamomile: {
            name: "Chamomile Tea",
            description: "A soothing herbal tea made from dried chamomile flowers, perfect for relaxing before bed.",
            instructions: "Steep 1-2 teaspoons of dried chamomile flowers in hot water (100°C) for 5-10 minutes. Strain and enjoy."
          },
          mint: {
            name: "Mint Tea",
            description: "A refreshing and aromatic tea made from fresh spearmint leaves.",
            instructions: "Bruise a handful of fresh mint leaves to release oils. Steep in hot water for 5-7 minutes. Strain and serve."
          },
          peppermint: {
            name: "Peppermint Tea",
            description: "A cool and invigorating tea made from dried peppermint leaves, known for aiding digestion.",
            instructions: "Steep 1 tablespoon of peppermint leaves in hot water for 5-10 minutes. Strain and enjoy hot or iced."
          },
          vienna_melange: {
            name: "Wiener Melange",
            description: "A specialty coffee from Vienna, similar to a cappuccino but often milder, made with mild coffee and frothed milk.",
            instructions: "Mix a shot of mild espresso with equal parts warm milk and top it with a generous layer of milk foam."
          },
          homemade_lemonade: {
            name: "Homemade Lemonade",
            description: "A classic, refreshing summer drink made from fresh lemon juice, sugar, and water.",
            instructions: "Mix 1 cup of fresh lemon juice with 1 cup of sugar. Stir in 4-6 cups of cold water and ice cubes."
          },
          vienna_iced_coffee: {
            name: "Wiener Eiskaffee",
            description: "A decadent Austrian treat: cold coffee served with vanilla ice cream and whipped cream.",
            instructions: "Pour chilled coffee over two scoops of vanilla ice cream. Top with whipped cream and chocolate sprinkles."
          }
        }
      },
      italy: {
        recipes: {
          espresso: {
            name: "Espresso",
            description: "A concentrated coffee drink brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans.",
            instructions: "Use 18-20g of fine coffee grounds. Extraction should take 25-30 seconds for a 30ml shot."
          },
          cappuccino: {
            name: "Cappuccino",
            description: "An Italian coffee drink prepared with equal parts double espresso, steamed milk, and milk foam.",
            instructions: "Prepare a double espresso. Steam milk to create microfoam. Pour the milk over the espresso, followed by the foam."
          },
          homemade_lemonade: {
            name: "Homemade Lemonade",
            description: "Fresh Italian-style lemonade using sun-ripened lemons.",
            instructions: "Combine fresh lemon juice, cold water, and sugar to taste. Serve with plenty of ice."
          }
        }
      },
      united_kingdom: {
        recipes: {
          earl_grey: {
            name: "Earl Grey",
            description: "A classic black tea flavored with the oil of bergamot orange zest.",
            instructions: "Steep one tea bag or a teaspoon of loose tea in boiling water for 3-4 minutes. Best served with milk or lemon."
          },
          mint: {
            name: "Mint Tea",
            description: "Classic English garden mint tea.",
            instructions: "Steep fresh mint leaves in boiling water for 5 minutes."
          },
          chamomile: {
            name: "Chamomile Tea",
            description: "A calming herbal infusion.",
            instructions: "Steep dried chamomile flowers for 5-8 minutes."
          }
        }
      },
      japan: {
        recipes: {
          iced_matcha_latte: {
            name: "Iced Matcha Latte",
            description: "A vibrant green tea latte served over ice, offering a smooth and earthy flavor.",
            instructions: "Whisk 1 tsp matcha powder with a little hot water. Fill a glass with ice and milk, then pour the matcha over it."
          },
          peppermint: {
            name: "Peppermint Tea",
            description: "Refreshing herbal tea, enjoyed hot or cold.",
            instructions: "Steep peppermint leaves in 90°C water for 7 minutes."
          }
        }
      },
      morocco: {
        recipes: {
          mint_moroccan: {
            name: "Moroccan Mint Tea",
            description: "A symbol of Moroccan hospitality, made with green tea, fresh mint, and plenty of sugar.",
            instructions: "Boil green tea, add a large handful of fresh mint and sugar. Pour from a height to create a foam head."
          },
          homemade_lemonade: {
            name: "Lemonade with Mint",
            description: "Traditional Moroccan citrus drink with a hint of fresh mint.",
            instructions: "Blend lemon juice, water, sugar, and a few mint leaves. Serve chilled."
          }
        }
      }
    }
    };
  },
  template: `
    <div v-if="recipeData">
      <h2>{{ recipeData.name }}</h2>
      <h3> Description:</h3>
      <p>{{ recipeData.description }}</p>
      <h3> Instructions:</h3>
    <p>{{ recipeData.instructions }}</p>
      <router-link :to="'/tea/' + countryParam">Back to {{ countryParam }}</router-link>
    </div>
    <div v-else>
      <h2>Recipe not found</h2>
    </div>
  `
};