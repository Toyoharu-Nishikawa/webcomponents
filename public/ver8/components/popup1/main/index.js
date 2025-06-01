import {TAG_NAME as table} from "../table/index.js"
import {TAG_NAME as graph} from "../graph/index.js"

export const TAG_NAME = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin"

const createHTML = () => /*html*/`
<style>
  :host{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 300px 1fr;
  }
  ${table} {
    grid-column: 1/2;
  }
  ${graph} {
    grid-column: 2/3;
  }
</style>
<${table}></${table}>
<${graph}></${graph}>
`

export const CustomElem = class extends HTMLElement {
  constructor(){
    super()
    this.shadow
  }
  connectedCallback() {
    console.log("connected callback of", TAG_NAME)
    const shadow = this.attachShadow({mode: 'open'})
    const HTML = createHTML()
    shadow.setHTMLUnsafe(HTML)
    this.shadow = shadow
    this.initialize()
  }
  initialize(){
  } 
}

customElements.define(TAG_NAME, CustomElem)
customElements.whenDefined(TAG_NAME).then(()=>console.log("!!! defined !!!",TAG_NAME))
