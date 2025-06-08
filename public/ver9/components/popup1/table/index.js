import {CustomElem as NecoJspreadsheet} from "../../../lib/neco-jspreadsheet/index.js"

export const TAG_NAME = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin"

export const CustomElem = class extends NecoJspreadsheet {
  constructor(){
    super()
  }
  connectedCallback(){
    super.connectedCallback()
    console.log("connected callback of", TAG_NAME)
    this.initialize()
  }
  initialize(){
    this.draw()
//    Person.person.addCallback(this.draw.bind(this))
  }
  draw(){
    const columns = [
      { title:'height', width:100 },
      { title:'weight', width:100 },
    ]
    const data = [
      [100, 40],
      [100, 40],
      [100, 40],
      [100, 40],
      [100, 40],
    ]

    this.contents= {
      worksheets:[
        {tableOverflow:true,tableWidth:"auto",tableHeight:"auto",data,columns},
      ]
    }
  } 
}

customElements.define(TAG_NAME, CustomElem)
customElements.whenDefined(TAG_NAME).then(()=>console.log("!!! defined !!!",TAG_NAME))
