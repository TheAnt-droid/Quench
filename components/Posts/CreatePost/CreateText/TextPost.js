import dataService from "../../../../service/dataService.js";
const htmlTemplate = /*html*/`

<h2 v-if="DrinkType"> Text Post about {{DrinkType}} </h2>
<h3> Post Title* </h3>
<input type="text" id="title" name="title" placeholder="Post Title..." v-model="teaTrackingData.Title"/>
<br />
<h3><label for="textArea"> Whats on your mind? </label></h3>
<input type="text" id="textArea" name="text" placeholder="Text Area (Optional)" v-model="teaTrackingData.TextArea"/>
<br />
<button @click="confirm()"class="buttonBig"> Post </button>

</div>
`
const KEY_TEA_TRACKING_DATA = "KEY_TEA_TRACKING_DATA";
export default {
  template: htmlTemplate,
  props: ["DrinkType"],
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
