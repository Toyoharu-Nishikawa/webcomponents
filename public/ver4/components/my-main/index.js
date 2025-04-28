import "../my-table/index.js"
import "../my-graph1/index.js"
import "../my-graph2/index.js"
import "../my-cad/index.js"
//import "neco-components/minijscad/index.js"
 
export const TAG_NAME = "my-main"


const createHTML = (params) => `
<style>
  :host{
    display: grid;
    grid-template-rows:    1fr 1fr;
    grid-template-columns: 1fr 1fr;
    overflow:hidden;
  }
  *{
    padding: 20px;
  }
  [name="top-left"] {
    grid-row: 1/2;
    grid-column: 1/2;
    overflow:hidden;
  }
  [name="top-right"] {
    grid-row: 1/2;
    grid-column: 2/3;
    overflow:hidden;
  }
  [name="bottom-left"] {
    grid-row: 2/3;
    grid-column: 1/2;
    overflow:hidden;
  }
  [name="bottom-right"]{
    grid-row: 2/3;
    grid-column: 2/3;
    overflow:hidden;
  }
</style>
<my-table name="top-left"></my-table>
<my-cad name="top-right"></my-cad>
<my-graph1 name="bottom-left"></my-graph1>
<my-graph2 name="bottom-right"></my-graph2>
`

export const CustomElem = class extends HTMLElement {
  constructor(){
    super()
  }
  connectedCallback() {
    console.log("connected callback of", TAG_NAME)
    const internals = this.attachInternals()
    const isShadow = internals.shadowRoot
    if(isShadow) return
    
    const shadow = this.attachShadow({mode: 'open'})
    const HTML = createHTML()
    const content = this.innerHTML
    const html = HTML// + content 
    shadow.setHTMLUnsafe(html)
    this.shadow = shadow
  }
}

customElements.define(TAG_NAME, CustomElem)
customElements.whenDefined(TAG_NAME).then(()=>console.log("!!! defined !!!",TAG_NAME))
