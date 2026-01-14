import CountryCard from "./CountryCard.js";

export default {
  name: "CountriesGrid",
  components: { CountryCard },
  template: /*html*/`
  
    <section>
      <h2 style="text-align:center;margin:12px 0 16px;">Countries</h2>
      <div style="display:grid;grid-template-columns:repeat(2, minmax(160px, 1fr));gap:16px;justify-items:center;">
        <CountryCard to="/country1" title="Austria" flag="./public/resources/at.png" />
        <CountryCard to="/country2" title="Italy" flag="./public/resources/ita.png" />
      </div>
    </section>
  `
};
