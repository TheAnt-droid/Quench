import dataService from "../../../../service/dataService.js";
const KEY_TEA_TRACKING_DATA = "KEY_TEA_TRACKING_DATA";
const htmlTemplate = /*html*/`

<div>
<h3 > Post Title* </h3>
<input aria-label="Post Title, Required" type="text" id="title" name="title" placeholder="Post Title..." v-model="teaTrackingData.Title"/>

<ul><h3> Beverage Review Details </h3>
<li class= "inputFields"><label for="Type" > Type of Beverage* </label>
<select aria-label="Type of Beverage, Required" id="Type" name="Type" v-model="teaTrackingData.Type" >
    <option value="Water">Water</option>
    <option value="Soda">Soda</option>
    <option value="Alkohol">Alcohol</option>
    <option value="Juice">Juice</option>
    <option value="Other">Other</option>
</select>
</li>
<li class= "inputFields">
<label for="brand" aria-label="Select Brand"> Brand </label>
<input type="text" id="brand" name="brand" placeholder="Brand..." size="6" v-model="teaTrackingData.Brand">
</li>
<li class= "inputFields">
    <label for="Carbonated"> Carbonated </label>
<select id="Carbonated" name="Carbonated" v-model="teaTrackingData.Carbonated">
    <option value="Yes">Yes</option>
    <option value="No">No</option>
</select>
</li>
</ul>
<div>
<ul ><label class= "inputFields">Rating:*</label>
<p class=visuallyHidden>Rating Required</p>

  <li class= "inputFields">
    <input aria-label="1 star" type="radio" value="1" v-model="teaTrackingData.Rating" /> <span aria-hidden=true>⭐</span>
  </li>
  <li class= "inputFields">
    <input aria-label="2 stars" type="radio" value="2" v-model="teaTrackingData.Rating" /> <span aria-hidden=true>⭐⭐</span>
 </li>
  <li class= "inputFields">
    <input aria-label="3 stars" type="radio" value="3" v-model="teaTrackingData.Rating" /> <span aria-hidden=true>⭐⭐⭐</span>
  </li>
  <li class= "inputFields">
    <input aria-label="4 stars" type="radio" value="4" v-model="teaTrackingData.Rating" /> <span aria-hidden=true>⭐⭐⭐⭐</span>
  </li>
  <li class= "inputFields">
    <input aria-label="5 stars" type="radio" value="5" v-model="teaTrackingData.Rating" /> <span aria-hidden=true>⭐⭐⭐⭐⭐</span>
 </li>
</ul>
</div>


<div><input type="text" id="textArea" name="text" placeholder="Text Area (Optional)" v-model="teaTrackingData.TextArea"/></div>

<button aria-label="Post Button. Click to post!" @click="confirm()" class="buttonBig"> Post </button>

</div>
`

export default {
  template: htmlTemplate,
  data() {
    return {
      posts: dataService.get(KEY_TEA_TRACKING_DATA) || [],
              teaTrackingData: {
                  Title: null,
                  Type: null,
                  Brand: null,
                  Serving: null,
                  Temperature: null,
                  TempUnit: null,
                  Amount: null,
                  AmountUnit: null,
                  Water: null,
                  WaterUnit: null,
                  Date: null,
                  Time: null,
                  Brewing: null,
                  BrewingUnit: null,
                  TextArea: null,
                  Carbonated: null,
                  Milk: null,
                  MilkUnit: null,
                  Rating: null,
              },
      showPost: false,
    };
  },
  methods: {
      confirm (){
            if(this.teaTrackingData.Title===null){
              alert("Please enter a title for your post.");
              return;
            }else if(this.teaTrackingData.Type===null){
              alert("Please select a type.");
              return;
            }else if(this.teaTrackingData.Rating===null){
              alert("Please provide a rating.");
              return;
            }else{
            this.posts.push(this.teaTrackingData);
            dataService.save(KEY_TEA_TRACKING_DATA, this.posts);
            setTimeout(() => {
          window.location.href="./#/following";
          }, 100);
          }
          }
  }
};
