export default {
  name: "CountriesGrid",
  template: /*html*/`
    <section>
      <h2 style="text-align:center;margin:12px 0 16px;">Countries</h2>
      <div style="display:grid;grid-template-columns:repeat(2, minmax(160px, 1fr));gap:16px;">
        <router-link to="/tea/austria" class="country-link">
    <img class="flagge" src="https://flagcdn.com/w40/at.png">
    Austria
  </router-link>

  <router-link to="/tea/italy" class="country-link">
    <img class="flagge" src="https://flagcdn.com/w40/it.png">
    Italy
  </router-link>

  <router-link to="/tea/united_kingdom" class="country-link">
    <img class="flagge" src="https://flagcdn.com/w40/gb.png">
    United Kingdom
  </router-link>

  <router-link to="/tea/japan" class="country-link">
    <img class="flagge" src="https://flagcdn.com/w40/jp.png">
    Japan
  </router-link>

  <router-link to="/tea/morocco" class="country-link">
    <img class="flagge" src="https://flagcdn.com/w40/ma.png">
    Morocco
  </router-link>



      </div>
    </section>
  `
};
