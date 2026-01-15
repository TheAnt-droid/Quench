
import { TRENDING_POSTS } from "../../../public/trendingPostsData.js";
import dataService from "../../../service/dataService.js";


const KEY_FOLLOWED_TRENDING = "KEY_FOLLOWED_TRENDING";

const htmlTemplate = /*html*/`



<ul >
   <li v-for="post of trendingPosts" :key="post.id">
   <div class="postBox"> 
   <h3>{{ post.Title }}</h3>
    
   <p>
  <strong v-if="post.Type"> Type: </strong> <span v-if="post.Type">{{ post.Type }}</span>
  <strong v-if="post.Brand"> Brand: </strong> <span v-if="post.Brand">{{ post.Brand }}</span>
  <strong v-if="post.Serving"> Serving Size: </strong> <span v-if="post.Serving">{{ post.Serving }}</span>
</p>
<p>
  <strong v-if="post.Temperature"> Temperature: </strong> 
  <span v-if="post.Temperature">{{ post.Temperature }}</span>
  <span v-if="post.TempUnit">{{ post.TempUnit }}</span>

  <strong v-if="post.Amount"> Amount: </strong> 
  <span v-if="post.Amount">{{ post.Amount }}</span>
  <span v-if="post.AmountUnit">{{ post.AmountUnit }}</span>

  <strong v-if="post.Water"> Water Amount: </strong> 
  <span v-if="post.Water">{{ post.Water }}</span>
  <span v-if="post.WaterUnit">{{ post.WaterUnit }}</span>

  <strong v-if="post.Milk"> Milk Amount: </strong> 
  <span v-if="post.Milk">{{ post.Milk }}</span>
  <span v-if="post.MilkUnit">{{ post.MilkUnit }}</span>

  <strong v-if="post.Carbonated"> Carbonated: </strong>
  <span v-if="post.Carbonated">{{ post.Carbonated }}</span>

</p>
<p>
  <strong v-if="post.Date"> Steeping Date: </strong> <span v-if="post.Date">{{ post.Date }}</span>
  <strong v-if="post.Time"> Steeping Time: </strong> <span v-if="post.Time">{{ post.Time }}</span>
  <strong v-if="post.Brewing"> Brewing Time: </strong> <span v-if="post.Brewing">{{ post.Brewing }}</span>
  <span v-if="post.BrewingUnit">{{ post.BrewingUnit }}</span>
</p>
<p v-if="post.Rating">
  <strong> Rating: </strong>
  <span v-if="post.Rating === '1'">⭐</span>
  <span v-if="post.Rating === '2'">⭐⭐</span>
  <span v-if="post.Rating === '3'">⭐⭐⭐</span>
  <span v-if="post.Rating === '4'">⭐⭐⭐⭐</span>
  <span v-if="post.Rating === '5'">⭐⭐⭐⭐⭐</span>
</p>

<p v-if="post.TextArea">
  <strong> Notes: </strong> {{ post.TextArea }}
</p>


   
   <button class="devPostButton" @click="toggleFollow(post)">
      {{ post.isFollowed ? "Unfollow" : "Follow" }}
    </button>
   </div> 
    
  </li>
</ul>


`;
export default {
  template: htmlTemplate,
  components: { },
  data() {
    return {
      trendingPosts: TRENDING_POSTS.map(p=> ({ ...p, isFollowed: false }))
      
    }
  },
   created() {
   
    const followedIds = dataService.get(KEY_FOLLOWED_TRENDING) || [];

   
    this.trendingPosts.forEach(post => {
      post.isFollowed = followedIds.includes(post.id);
    });
  },

  methods: {
    toggleFollow(post) {
      post.isFollowed = !post.isFollowed;

      let followedIds = dataService.get(KEY_FOLLOWED_TRENDING) || [];

      if (post.isFollowed) {
        if (!followedIds.includes(post.id)) {
          followedIds.push(post.id);
        }
      } else {
        followedIds = followedIds.filter(id => id !== post.id);
      }

      dataService.save(KEY_FOLLOWED_TRENDING, followedIds);
    }
  }

};
