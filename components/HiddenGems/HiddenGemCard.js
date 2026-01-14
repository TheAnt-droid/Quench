
export default {
  name: "HiddenGemCard",
  props: {
    gem: { type: Object, required: true }
  },
  template: /*html*/`
  
    <article>
      <h3>{{ gem.name }}</h3>
      <p>Type: {{ gem.type }}</p>
      <p>Location: {{ gem.city }}, {{ gem.country }}</p>
      <p v-if="gem.note && gem.note.trim().length > 0">
        {{ gem.note }}
      </p>
    </article>
  `
};
