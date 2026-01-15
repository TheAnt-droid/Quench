import ValuesPostSelection from "./ValuesPostSelection.js";


const htmlTemplate = /*html*/`

<div>
<h2>New Post</h2>
<div class="postBut">
    <router-link to="/"><button> Cancel </button> </router-link>  
</div> 
<h3>What kind of Post do you want to create?</h3>
<div class="radioSelect">
<ul >
    <li><input type=radio value="Tracking" :checked="PostType === 'Tracking'" @click="toggleTrack('Tracking')" aria-label="Choose Post Type:"> Tracking </li>
    <li><input type=radio value="Review" :checked="PostType === 'Review'"@click="toggleTrack('Review')"aria-label="Choose Post Type:"> Review </li>
    <li><input type=radio value="Text Post" :checked="PostType === 'Text Post'"@click="toggleTrack('Text Post')"aria-label="Choose Post Type:"> Text Post </li>
</ul>
<p class=visuallyHidden>Choose what kind of drink you want to talk about next!</p>
<p id="pfeil" aria-hidden=true>⬇️</p>

<ul>
  <li><input type=radio value="Tea" :checked="DrinkType === 'Tea'" @click="toggleType('Tea')" aria-label="Choose Drink Type:"> Tea </li>
  <li><input type=radio value="Coffee" :checked="DrinkType === 'Coffee'" @click="toggleType('Coffee')"aria-label="Choose Drink Type:"> Coffee</li>
  <li><input type=radio value="Beverage" :checked="DrinkType === 'Beverage'" @click="toggleType('Beverage')"aria-label="Choose Drink Type:"> Beverage</li>
</ul>
</div>
  <ValuesPostSelection :PostType="PostType" :DrinkType="DrinkType" />

</div>

`


export default {
  template: htmlTemplate,
  components: { ValuesPostSelection },
  data() {
    return {
      PostType: null,
      DrinkType: null,
    };
  },
  methods: {
    toggleTrack(value) {
      if (this.PostType === value) {
  
      this.PostType = null;
      } else {
      
      this.PostType = value;
      }

     },
    toggleType(value) {
      if (this.DrinkType === value) {
  
    this.DrinkType = null;
    } else {
  
    this.DrinkType = value;
    }
    }
  }
};