import {TAG_NAME as cad} from "../cad/index.js"

export const TAG_NAME = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin"

const createHTML = () => /*html*/`
<style>
  :host{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: minmax(0,1fr);
    grid-template-rows: minmax(0,1fr);
  }
</style>
<${cad}></${cad}>
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
