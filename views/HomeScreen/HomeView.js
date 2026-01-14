import NavBar from "../../components/Navigation/NavBar.js";
import TopBar from "../../components/Navigation/TopBar.js";
import NavMenu from "../../components/Navigation/NavMenu.js";
import Auskunftsbox from "../../components/DevPosts/Auskunftsbox.js";

const htmlTemplate = /*html*/`

<div>
  
  <Auskunftsbox />
  
  
</div>
`

export default {
  template: htmlTemplate,
  components: { NavBar, TopBar, NavMenu, Auskunftsbox }
};