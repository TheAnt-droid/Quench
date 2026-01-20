
export default {
  name: "HiddenGemCard",
  props: {
    gem: { type: Object, required: true }
  },
  template: /*html*/`
  
    <article>
      <h2>{{ gem.name }}</h2>
      <p class="postText">Type: {{ gem.type }}</p>
      <p class="postText">Location: {{gem.adress}}, {{ gem.city }}, {{ gem.country }}</p>
      <p class="postText" v-if="gem.note && gem.note.trim().length > 0">
        {{ gem.note }}
      </p>
    </article>
  `
};
