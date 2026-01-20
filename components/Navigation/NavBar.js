const htmlTemplate = /*html*/`

<div>
  
    <ul class="bar">
      <li>
        <router-link to="/hiddenGems" >
          <span aria-hidden=true >💎</span>
          <span class=visuallyHidden >Hidden Gems. Click to open</span>
        </router-link>
      </li>

      <li>
        <router-link to="/spilledTea" >
          <span aria-hidden=true>🗒️</span>
          <span class=visuallyHidden >Spilled Tea - Trending now. Click to open.</span>
        </router-link>
      </li>

      <li>
        <router-link to="/" >
          <span aria-hidden=true >🏠</span>
          <span class=visuallyHidden >Home. Click to open</span>
        </router-link>
      </li>

      <li>
        <router-link to="/countries" >
          <span aria-hidden=true>🌎</span>
          <span class=visuallyHidden >Countries. Click to open</span>
        </router-link>
      </li>

      <li>
        <router-link to="/shop" >
          <span aria-hidden=true >🛒</span>
          <span class=visuallyHidden >Shop. Click to open</span>
        </router-link>
      </li>
    </ul>
  
</div>
`


export default {
  template: htmlTemplate
};