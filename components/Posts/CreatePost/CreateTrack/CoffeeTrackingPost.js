import dataService from "../../../../service/dataService.js";
const htmlTemplate = /*html*/`

<div>
<h3>Post Title* </h3>
<input type="text" id="title" name="title" placeholder="Post Title..." v-model="teaTrackingData.Title"/>
<br />
<ul><h3> Coffee Tracking Details </h3>
<li class= "inputFields"><label for="Type"> Type of Coffee* </label>
<select id="Type" name="Type" v-model="teaTrackingData.Type">
    <option value="Arabica Coffee">Arabica</option>
    <option value="Coffy1 Coffee">Coffy1</option>
    <option value="Coffy2 Coffee">Coffy2</option>
    <option value="Coffy3 Coffee">Coffy3</option>
</select>
</li>
<li class= "inputFields"><label for="brand"> Brand </label>
<input type="text" id="brand" name="brand" placeholder="Brand..." size="6" v-model="teaTrackingData.Brand">
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
<br />
<ul><h3> Brewing Details </h3>
 <li class= "inputFields"><label for="Temp"> Temperature </label>
    <input type="text" id="Temp" name="Temp" placeholder="e.g. 60°C" size="5" v-model="teaTrackingData.Temperature">
    <select id="TempUnit" name="TempUnit" v-model="teaTrackingData.TempUnit" default="°C">
        <option value="°C">°C</option>
        <option value="°F">°F</option>
    </select>
    </li>
<li class= "inputFields"><label for="Amount"> Coffee Amount </label>
    <input type="text" id="Amount" name="Amount" placeholder="e.g. 200g" size="5" v-model="teaTrackingData.Amount">
    <select id="AmountUnit" name="AmountUnit" v-model="teaTrackingData.AmountUnit" default="g">
        <option value="g">g</option>
        <option value="tbsp">tbsp</option>
    </select>
</li>
<li class= "inputFields"><label for ="Water"> Water Amount </label>
    <input type="text" id="Water" name="Water" placeholder="e.g. 250ml" size="5" v-model="teaTrackingData.Water"> 
    <select id="WaterUnit" name="WaterUnit" v-model="teaTrackingData.WaterUnit" default="ml">
        <option value="ml">ml</option>
        <option value="cups">cups</option>
    </select>
</li>
  <li class= "inputFields">  <label for ="Milk"> Milk Amount </label>
    <input type="text" id="Milk" name="Milk" placeholder="e.g. 250ml" size="5" v-model="teaTrackingData.Milk"> 
    <select id="MilkUnit" name="MilkUnit" v-model="teaTrackingData.MilkUnit" default="ml">
        <option value="ml">ml</option>
        <option value="cups">cups</option>
    </select>
</li>
</ul>
<br />
<ul><h3> Steeping Details </h3>
<li class= "inputFields"><label for="Date"> Date </label>
    <input type="date" id="Date" name="Date" v-model="teaTrackingData.Date" >
</li>
<li class= "inputFields">
<label for="Time"> Time </label>
    <input type="time" id="Time" name="Time" v-model="teaTrackingData.Time" >
</li>
<li class= "inputFields"><label for="Brewing"> Brewing Time</label>
    <input type="text" id="Brewing" name="Brewing" placeholder="e.g. 3min" size="5" v-model="teaTrackingData.Brewing">
    <select id="BrewingUnit" name="BrewingUnit" v-model="teaTrackingData.BrewingUnit">
        <option value="seconds">seconds</option>
        <option value="minutes">minutes</option>
    </select>
</li>
</ul>
    <br />
<input type="text" id="textArea" name="text" placeholder="Text Area (Optional)" v-model="teaTrackingData.TextArea"/>
<br />
<button @click="confirm()"class="buttonBig"> Post </button>

</div>
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
          window.location.href="/#/following";
          }, 100);
       }
       }
}
};
