const htmlTemplate = /*html*/`
<div class="burger-container">
  <button class="burger-btn" @click="Toggle" aria-label="Navigation Menu. Click to open"> ☰ </button>
  <div class="menu-overlay" v-if="showMenu" @click="CloseMenu">

  <nav class="burger-menu" :class="{ open: showMenu }">
    <ul><h2 id="menuTitle"> Menu </h2>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
      <li><router-link to="/countries">Countries</router-link></li>
      <li><router-link to="/hiddenGems">Hidden Gems</router-link></li>
      <li><router-link to="/spilledTea">Spilled Tea - Trending Now</router-link></li>
      <li><router-link to="/following">Following</router-link></li>
      <li><router-link to="/newPost">New Post</router-link></li>
      <li><router-link to="/shop">Shop</router-link></li>
      <li><router-link to="/feedback">Feedback</router-link></li>
    </ul>
  </nav>
</div>
</div>
`

export default {
  template: htmlTemplate,

  data () {
    return {
      showMenu: false
    }
  },

  methods: {
    Toggle() {
      this.showMenu = !this.showMenu;
    },
    CloseMenu() {
      this.showMenu = false;
    }
  }
};
