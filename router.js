import HomeView from './views/HomeScreen/HomeView.js';
import ProfileView from './views/Profile/ProfileView.js';
import CountriesView from './views/Countries/CountriesView.js';
import Country1View from './views/Countries/Country1View.js';
import HiddenGemsView from './views/HiddenGems/HiddenGemsView.js';
import NewPostView from './views/CreatePosts/NewPostView.js';
import ShopView from './views/Shop/ShopView.js';
import FollowingView from './views/ReadPosts/FollowingView.js';
import FeedbackView from './views/HomeScreen/FeedbackView.js';
import SpilledTeaView from './views/ReadPosts/SpilledTeaView.js';
import SettingsView from './views/HomeScreen/SettingsView.js';
import Tea1View from './views/Countries/Tea1View.js';
import SearchView from './views/HomeScreen/SearchView.js';
import Country2View from './views/Countries/Country2View.js';


const routes = [
  { path: '/', component: HomeView },
  { path: '/profile', component: ProfileView },
  { path: '/countries', component: CountriesView },
  { path: '/country1', component: Country1View },
  { path: '/hiddenGems', component: HiddenGemsView },
  { path: '/newPost', component: NewPostView },
  { path: '/shop', component: ShopView },
  { path: '/following', component: FollowingView },
  { path: '/feedback', component: FeedbackView},
  { path: '/spilledTea', component: SpilledTeaView},
  { path: '/settings', component: SettingsView },
  { path: '/tea1', component: Tea1View },
  { path: '/search', component: SearchView} ,
  { path: '/country2', component: Country2View }
  
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});