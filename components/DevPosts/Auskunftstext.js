
const htmlTemplate = /*html*/`

<div class=postText>
   {{devPost.text}}
    
</div>
`

export default {
  template: htmlTemplate,
  props: ["devPost"],
};