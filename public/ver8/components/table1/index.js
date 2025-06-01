import *as Person from "@/dataStore/person.js"
import *as Settings from "@/dataStore/settings.js"

export const TAG_NAME = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin"


//    padding: 20px;
const createHTML = () => /*html*/`
<style>
  :host{
    display:flex;
    gap: 30px;
  }
  [name=right]{
    display:flex;
    flex-flow: column;
    gap: 20px;
  }
</style>

<div name="left">
  <label>
    Auto run 
    <md-switch selected name="auto_run_switch"></md-switch>
  </label>
</div>
<div name="right">
  <md-outlined-text-field label="Height [cm]" name="height"></md-outlined-text-field>
  <md-outlined-text-field label="Weight [kg]" name="weight"></md-outlined-text-field>
  <md-filled-text-field label="BMI" readonly name="BMI"></md-filled-text-field>
</div>
`


export const CustomElem = class extends HTMLElement {
  constructor(){
    super()
    this.shadow
    this.property ={}
    this.elements = {}
  }
  connectedCallback() {
    console.log("connected callback of", TAG_NAME)
    const internals = this.attachInternals()
    const isShadow = internals.shadowRoot
    if(isShadow) return
    
    const shadow = this.attachShadow({mode: 'open'})
    const HTML = createHTML()
    shadow.setHTMLUnsafe(HTML)
    this.shadow = shadow
    this.initialize()
  }
  initialize(){
    this.setElements()
    Person.person.addCallback(this.setProperty.bind(this))
    this.setProperty()
  } 
  setElements(){
    const height = this.shadow.querySelector("[name=height]") 
    const weight = this.shadow.querySelector("[name=weight]") 
    const BMI = this.shadow.querySelector("[name=BMI]") 
    const auto_run_switch = this.shadow.querySelector("[name=auto_run_switch]") 
    this.elements = {height, weight,BMI}
    height.oninput=(e)=>{
      Person.person.data.height=e.target.value
    }
    weight.oninput=(e)=>{
      Person.person.data.weight=e.target.value
    }
    auto_run_switch.onchange=(e)=>{
      Settings.settings.data.autoRun= !Settings.settings.data.autoRun
    }
  }
  setProperty(){
    const property = Person.person.data
    /* input */
    const height = this.elements.height 
    const weight = this.elements.weight 
    height.value = property.height
    weight.value = property.weight

    /* output */
    const BMI    = this.elements.BMI 
    BMI.value    = property.BMI
  }
}

customElements.define(TAG_NAME, CustomElem)
customElements.whenDefined(TAG_NAME).then(()=>console.log("!!! defined !!!",TAG_NAME))
