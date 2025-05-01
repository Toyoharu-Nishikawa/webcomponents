import *as Person from "@/dataStore/person.js"

export const TAG_NAME = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin"


const createHTML = (params) => `
<style>
  *{
    padding: 20px;
  }
</style>

<md-outlined-text-field label="Height [cm]" name="height"></md-outlined-text-field>
<md-outlined-text-field label="Weight [kg]" name="weight"></md-outlined-text-field>
<md-filled-text-field label="BMI" readonly name="BMI"></md-filled-text-field>
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
    this.elements = {height, weight,BMI}
    height.oninput=(e)=>{
      Person.person.data.height=e.target.value/100
    }
    weight.oninput=(e)=>{
      Person.person.data.weight=e.target.value
    }
  }
  setProperty(){
    const property = Person.person.data
    const height = this.elements.height 
    const weight = this.elements.weight 
    const BMI    = this.elements.BMI 
    height.value = property.height*100
    weight.value = property.weight
    BMI.value    = property.BMI
  }
}

customElements.define(TAG_NAME, CustomElem)
customElements.whenDefined(TAG_NAME).then(()=>console.log("!!! defined !!!",TAG_NAME))
