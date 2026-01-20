
import BspPosts from "../../components/Posts/ReadPost/BspPosts.js";
import FYPSelection from "../../components/Posts/ReadPost/FYPSelection.js";

const htmlTemplate = /*html*/`

<div>
   <h2> Spilled Tea - Trending </h2>
    <FYPSelection />
    <section aria-label="Filter hidden gems">
        <h3>Filter by type</h3>
        <button type="button" @click="setFilter('all')">All</button>
        <button type="button" @click="setFilter('Tracking')">Tracking</button>
        <button type="button" @click="setFilter('Review')">Review</button>
        <button type="button" @click="setFilter('Text')">Text Post</button>
      </section>
    <BspPosts :active-filter="typeFilter" />
    
</div>
`

export default {
  template: htmlTemplate,
  components: { BspPosts, FYPSelection },
  data() {
    return {
      typeFilter: "all"
    };
  },
  methods: {
    setFilter(value) {
      this.typeFilter = value;
    }
  }
};