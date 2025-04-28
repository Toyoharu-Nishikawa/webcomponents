export const TAG_NAME = "my-menu"

const createHTML = (params) => `
<style>
  :host{
    border-bottom: 1px solid #DCDCDC;
    background: ghostwhite;
    --md-icon-button-icon-size: 48px;
    display: flex;
    align-items: center;
    gap: 40px;
  }
</style>
      <span style="position: relative">
        <md-icon-button id="usage-anchor">
          <md-icon>Description</md-icon>
        </md-icon-button>
        <md-menu id="usage-menu" anchor="usage-anchor">
          <md-menu-item>
            <div slot="headline">
              <label>
                Read file
                <input type="file" style="display:none;">
              </label>
            </div>
          </md-menu-item>
          <md-menu-item>
            <div slot="headline">Write file</div>
          </md-menu-item>
        </md-menu>
      </span>
      <md-icon-button>
        <md-icon>Construction</md-icon>
      </md-icon-button>
      <md-icon-button>
        <md-icon>Help</md-icon>
      </md-icon-button>


`

export const CustomElem = class extends HTMLElement {
  constructor(){
    super()
  }
  connectedCallback() {
    console.log("connected callback of my-menu")
    const internals = this.attachInternals()
    const isShadow = internals.shadowRoot
    if(isShadow) return

    const shadow = this.attachShadow({mode: 'open'});
    const HTML = createHTML()
    const content = this.innerHTML
    const html = HTML + content 
    shadow.setHTMLUnsafe(html)
  }
}

customElements.define(TAG_NAME, CustomElem)
customElements.whenDefined(TAG_NAME).then(()=>console.log("!!! defined !!!",TAG_NAME))
