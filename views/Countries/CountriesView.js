import NavBar from "../../components/Navigation/NavBar.js";
import TopBar from "../../components/Navigation/TopBar.js";
import NavMenu from "../../components/Navigation/NavMenu.js";

import CountriesGrid from "../../components/Countries/CountriesGrid.js";
const htmlTemplate = /*html*/`

<!-- Countries (mobile) -->
<div style="font-family:sans-serif;padding:16px;">
  <CountriesGrid />
  <div style="margin-top:16px;">
  </div>
</div>
`;

export default {
  name: "CountriesView",
  template: htmlTemplate,
  components: { NavBar, TopBar, NavMenu, CountriesGrid }
};