import {CustomElem as NecoJspreadsheet} from "../../lib/neco-jspreadsheet/index.js"
import *as Person from "@/dataStore/person.js"
import {utility} from "@/database/utility.js"

console.log(window)

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
    Person.person.addCallback(this.draw.bind(this))
  }
  draw(){
    const BMI_DATA = utility.BMI_DISTRIBUTION
    const property = Person.person.data
    const BMI = property.BMI
    const height = property.height
    const weight = property.weight
    const columns = [
      { title:'height', width:100,readOnly:true },
      { title:'weight', width:100 },
      { title:'BMI', width:100 },
      { title:'BMI', width:100 },
      { title:'BMI', width:100 },
      { title:'BMI', width:100 },
    ]
    const data = [
      [height, weight, BMI],
      [height, weight, BMI],
      [height, weight, BMI],
      [height, weight, BMI],
      [height, weight, BMI],
      [height, weight, BMI],
      [height, weight, BMI],
      [height, weight, BMI],
      [height, weight, BMI],
      [height, weight, BMI],
      [height, weight, BMI],
      [height, weight, BMI],
      [height, weight, BMI],
      [height, weight, BMI],
      [height, weight, BMI],
      [height, weight, BMI],
      [height, weight, BMI],
    ]

    this.contents= {
//      toolbar: true,
      worksheets:[
        {tableOverflow:true,tableWidth:"auto",tableHeight:"auto",data,columns,
//        search: true,
//        pagination: 10,
//        paginationOptions: [10,25,50,100],
        },
//        {tableOverflow:true,tableWidth:"auto",tableHeight:"auto",data,columns}, 
//        {tableOverflow:true,tableWidth:"auto",tableHeight:"auto",data,columns},
//        {tableOverflow:true,tableWidth:"auto",tableHeight:"auto",data,columns},
//        {tableOverflow:true,tableWidth:"auto",tableHeight:"auto",data,columns},
//        {tableOverflow:true,tableWidth:"auto",tableHeight:"auto",data,columns},
//        {tableOverflow:true,tableWidth:"auto",tableHeight:"auto",data,columns},
//        {tableOverflow:true,tableWidth:"auto",tableHeight:"auto",data,columns},
//        {tableOverflow:true,tableWidth:"auto",tableHeight:"auto",data,columns},
//        {tableOverflow:true,tableWidth:"auto",tableHeight:"auto",data,columns},
//        {tableOverflow:true,tableWidth:"auto",tableHeight:"auto",data,columns},
      ]
    }
  } 
}

customElements.define(TAG_NAME, CustomElem)
customElements.whenDefined(TAG_NAME).then(()=>console.log("!!! defined !!!",TAG_NAME))
