import "./components/my-layout/index.js"

export const TAG_NAME = "my-page"

const createHTML = (params) => `
<my-layout>
</my-layout>
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
    const content = this.innerHTML
    const html = HTML// + content 
    shadow.setHTMLUnsafe(html)
  }
  initialize(){
  } 
}

customElements.define(TAG_NAME, CustomElem)
customElements.whenDefined(TAG_NAME).then(()=>console.log("!!! defined !!!",TAG_NAME))
