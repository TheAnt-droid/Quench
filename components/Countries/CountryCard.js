export default {
  name: "CountryCard",
  props: {
    to:    { type: String, required: true },   // z.B. "/country1"
    title: { type: String, required: true },   // "Country name1"
    flag:  { type: String, default: "Flag" }   // "Flag1"
  },
  template: /*html*/`
  
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;width:200px;">
      <!-- kleine Box für die Flag -->
      <router-link
        :to="to"
        style="display:flex;align-items:center;justify-content:center;
               width:120px;height:80px;border:1px solid #000;
               border-radius:10px;padding:8px;">
        
        <!-- HIER kommt das Flaggenbild rein -->
        <img :src="flag" :alt="'Flag of ' + title" style="max-width:100%;max-height:100%;">
        
      </router-link>

      <!-- kleine Box für den Country-Namen -->
      <router-link
        :to="to"
        style="display:inline-block;border:1px solid #000;border-radius:8px;padding:6px 10px;">
        {{ title }}
      </router-link>
    </div>
  `
};
