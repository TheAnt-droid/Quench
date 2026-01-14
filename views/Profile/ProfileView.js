import NavBar from "../../components/Navigation/NavBar.js";
import TopBar from "../../components/Navigation/TopBar.js";
import NavMenu from "../../components/Navigation/NavMenu.js";
import Header from "../../components/Shop/Header.js";

const activePage = 'profile';

const htmlTemplate = /*html*/`


  <Header page="${activePage}" />

  <main style="padding: 2rem; max-width: 800px; margin: 0 auto;">
    <h2 style="color: #2c5530; margin-bottom: 1.5rem;">Your Profile</h2>

    <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      
      <div style="display: flex; align-items: center; gap: 2rem; margin-bottom: 2rem;">
        <div style="font-size: 3rem;">👤</div>
        <div>
          <h3 style="margin: 0 0 0.5rem 0; color: #2c5530;">Hanem Megahed</h3>
          <p style="margin: 0; color: #666;">Tea & Coffee Connoisseur</p>
        </div>
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
        <p style="margin: 0; line-height: 1.6;">
          Passionate about discovering unique tea blends and artisanal coffee. Always on the lookout for the next perfect brew! ☕🍵
        </p>
      </div>

      <div>
        <h4 style="color: #4a7c59; margin-bottom: 1rem;">Recent Activity</h4>
        <div style="border-top: 1px solid #e0e0e0; padding-top: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0; border-bottom: 1px solid #f0f0f0;">
            <span>🍵 Morning tea review</span>
            <span style="color: #666; font-size: 0.9rem;">2h ago</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0; border-bottom: 1px solid #f0f0f0;">
            <span>🧊 Cold brew tutorial</span>
            <span style="color: #666; font-size: 0.9rem;">1 day ago</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0;">
            <span>🏠 My tea setup</span>
            <span style="color: #666; font-size: 0.9rem;">3 days ago</span>
          </div>
        </div>
      </div>

    </div>
  </main>

`;

export default {
  template: htmlTemplate,
  components: { Header, TopBar, NavMenu, NavBar  }
};
