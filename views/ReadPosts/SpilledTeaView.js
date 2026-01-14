import NavBar from "../../components/Navigation/NavBar.js";
import TopBar from "../../components/Navigation/TopBar.js";
import NavMenu from "../../components/Navigation/NavMenu.js";
import BspPosts from "../../components/Posts/ReadPost/BspPosts.js";
import FYPSelection from "../../components/Posts/ReadPost/FYPSelection.js";

const htmlTemplate = /*html*/`

<div>
   <h1> Spilled Tea - Trending </h1>
    <FYPSelection />
    <BspPosts />
    
</div>
`

export default {
  template: htmlTemplate,
  components: { NavBar, TopBar, NavMenu, BspPosts, FYPSelection }
};