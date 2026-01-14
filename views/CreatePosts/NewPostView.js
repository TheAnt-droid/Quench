import NavBar from "../../components/Navigation/NavBar.js";
import TopBar from "../../components/Navigation/TopBar.js";
import NavMenu from "../../components/Navigation/NavMenu.js";
import NewPost from "../../components/Posts/CreatePost/PostTypeSelection/NewPost.js";
const htmlTemplate = /*html*/`

<div>
    
    <NewPost />
   
</div>
`

export default {
  template: htmlTemplate,
  components: { NavBar, TopBar, NavMenu, NewPost }
  
};