const htmlTemplate = /*html*/`

<div style="display:flex ; align-items:center">

    <div><router-link to="/spilledTea"><button aria-label="Change View to Trending: Spilled Tea"> Spilled Tea </button> </router-link></div>
    <div><router-link to="/following"><button aria-label="Change View to Following"> Following </button> </router-link></div>
    <div><router-link to="/newPost"><button aria-label="Create a new post."> ➕ </button> </router-link> </div>
  

</div>
`

export default {
  template: htmlTemplate
};