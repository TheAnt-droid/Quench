const htmlTemplate = /*html*/`
<div>
  <button class="btn primary" @click="showOverlay = true">Details</button>

  <div v-if="showOverlay" class="overlay-style" @click.self="showOverlay = false">
    <div class="modal-content">
      <h3>Product Info</h3>
      <p>{{ details }}</p>
      <button @click="showOverlay = false">Close</button>
    </div>
  </div>
</div>
`;

export default {
  template: htmlTemplate,
  props: ['details'],
  data() {
    return {
      showOverlay: false 
    }
  }
};