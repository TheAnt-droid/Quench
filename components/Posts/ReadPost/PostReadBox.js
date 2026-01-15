import PostReadText from "./PostReadText.js";
import dataService from "../../../service/dataService.js";

const KEY_TEA_TRACKING_DATA = "KEY_TEA_TRACKING_DATA";
const htmlTemplate = /*html*/`

<button @click="clearCustom()">DevButton: Clear Custom Posts </button>

<ul > 
  
  <li class="postBox" v-for="customPost of customPosts.slice().reverse()">
    <h3>{{ customPost.Title }}</h3>
    <PostReadText :customPost="customPost" />
    
    
    
  </li>
</ul>
<div v-if="customPosts.length === 0">No Posts Yet </div>

`;
export default {
  template: htmlTemplate,
  components: { PostReadText },
  data() {
    return {
      customPosts: dataService.get(KEY_TEA_TRACKING_DATA) || [],
    }
  },
  methods: {
    clearCustom(){
      this.customPosts = [];
      dataService.save(KEY_TEA_TRACKING_DATA, this.customPosts);
    },
    
},

};
