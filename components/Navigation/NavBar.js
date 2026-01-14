const htmlTemplate = /*html*/`

<div>
  <nav>
    <ul class="bar">
      <li>
        <router-link to="/hiddenGems" aria-label="Hidden Gems. Press to open.">
          <span aria-hidden="true">⭐</span>
        </router-link>
      </li>

      <li>
        <router-link to="/newPost" aria-label="New Post. Press to open.">
          <span aria-hidden="true">🗒️</span>
        </router-link>
      </li>

      <li>
        <router-link to="/" aria-label="Home. Press to open.">
          <span aria-hidden="true">🏠</span>
        </router-link>
      </li>

      <li>
        <router-link to="/countries" aria-label="Countries. Press to open.">
          <span aria-hidden="true">🌎</span>
        </router-link>
      </li>

      <li>
        <router-link to="/shop" aria-label="Shop. Press to open.">
          <span aria-hidden="true">🛒</span>
        </router-link>
      </li>
    </ul>
  </nav>
</div>
`


export default {
  template: htmlTemplate
};