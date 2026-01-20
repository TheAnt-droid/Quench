

import CountriesGrid from "../../components/Countries/CountriesGrid.js";
const htmlTemplate = /*html*/`


<div style="font-family:sans-serif;padding:16px;">
  <CountriesGrid />
  <div style="margin-top:16px;">
  </div>
</div>
`;

export default {
  name: "CountriesView",
  template: htmlTemplate,
  components: {  CountriesGrid }
};