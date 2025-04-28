import *as Person from "../../dataStore/person.js"
import {importFiles} from "../../node_modules/filereader/index.js"

export const TAG_NAME = "my-aside"

const createHTML = (params) => `
<style>
  :host{
    border-right: 1px solid #DCDCDC;
    display: flex;
    flex-flow: column;
    padding: 50px;
  }
</style>
      <md-list>
        <md-list-item>
          <md-filled-tonal-button name="load-btn">
            <md-icon slot="icon">play_arrow</md-icon>load
          </md-filled-tonal-button>
        </md-list-item>
        <md-list-item>
          <md-filled-tonal-button name="save-btn">
            <md-icon slot="icon">play_arrow</md-icon>save
            <input type="file" name="files"  style="display:none;">
          </md-filled-tonal-button>
        </md-list-item>
        <md-list-item>
          <md-filled-tonal-button name="run-btn">
            <md-icon slot="icon">play_arrow</md-icon>run
          </md-filled-tonal-button>
        </md-list-item>
      </md-list>
`

export const CustomElem = class extends HTMLElement {
  constructor(){
    super()
    this.elements={}
  }
  connectedCallback() {
    console.log("connected callback of my-aside")
    const internals = this.attachInternals()
    const isShadow = internals.shadowRoot
    if(isShadow) return
    
    const shadow = this.attachShadow({mode: 'open'})
    const HTML = createHTML()
    const content = this.innerHTML
    const html = HTML + content 
    shadow.setHTMLUnsafe(html)
    this.shadow = shadow
    this.initialize()
  }
  initialize(){
    this.setElements()
  }
  setElements(){
    const load = this.shadow.querySelector("[name=load-btn]")
    const save = this.shadow.querySelector("[name=save-btn]")
    const files = this.shadow.querySelector("[name=files]")
    const run  = this.shadow.querySelector("[name=run-btn]")
    this.elements={load,save,run}
    save.onclick=(e)=>{
      const data = Person.person.data
      const exportText = JSON.stringify(data,null, "  ")
      const filename = "input.json"
      const blob = new Blob([exportText], {type: 'text/plain; charset=utf-8'})
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.download = filename 
      a.click()
      a.remove()
    }
    load.onclick=async(e)=>{
      const f    = await importFiles(files)
      const text = f[0].text 
      const data = JSON.parse(text)
      Person.load(data)
    }
  }
}

customElements.define(TAG_NAME, CustomElem)
customElements.whenDefined(TAG_NAME).then(()=>console.log("!!! defined !!!",TAG_NAME))
