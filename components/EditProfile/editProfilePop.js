import dataService from "../../service/dataService.js";

const KEY_USER_PROFILE = "KEY_USER_PROFILE";
const htmlTemplate = /*html*/`
<div id="overlay">
  <div class="modal">
    <h2>Edit Profile</h2>

    <div class="form-group">
      <label for="username" >Username</label>
      <input type="text" v-model="userInfo.username" id="username" placeholder="Enter your username">
    </div>

    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" v-model="userInfo.title" id="title" placeholder="Enter your title">
    </div>

    <div class="form-group">
      <label for="bio">Bio</label>
      <textarea id="bio" v-model="userInfo.bio" placeholder="Tell us about yourself"></textarea>
    </div>

    <div class="actions">
      <button class="btn secondary" @click="off()">Cancel</button>
      <button class="btn primary" @click="saveProfile()">Save</button>
    </div>
  </div>
</div>

<button class="btn primary" @click="on()">Edit Profile</button>
`;



export default {
  template: htmlTemplate,
  components: { dataService },
  data () {
    return{
    userInfo: dataService.get(KEY_USER_PROFILE) || { username: 'Sunflower13', title: 'Tea Lover', bio: ' Passionate about discovering unique tea blends and artisanal coffee. Always on the lookout for the next perfect brew! ☕🍵' },
        
    }
  },
  methods:{
    on() {
      document.getElementById("overlay").style.display = "block";
    },
    off() {
      document.getElementById("overlay").style.display = "none";
      window.location.reload();
  },
  saveProfile() {
    
    if(this.userInfo.username === '') {
      alert("Username cannot be empty.");
      return;
    }else if(this.userInfo.username.length > 20) {
      alert("Username cannot exceed 20 characters.");
      return;
    }else{
    this.userInfo.username = this.userInfo.username.trim();
    }
    if(this.userInfo.title.length > 50) {
      alert("Title cannot exceed 50 characters.");
      return;
    }else if(this.userInfo.title === '') {
        this.userInfo.title = 'I love Quench!';
    }else{
    this.userInfo.title = this.userInfo.title.trim();
    }
    
    if(this.userInfo.bio.length > 160) {
      alert("Bio cannot exceed 160 characters.");
      return;
    }else if(this.userInfo.bio === '') {
        this.userInfo.bio = 'This user has not set a bio yet.';
    }else{
    this.userInfo.bio = this.userInfo.bio.trim();}  
    dataService.save(KEY_USER_PROFILE, this.userInfo);
    this.off();    
  }
}
};