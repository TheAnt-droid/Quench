const htmlTemplate = /*html*/`

<div class=devPostImg>
  <img 
  v-if="devPost.img"
  :src="devPost.img" 
  :alt="devPost.alt" 
  :width="devPost.width" 
  :height="devPost.height"
/>
</div>
`

export default {
  template: htmlTemplate,
  props: ["devPost"],
};