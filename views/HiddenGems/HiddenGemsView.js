import NavBar from "../../components/Navigation/NavBar.js";
import TopBar from "../../components/Navigation/TopBar.js";
import NavMenu from "../../components/Navigation/NavMenu.js";

import HiddenGemCard from "../../components/HiddenGems/HiddenGemCard.js";
import dataService from "../../../../service/dataService.js";

const STORAGE_KEY = "quench_hidden_gems";

export default {
  name: "HiddenGemsView",
  components: { TopBar, NavMenu, NavBar, HiddenGemCard },

  data() {
    const loaded = dataService.get(STORAGE_KEY) || [
      
      {
        name: "Small Tea Garden",
        type: "Tea House",
        country: "Austria",
        city: "Vienna",
        note: "Quiet place to drink green tea."
      }
    ];

    return {
      newGem: {
        name: "",
        type: "",
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
    addGem() {
      if (!this.newGem.name || !this.newGem.country || !this.newGem.city) {
        // minimaler Check: ohne Name + Ort nichts speichern
        return;
      }

      const copy = {
        name: this.newGem.name,
        type: this.newGem.type || "Unknown",
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

      <!-- Formular zum Hinzufügen eines neuen Hidden Gems -->
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
            <input id="typeInput"
                   type="text"
                   v-model="newGem.type"
                   placeholder="e.g. Tea House, Cafe, Park">
          </div>

          <div>
            <label for="countryInput">Country</label><br>
            <input id="countryInput"
                   type="text"
                   v-model="newGem.country"
                   placeholder="Country">
          </div>

          <div>
            <label for="cityInput">City</label><br>
            <input id="cityInput"
                   type="text"
                   v-model="newGem.city"
                   placeholder="City">
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

      <!-- Filter nach Typ (Mock, sehr einfach) -->
      <section aria-label="Filter hidden gems">
        <h3>Filter by type</h3>
        <button type="button" @click="setFilter('all')">All</button>
        <button type="button" @click="setFilter('Tea House')">Tea House</button>
        <button type="button" @click="setFilter('Cafe')">Cafe</button>
        <button type="button" @click="setFilter('Park')">Park</button>
      </section>

      <hr>

      <!-- Liste der gespeicherten Hidden Gems -->
      <section aria-label="Saved hidden gems" aria-live="polite">
        <h3>My hidden gems</h3>

        <p v-if="filteredGems.length === 0">
          No locations saved yet.
        </p>

        <ul v-else>
          <li v-for="(gem, index) in filteredGems" :key="index">
            <HiddenGemCard :gem="gem" />
          </li>
        </ul>
      </section>

      
    </main>
  </div>
  `
};
