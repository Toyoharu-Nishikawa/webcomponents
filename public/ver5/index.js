/* layout */
import {TAG_NAME as page} from "./layout/page/index.js"
import {TAG_NAME as header} from "./layout/header/index.js"
import {TAG_NAME as menu} from "./layout/menu/index.js"
import {TAG_NAME as aside} from "./layout/aside/index.js"
import {TAG_NAME as main} from "./layout/main/index.js"
import {TAG_NAME as footer} from "./layout/footer/index.js"
import {TAG_NAME as grid} from "./layout/grid/index.js"

/* components */
import {TAG_NAME as header_text} from "./components/header_text/index.js"
import {TAG_NAME as menu_icons} from "./components/menu_icons/index.js"
import {TAG_NAME as side_buttons} from "./components/side_buttons/index.js"
import {TAG_NAME as table1} from "./components/table1/index.js"
import {TAG_NAME as cad1} from "./components/cad1/index.js"
import {TAG_NAME as graph1} from "./components/graph1/index.js"
import {TAG_NAME as graph2} from "./components/graph2/index.js"
import {TAG_NAME as footer_text} from "./components/footer_text/index.js"

export const TAG_NAME = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin"

const createHTML = () => /*html*/`
<${page}>
  <${header} name=header>
    <${header_text}>SAMPLE APP</${header_text}>
  </${header}>
  <${menu} name=menu>
    <${menu_icons}></${menu_icons}>
  </${menu}>
  <${aside} name=aside>
    <${side_buttons}></${side_buttons}>
  </${aside}>
  <${main} name=main>
    <${grid}>
      <${table1}></${table1}>
      <${cad1}></${cad1}>
      <${graph1}></${graph1}>
      <${graph2}></${graph2}>
    </${grid}>
  </${main}>
  <${footer} name=footer>
    <${footer_text}>version 0.0.1</${footer_text}>
  </${footer}>
</${page}>
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

    const shadow = this.attachShadow({mode: 'open'});
    const HTML = createHTML()
    shadow.setHTMLUnsafe(HTML)
  }
}

customElements.define(TAG_NAME, CustomElem)
customElements.whenDefined(TAG_NAME).then(()=>console.log("!!! defined !!!",TAG_NAME))
