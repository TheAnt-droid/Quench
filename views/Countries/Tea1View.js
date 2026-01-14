import NavBar from "../../components/Navigation/NavBar.js";
import TopBar from "../../components/Navigation/TopBar.js";
import NavMenu from "../../components/Navigation/NavMenu.js";


  const htmlTemplate = /*html*/`
  
  <div>
    Pfefferminztee
    
</div>
<div>
    

    <main>
      <h2>Pfefferminztee</h2>
      <div style="display:flex; flex-direction:column; gap:24px; align-items:center;">
        <div style="max-width:320px; width:100%; border:1px solid #000; border-radius:8px; padding:16px; text-align:center;">
          Ingredience &amp; how to make the Tea: <br>
          <p>1 · Wasser aufkochen und in den Thermobecher füllen. 
          <br>2 · Die Pfefferminzzweige abbrausen und zusammen mit dem Zimt in den Becher geben. 
          <br>3 · Für 3-4 Minuten ziehen lassen, fertig ist herrlich duftender Pfefferminztee.</p>
        </div>

        <div style="max-width:320px; width:100%; border:1px solid #000; border-radius:8px; padding:16px; text-align:center;">
          Information about the Tea:
          <p>Pfefferminztee ist ein erfrischender Kräutertee, der aus den Blättern der Pfefferminzpflanze (Mentha piperita) hergestellt wird.
          <br>Er ist bekannt für seinen kühlenden Geschmack und seine wohltuenden Eigenschaften, die bei Verdauungsbeschwerden und Erkältungen helfen können.</p>

        </div>
      </div>
    
    </main>
  </div>
  `;

export default {
  template: htmlTemplate,
  components: { NavBar, TopBar, NavMenu }
};