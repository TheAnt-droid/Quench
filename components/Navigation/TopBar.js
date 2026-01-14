  import NavMenu from "./NavMenu.js"
  const htmlTemplate = /*html*/`
<div class="topBarContainer">
<h1 class="topBar">🫖 Quench 🫖</h1>
<div class="overDiv">
  <div style="display:flex ; align-items:center">
        
        <label for="search" style="font-size:18px; margin-right:5px"> Search Bar </label>
        <input type="text" id="search" name="query" placeholder="Search..." v-model="query"style="font-size:18px ; width:100px" > 
        <button @click="Search" aria-label="Start Search. Click to search." aria-hidden="true"style="font-size:17px ; width:40px; height:30px; margin-right:5px"> 🔍 </button>
        <router-link to="/settings" aria-label="Settings. Click to open." aria-hidden="true"style="font-size:25px">⚙️</router-link>
        <router-link to="/profile" aria-label="Profile. Click to open." aria-hidden="true"style="font-size:25px">🧝</router-link>
</div>
        <NavMenu/>
        
</div>
</div>
`
export default {
  template: htmlTemplate,
  components:{NavMenu},
  data () {
    return {
      query: ""
    };
  },
  methods: {
    Search() {
      if (!this.query) {
        alert("Please enter a search query.");
        return;
      }else{
        this.$router.push({ path: '/search', query: { q: this.query } });
      }
    }
  },
};