import Auskunftstext from "./Auskunftstext.js";
import Auskunftsbild from "./Auskunftsbild.js";

const htmlTemplate = /*html*/`
<div class="devPostsContainer">
<ul>
  <li v-for="devPost of devPosts" :key="devPost.title">
    <article class=postBox>
      <h2 id=devPostTitle>DevPost: {{ devPost.title }}</h2>

      <Auskunftstext :devPost="devPost" />
      <Auskunftsbild :devPost="devPost"/>

      
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
          title: "From Leaf to Cup – Why We Built This Tea Platform", 
          text: "When we started developing this tea website, we didn’t just want to create another online shop. Our goal was to build a place where tea lovers can discover stories, flavors, and the passion behind every leaf", 
          img: "public/resources/D84.jpg" , alt: "Image displaying a dagger", width: "150", height: "100" },
        { title: "Brewing the Future – What’s Next for Our Tea Website", 
          text: "In the coming months, we’re working on exciting features: personalized tea recommendations, brewing reminders, and even a small tea community where you can share your favorite blends and rituals.", 
          img: "" , alt: "", width: "", height: "" },
        { title: "Patchnotes v1.2.0", 
          text: "In this update, we have improved performance and fixed several bugs. Enjoy a smoother experience!", 
          img: "" , alt: "", width: "", height: "" },
      ]
    }
  }
};
