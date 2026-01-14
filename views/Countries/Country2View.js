import NavBar from "../../components/Navigation/NavBar.js";
import TopBar from "../../components/Navigation/TopBar.js";
import NavMenu from "../../components/Navigation/NavMenu.js";

const template = /*html*/`

<div>
  
  <h2>Country2</h2>
  <section>
    <h3>Tea</h3>
    <router-link to="/tea1">Pfefferminztee</router-link><br>
    <span>Grüner Tee</span><br>
    <span>Schwarzer Tee</span><br>
    <span>Kamillentee</span>
  </section>
  
  <section>
  <h3>Coffee</h3>
    <span>Wiener Eiskaffee</span><br>
    <span>Wiener Melange</span><br>
    <span>Verlängeter Schwarzer</span><br>
    <span>Kleiner Brauner</span>
  </section>
  
  <section>
    <h3>Other</h3>
    <span>Other1</span>
  </section>
   
</div>
`;

export default { name: "Country2View", template, components: { NavBar, TopBar, NavMenu } };
