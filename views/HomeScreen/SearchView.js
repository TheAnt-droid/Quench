import NavBar from "../../components/Navigation/NavBar.js";
import TopBar from "../../components/Navigation/TopBar.js";
import NavMenu from "../../components/Navigation/NavMenu.js";


const htmlTemplate = /*html*/`

<div>
  
  <h1>Search View</h1>
  <p> No Results Found. -This is just a placeholder page </p>

  
</div>
`

export default {
  template: htmlTemplate,
  components: { NavBar, TopBar, NavMenu }
  //props:['query'],
};