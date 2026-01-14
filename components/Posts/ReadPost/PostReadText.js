
const htmlTemplate = /*html*/`

<div>
   <p>
  <strong v-if="customPost.Type"> Type: </strong> <span v-if="customPost.Type">{{ customPost.Type }}</span>
  <strong v-if="customPost.Brand"> Brand: </strong> <span v-if="customPost.Brand">{{ customPost.Brand }}</span>
  <strong v-if="customPost.Serving"> Serving Size: </strong> <span v-if="customPost.Serving">{{ customPost.Serving }}</span>
</p>
<p>
  <strong v-if="customPost.Temperature"> Temperature: </strong> 
  <span v-if="customPost.Temperature">{{ customPost.Temperature }}</span>
  <span v-if="customPost.TempUnit">{{ customPost.TempUnit }}</span>

  <strong v-if="customPost.Amount"> Amount: </strong> 
  <span v-if="customPost.Amount">{{ customPost.Amount }}</span>
  <span v-if="customPost.AmountUnit">{{ customPost.AmountUnit }}</span>

  <strong v-if="customPost.Water"> Water Amount: </strong> 
  <span v-if="customPost.Water">{{ customPost.Water }}</span>
  <span v-if="customPost.WaterUnit">{{ customPost.WaterUnit }}</span>

  <strong v-if="customPost.Milk"> Milk Amount: </strong> 
  <span v-if="customPost.Milk">{{ customPost.Milk }}</span>
  <span v-if="customPost.MilkUnit">{{ customPost.MilkUnit }}</span>

  <strong v-if="customPost.Carbonated"> Carbonated: </strong>
  <span v-if="customPost.Carbonated">{{ customPost.Carbonated }}</span>

</p>
<p>
  <strong v-if="customPost.Date"> Steeping Date: </strong> <span v-if="customPost.Date">{{ customPost.Date }}</span>
  <strong v-if="customPost.Time"> Steeping Time: </strong> <span v-if="customPost.Time">{{ customPost.Time }}</span>
  <strong v-if="customPost.Brewing"> Brewing Time: </strong> <span v-if="customPost.Brewing">{{ customPost.Brewing }}</span>
  <span v-if="customPost.BrewingUnit">{{ customPost.BrewingUnit }}</span>
</p>
<p v-if="customPost.Rating">
  <strong> Rating: </strong>
  <span v-if="customPost.Rating === '1'">⭐</span>
  <span v-if="customPost.Rating === '2'">⭐⭐</span>
  <span v-if="customPost.Rating === '3'">⭐⭐⭐</span>
  <span v-if="customPost.Rating === '4'">⭐⭐⭐⭐</span>
  <span v-if="customPost.Rating === '5'">⭐⭐⭐⭐⭐</span>
</p>

<p v-if="customPost.TextArea">
  <strong> Notes: </strong> {{ customPost.TextArea }}
</p>

</div>
`

export default {
  template: htmlTemplate,
  props: ["customPost"],
};