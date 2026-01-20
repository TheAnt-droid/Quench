import HomeView from './views/HomeScreen/HomeView.js';
import ProfileView from './views/Profile/ProfileView.js';
import CountriesView from './views/Countries/CountriesView.js';
import HiddenGemsView from './views/HiddenGems/HiddenGemsView.js';
import NewPostView from './views/CreatePosts/NewPostView.js';
import ShopView from './views/Shop/ShopView.js';
import FollowingView from './views/ReadPosts/FollowingView.js';
import FeedbackView from './views/HomeScreen/FeedbackView.js';
import SpilledTeaView from './views/ReadPosts/SpilledTeaView.js';
import SettingsView from './views/HomeScreen/SettingsView.js';

import SearchView from './views/HomeScreen/SearchView.js';
import TeaView from './views/Countries/tea.js';
import RecipeView from './views/Countries/RecipeView.js';



const routes = [
  { path: '/', component: HomeView },
  { path: '/profile', component: ProfileView },
  { path: '/hiddenGems', component: HiddenGemsView },
  { path: '/newPost', component: NewPostView },
  { path: '/shop', component: ShopView },
  { path: '/following', component: FollowingView },
  { path: '/feedback', component: FeedbackView},
  { path: '/spilledTea', component: SpilledTeaView},
  { path: '/settings', component: SettingsView },
  { path: '/search', component: SearchView} ,
  {path: '/tea/:country', component: TeaView},
  {path: '/tea/:country/:recipe', component: RecipeView},
  {path: '/countries', component: CountriesView}
  
  
  
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

