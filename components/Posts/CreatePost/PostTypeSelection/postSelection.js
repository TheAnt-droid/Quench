import ValuesPostSelection from "./ValuesPostSelection.js";


const htmlTemplate = /*html*/`

<div>
<h1>New Post</h1>

<h2>What kind of Post do you want to create?</h2>
<div class="radioSelect">
<ul >
    <li><input type=radio value="Tracking" :checked="PostType === 'Tracking'" @click="toggleTrack('Tracking')" aria-label="Post Type:"> Tracking </li>
    <li><input type=radio value="Review" :checked="PostType === 'Review'"@click="toggleTrack('Review')"aria-label="Post Type:"> Review </li>
    <li><input type=radio value="Text Post" :checked="PostType === 'Text Post'"@click="toggleTrack('Text Post')"aria-label="Post Type:"> Text Post </li>
</ul>

<ul id="pfeil">
  ⬇️
</ul>

<ul>
  <li><input type=radio value="Tea" :checked="DrinkType === 'Tea'" @click="toggleType('Tea')" aria-label="DrinkType:"> Tea </li>
  <li><input type=radio value="Coffee" :checked="DrinkType === 'Coffee'" @click="toggleType('Coffee')"aria-label="DrinkType:"> Coffee</li>
  <li><input type=radio value="Beverage" :checked="DrinkType === 'Beverage'" @click="toggleType('Beverage')"aria-label="DrinkType:"> Beverage</li>
</ul>
</div>
  <br />  
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