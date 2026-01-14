import editProfilePop from "../../components/EditProfile/editProfilePop.js";
import Header from "../../components/Shop/Header.js";
import postReadBox from "../../components/Posts/ReadPost/PostReadBox.js";
import dataService from "../../service/dataService.js";
const KEY_USER_PROFILE = "KEY_USER_PROFILE";
const htmlTemplate = /*html*/`
    <h2 style="color: #2c5530; margin-bottom: 1.5rem;">Your Profile</h2>

    <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      
      <div style="display: flex; align-items: center; gap: 2rem; margin-bottom: 2rem;">
        <div style="font-size: 3rem;">👤</div>
        <div>
          <h3 style="margin: 0 0 0.5rem 0; color: #2c5530;"> {{userInfo.username}} </h3>
          <p style="margin: 0; color: #666;">{{userInfo.title}}</p>
        </div>
          <div > <editProfilePop /> </div>
      </div>
    
      <div style="display: flex; gap: 3rem; margin-bottom: 2rem; text-align: center;">
        <div>
          <div style="font-size: 1.5rem; font-weight: bold; color: #4a7c59;">128</div>
          <div style="color: #666;">Reviews</div>
        </div>
        <div>
          <div style="font-size: 1.5rem; font-weight: bold; color: #4a7c59;">23</div>
          <div style="color: #666;">Following</div>
        </div>
        <div>
          <div style="font-size: 1.5rem; font-weight: bold; color: #4a7c59;">45</div>
          <div style="color: #666;">Followers</div>
        </div>
      </div>

      <div style="margin-bottom: 2rem;">
        <h4 style="color: #4a7c59; margin-bottom: 0.5rem;">Bio</h4>
        <p style="margin: 0; line-height: 1.6;" v-if="userInfo.bio">
          {{userInfo.bio}}
        </p>
      </div>
    

      <div>
        <h4 style="color: #4a7c59; margin-bottom: 1rem;">Recent Activity</h4>
       <postReadBox />

    </div>
  </div>

`;

export default {
  data() {
      return {
        userInfo: dataService.get(KEY_USER_PROFILE) || [],
      }
    },
  template: htmlTemplate,
  components: { Header, postReadBox, editProfilePop, dataService },
  
};
