import NavBar from "../../components/Navigation/NavBar.js";
import TopBar from "../../components/Navigation/TopBar.js";
import NavMenu from "../../components/Navigation/NavMenu.js";
import PostReadBox from "../../components/Posts/ReadPost/PostReadBox.js";
import FYPSelection from "../../components/Posts/ReadPost/FYPSelection.js";

import dataService from "../../service/dataService.js";
import { TRENDING_POSTS } from "../../public/trendingPostsData.js";

const KEY_FOLLOWED_TRENDING = "KEY_FOLLOWED_TRENDING";

const htmlTemplate = /*html*/`

<div>
  <div>

      <h1> Following </h1>
      <FYPSelection />
      <h2>Your Posts</h2>
      <PostReadBox />

      <h2>Followed Trending Posts</h2>

      <ul v-if="followedTrendingPosts.length > 0">
        <li v-for="post of followedTrendingPosts" :key="post.id">
          <h3>{{ post.Title }}</h3>
          <p>{{ post.Type }} by {{ post.Brand }}</p>
          <p>{{ post.TextArea }}</p>
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
    FYPSelection
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
