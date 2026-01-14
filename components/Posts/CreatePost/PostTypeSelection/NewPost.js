import postSelection from "./postSelection.js";
import PostButtons from "./PostButtons.js";
const htmlTemplate = /*html*/`

<div>
    <PostButtons/>
    <postSelection/>
   
</div>
`  
export default {
  template: htmlTemplate,
  components: { postSelection, PostButtons }
};