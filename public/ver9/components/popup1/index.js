import {TAG_NAME as popup} from "./popup/index.js"
import {TAG_NAME as main} from "./main/index.js"

import *as Person from "@/dataStore/person.js"
import *as Settings from "@/dataStore/settings.js"

export const TAG_NAME = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin"

const createHTML = () => /*html*/`
<style>
  ${popup}{
    --popup-width: 800px;
    --popup-height: 500px;
  }
</style>

<${popup}>
  <${main}></${main}>
</${popup}>
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
