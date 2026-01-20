

import HiddenGemCard from "../../components/HiddenGems/HiddenGemCard.js";
import dataService from "../../service/dataService.js";

const STORAGE_KEY = "quench_hidden_gems";

export default {
  name: "HiddenGemsView",
  components: { HiddenGemCard },

  data() {
    const loaded = dataService.get(STORAGE_KEY) || [
      
      {
        name: "Small Tea Garden",
        type: "Tea House",
        adress: "Kleiner Platz 5",
        city: "Vienna",
        country: "Austria",
        note: "Quiet place to drink green tea."
      }
    ];

    return {
      newGem: {
        name: "",
        type: "",
        adress: "",
        country: "",
        city: "",
        note: ""
      },
      typeFilter: "all",
      gems: loaded
    };
  },

  computed: {
    filteredGems() {
      if (this.typeFilter === "all") {
        return this.gems;
      }
      return this.gems.filter(g => g.type === this.typeFilter);
    }
  },

  methods: {
     removeGem(gemToRemove) {
    const index = this.gems.indexOf(gemToRemove);
    if (index !== -1) {
      this.gems.splice(index, 1);
      dataService.save(STORAGE_KEY, this.gems);
    }
  },
    addGem() {
      if (!this.newGem.name || !this.newGem.country || !this.newGem.city) {
        return;
      }

      const copy = {
        name: this.newGem.name,
        type: this.newGem.type || "Unknown",
        adress: this.newGem.adress,
        country: this.newGem.country,
        city: this.newGem.city,
        note: this.newGem.note
      };

      this.gems.push(copy);
      dataService.save(STORAGE_KEY, this.gems);
      this.clearForm();
    },

    clearForm() {
      this.newGem.name = "";
      this.newGem.type = "";
      this.newGem.adress = "";
      this.newGem.country = "";
      this.newGem.city = "";
      this.newGem.note = "";
    },

    setFilter(value) {
      this.typeFilter = value;
    }
  },

  template: /*html*/`
  
  <div>

    <main>
      <h1>Hidden Gems</h1>


      <section aria-label="Add new hidden gem">
        <h3>Add a new location</h3>

        <form @submit.prevent="addGem">
          <div>
            <label for="nameInput">Name</label><br>
            <input id="nameInput"
                   type="text"
                   v-model="newGem.name"
                   placeholder="Name of location">
          </div>

          <div>
            <label for="typeInput">Type of location</label><br>
            <select id="typeInput"v-model="newGem.type">
          <option> </option>
          <option>Tea House</option>
          <option>Cafe</option>
          <option>Park</option>
          <option>Other</option>
      </select>
          </div>
<div>
            <label for="countryInput">Streetname</label><br>
            <input id="adressInput"
                   type="text"
                   v-model="newGem.adress"
                   placeholder="Adress">
          </div>
          <div>
            <label for="cityInput">City</label><br>
            <input id="cityInput"
                   type="text"
                   v-model="newGem.city"
                   placeholder="City">
          </div>
          <div>
            <label for="countryInput">Country</label><br>
            <input id="countryInput"
                   type="text"
                   v-model="newGem.country"
                   placeholder="Country">
          </div>

          <div>
            <label for="noteInput">Note (optional)</label><br>
            <textarea id="noteInput"
                      rows="3"
                      v-model="newGem.note"
                      placeholder="Why is this place special?"></textarea>
          </div>

          <button type="submit">Save hidden gem</button>
          <button type="button" @click="clearForm">Cancel</button>
        </form>
      </section>

      <hr>

      <section aria-label="Filter hidden gems">
        <h3>Filter by type</h3>
        <button type="button" @click="setFilter('all')">All</button>
        <button type="button" @click="setFilter('Tea House')">Tea House</button>
        <button type="button" @click="setFilter('Cafe')">Cafe</button>
        <button type="button" @click="setFilter('Park')">Park</button>
      </section>

      <hr>

      <section aria-label="Saved hidden gems" aria-live="polite">
        <h3>My hidden gems</h3>

        <p v-if="filteredGems.length === 0">
          No locations saved yet.
        </p>

        <ul v-else>
          <li v-for="(gem, index) in filteredGems" :key="index">
            <div class="postBox">
            <HiddenGemCard :gem="gem" />
            <button class="devPostButton" @click="removeGem(gem)">Remove</button>
            </div>
          </li>
        </ul>

      </section>

      
    </main>
  </div>
  `
};
