import TeaReviewPost from './TeaReviewPost.js';
import CoffeeReviewPost from './CoffeeReviewPost.js';
import BeverageReviewPost from './BeverageReviewPost.js';
const htmlTemplate = /*html*/`

<div>
<TeaReviewPost v-if="DrinkType === 'Tea'" />
<CoffeeReviewPost v-else-if="DrinkType === 'Coffee'" />
<BeverageReviewPost v-else-if="DrinkType === 'Beverage'" />
</div>
`

export default {
  template: htmlTemplate,
  components:{TeaReviewPost, CoffeeReviewPost, BeverageReviewPost},
  props:['DrinkType']
};