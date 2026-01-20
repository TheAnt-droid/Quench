import dataService from "../../../../service/dataService.js";
const htmlTemplate = /*html*/`


<h3> Post Title*</h3>
<input aria-label="Post Title, Required" type="text" id="title" name="title" placeholder="Post Title..." v-model="teaTrackingData.Title"/>

<ul><h3> Tea Tracking Details </h3>
<li class= "inputFields"><label for="Type" > Type of Tea* </label>
<select aria-label="Type of Tea, Required" id="Type" name="Type" v-model="teaTrackingData.Type">
    <option value="Green Tea">Green Tea</option>
    <option value="White Tea">White Tea</option>
    <option value="Black Tea">Black Tea</option>
    <option value="Fruit Tea">Fruit Tea</option>
    <option value="Oolong Tea">Oolong Tea</option>
    <option value="Yellow Tea">Yellow Tea</option>
    <option value="Herbal Tea">Herbal Tea</option>
    <option value="Other Tea">Other Tea</option>
</select>
</li>
<li class= "inputFields"><label for="brand"> Brand </label>
<input type="text" id="brand" name="brand" placeholder="Brand..." size="6" v-model="teaTrackingData.Brand"/>
</li>
<li class= "inputFields"><label for="Serving"> Serving Type </label>
<select id="Serving" name="Serving" v-model="teaTrackingData.Serving">
    <option value="Cup">Cup</option>
    <option value="Glass">Glass</option>
    <option value="Pot">Pot</option>
    <option value="Mug">Mug</option>
</select>
</li>

</ul>
<ul><h3> Brewing Details </h3>
 <li class= "inputFields"><label for="Temp"> Temperature </label>
    <input type="text" id="Temp" name="Temp" placeholder="Example 60°C" size="5" v-model="teaTrackingData.Temperature"/>
    <select id="TempUnit" name="TempUnit" v-model="teaTrackingData.TempUnit" aria-label="Select Unit">
        <option value="°C">°C</option>
        <option value="°F">°F</option>
    </select>
    
</li>
<li class= "inputFields"><label for="Amount"> Tea Amount </label>
    <input type="text" id="Amount" name="Amount" placeholder="Example 2g" size="5" v-model="teaTrackingData.Amount"/>
    <select id="AmountUnit" name="AmountUnit" v-model="teaTrackingData.AmountUnit" default="g" aria-label="Select Unit">
        <option value="g">g</option>
        <option value="tbsp">tbsp</option>
    </select>
</li>
<li class= "inputFields"><label for ="Water"> Water Amount </label>
    <input type="text" id="Water" name="Water" placeholder="Example 250ml" size="5" v-model="teaTrackingData.Water"/> 
    <select id="WaterUnit" name="WaterUnit" v-model="teaTrackingData.WaterUnit" default="ml" aria-label="Select Unit">
        <option value="ml">ml</option>
        <option value="cups">cups</option>
    </select>
</li>   
</ul>

<ul><h3> Steeping Details </h3>
<li class= "inputFields"><label for="Date"> Steeping Date </label>
    <input type="date" id="Date" name="Date" v-model="teaTrackingData.Date"/>
</li>
<li class= "inputFields"><label for="Time">Time </label>
    <input type="time" id="Time" name="Time" v-model="teaTrackingData.Time" />
</li>
<li class= "inputFields"><label for="Brewing"> Brewing Time</label>
    <input type="text" id="Brewing" name="Brewing" placeholder="Example 3min" size="5" v-model="teaTrackingData.Brewing"/>
    <select id="BrewingUnit" name="BrewingUnit" v-model="teaTrackingData.BrewingUnit" aria-label="Select Unit">
        <option value="seconds">seconds</option>
        <option value="minutes">minutes</option>
    </select>
    
</li>
</ul>

<div><textarea type="text" id="textArea" name="text" placeholder="Text Area (Optional)" v-model="teaTrackingData.TextArea"/></div>
<button aria-label="Post Button. Click to post!" @click="confirm()"class="buttonBig"> Post </button>



`
const KEY_TEA_TRACKING_DATA = "KEY_TEA_TRACKING_DATA";
export default {
  template: htmlTemplate,
  data () {
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
        },
      showPost:false,
    
    }
  },
  methods: {
    confirm (){
          if(this.teaTrackingData.Title===null){
            alert("Please enter a title for your post.");
            return;
          }else if(this.teaTrackingData.Type===null){
            alert("Please select a type.");
            return;
          }else{
          this.posts.push(this.teaTrackingData);
          dataService.save(KEY_TEA_TRACKING_DATA, this.posts);
          setTimeout(() => {
          window.location.href="./#/following";
          }, 100);
        //this.showPost = true;
        }
        }
}
};
