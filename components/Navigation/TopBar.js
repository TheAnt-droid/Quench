  import NavMenu from "./NavMenu.js"
  const htmlTemplate = /*html*/`
<div class="topBarContainer">
<h1 class="topBar" tabindex="-1" ref="mainFocus">🫖 Quench 🫖</h1>
<div class="overDiv">
  <div style="display:flex ; align-items:center">
        
        <input aria-label="Searchbar" type="text" id="search" name="query" placeholder="Search..." v-model="query"style="font-size:18px ; width:100px" > 
        <div><button @click="Search" aria-label="Start Search. Click to search." style="font-size:17px ; width:40px; height:30px; margin-right:5px"> 🔍 </button></div>
        
        <div><router-link to="/settings" aria-label="Settings. Click to open." style="font-size:25px; text-decoration:none ">⚙️</router-link></div>
        <div><router-link to="/profile" aria-label="Profile. Click to open." style="font-size:25px; text-decoration:none ">👤</router-link></div>
        
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
  mounted() {
    this.focusHeading();
  },
  watch: {
  $route() {
    this.focusHeading();
  }
}
,
  methods: {
    Search() {
      if (!this.query) {
        alert("Please enter a search query.");
        return;
      }else{
        this.$router.push({ path: '/search', query: { q: this.query } });
      }
    },
    focusHeading(){
      this.$nextTick(()=>{
        this.$refs.mainFocus.focus();
      })
    }
  },
};