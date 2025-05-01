export const TAG_NAME = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin"

const createHTML = () => `
<style>
  :host{
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
    console.log("connected callback of", TAG_NAME)
    const shadow = this.attachShadow({mode: 'open'});
    const HTML = createHTML()
    shadow.setHTMLUnsafe(HTML)
  }
}

customElements.define(TAG_NAME, CustomElem)
customElements.whenDefined(TAG_NAME).then(()=>console.log("!!! defined !!!",TAG_NAME))
