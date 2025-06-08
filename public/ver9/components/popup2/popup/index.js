import {CustomElem as NecoPopup} from "lib/neco-popup/index.js"
import *as Settings from "@/dataStore/settings.js"


export const TAG_NAME = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin"

export const CustomElem = class extends NecoPopup {
  constructor(){
    super()
  }
  connectedCallback(){
    super.connectedCallback()
    console.log("connected callback of", TAG_NAME)
    this.initialize()
  }
  initialize(){
    Settings.settings.addCallback(this.draw.bind(this))
    this.addHideCallback(this.hideFunc)
    this.addShowCallback(this.showFunc)
  }
  hideFunc(){
    Settings.settings.data.popup2Visible = false
  }
  showFunc(){
    Settings.settings.data.popup2Visible = true
  }
  draw(){
    const property = Settings.settings.data
    const popup2Visible = property.popup2Visible
    if(popup2Visible){
      this.show()
    }
    else{
      this.hide()
    }
  } 
}

customElements.define(TAG_NAME, CustomElem)
customElements.whenDefined(TAG_NAME).then(()=>console.log("!!! defined !!!",TAG_NAME))
