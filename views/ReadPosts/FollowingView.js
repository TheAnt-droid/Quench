import NavBar from "../../components/Navigation/NavBar.js";
import TopBar from "../../components/Navigation/TopBar.js";
import NavMenu from "../../components/Navigation/NavMenu.js";
import PostReadBox from "../../components/Posts/ReadPost/PostReadBox.js";
import FYPSelection from "../../components/Posts/ReadPost/FYPSelection.js";
import BspPosts from "../../components/Posts/ReadPost/BspPosts.js";

import dataService from "../../service/dataService.js";
import { TRENDING_POSTS } from "../../public/trendingPostsData.js";

const KEY_FOLLOWED_TRENDING = "KEY_FOLLOWED_TRENDING";

const htmlTemplate = /*html*/`

<div>
  <div>

      <h2> Following </h2>
     <FYPSelection />
      <h2>Your Posts</h2>
      <PostReadBox />

      <h2>Followed Trending Posts</h2>

      <ul  v-if="followedTrendingPosts.length > 0">
        <li class="postBox" v-for="post of followedTrendingPosts" :key="post.id">
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
          <button @click="unfollow(post)">Unfollow</button>
        </li>
      </ul>
      <div v-else>
        You are not following any trending posts yet.
      </div>
    </div>
    </div>
    
`;

export default {
  template: htmlTemplate,

  components: {
    NavBar,
    TopBar,
    NavMenu,
    PostReadBox,
    FYPSelection,
    BspPosts
  },
 data() {
  return {
    followedIds: dataService.get(KEY_FOLLOWED_TRENDING) || []
  };
},
computed: {
  followedTrendingPosts() {
    // filtert TRENDING_POSTS nach aktuellen followedIds
    return TRENDING_POSTS.filter(post => this.followedIds.includes(post.id));
  }
},
methods: {
  unfollow(post) {
    // ID aus der reactive Liste entfernen
    this.followedIds = this.followedIds.filter(id => id !== post.id);
    // Storage aktualisieren
    dataService.save(KEY_FOLLOWED_TRENDING, this.followedIds);
  }
}

};
