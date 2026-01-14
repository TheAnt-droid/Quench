import TeaTrackingPost from './TeaTrackingPost.js';
import CoffeeTrackingPost from './CoffeeTrackingPost.js';
import BeverageTrackingPost from './BeverageTrackingPost.js';
const htmlTemplate = /*html*/`

<div>
<TeaTrackingPost v-if="DrinkType === 'Tea'" />
<CoffeeTrackingPost v-else-if="DrinkType === 'Coffee'"  />
<BeverageTrackingPost v-else-if="DrinkType === 'Beverage'" />
</div>
`

export default {
  template: htmlTemplate,
  components:{TeaTrackingPost, CoffeeTrackingPost, BeverageTrackingPost},
  props:['DrinkType']
};