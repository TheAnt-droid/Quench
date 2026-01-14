import TrackingPost from "../CreateTrack/TrackingPost.js";
import TextPost from "../CreateText/TextPost.js";
import ReviewPost from "../CreateReview/ReviewPost.js";

const htmlTemplate = /*html*/`

<div >
<TrackingPost v-if="PostType === 'Tracking'" :DrinkType="DrinkType" />
<ReviewPost v-else-if="PostType === 'Review'" :DrinkType="DrinkType"  />
<TextPost v-else-if="PostType === 'Text Post'" :DrinkType="DrinkType" />
</div>
`

export default {
  template: htmlTemplate,
  props:['PostType', 'DrinkType'],
  components: { TrackingPost, ReviewPost, TextPost  }
};