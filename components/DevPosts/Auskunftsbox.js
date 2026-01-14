import Auskunftstext from "./Auskunftstext.js";
import Auskunftsbild from "./Auskunftsbild.js";

const htmlTemplate = /*html*/`
<div class="devPostsContainer">
<ul>
  <li v-for="devPost of devPosts" :key="devPost.title">
    <article class=postBox>
      <h2 id=devPostTitle>{{ devPost.title }}</h2>

      <Auskunftstext :devPost="devPost" />
      <Auskunftsbild :devPost="devPost"/>

      <button 
        :aria-label="'Learn more about ' + devPost.title"
      class=devPostButton>
        Learn More
      </button>
    </article>
  </li>
</ul>
</div>

`;

export default {
  template: htmlTemplate,
  components: { Auskunftstext, Auskunftsbild },

  data() {
    return {
      devPosts: [
        { title:"Welcome to Quench!",
          text: "Discover a world of refreshing beverages and hidden gems. Stay tuned for exciting updates and features coming your way!",
          img: "public/resources/Tea.jpg" , alt: "Image displaying a cup of tea", width: "150", height: "100" },
        {
          title: "Green Tea: Health Benefits", 
          text: "Green tea is packed with antioxidants and can help improve focus. It supports the immune system and has a calming effect.", 
          img: "public/resources/D84.jpg" , alt: "Bild 1", width: "150", height: "100" },
        { title: "Black Tea: The Perfect Morning Ritual", 
          text: "Black tea contains caffeine and polyphenols that boost alertness. Perfect to start your day or enjoy a relaxing break.", 
          img: "" , alt: "", width: "", height: "" },
        { title: "Patchnotes v1.2.0", 
          text: "In this update, we have improved performance and fixed several bugs. Enjoy a smoother experience!", 
          img: "" , alt: "", width: "", height: "" },
      ]
    }
  }
};
