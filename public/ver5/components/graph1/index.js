import {CustomElem as NecoPlotly} from "neco-components/plotly/index.js"
import *as Person from "@/dataStore/person.js"

export const TAG_NAME = import.meta.url.split("/")?.slice(3,-1)?.join("-") ?? "origin"


export const CustomElem = class extends NecoPlotly {
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
    const property = Person.person.data
    const height = property.height*100
    const weight = property.weight
      const  trace1 = {
      x: [height],
      y: [weight],
      marker: {size: 8},
      mode: 'markers',
      name: 'YOU',
      type: 'scatter',
    }
    const BMIList = [18, 20,  22,  24,  26]
    const heightList = [...Array(51)].map((v,i)=>100+i*2)
    const weightList = BMIList.map(v=>heightList.map(u=>v*(u/100)**2)) 
    const BMIcurves = weightList.map((v,i)=>Object({
      x: heightList,
      y: v,
      mode: 'lines',
      name: 'BMI'+BMIList[i],
      type: 'scatter',  
    }))

    const data = [trace1, ...BMIcurves]
    const layout = {
      autosize: true,
      title: 'Height vs Weight',
      xaxis: {
        title: 'height [cm]',
        autorange: true,
        type: 'linear'
      },
      yaxis: {
        title: 'weight [kg]',
        autorange: true,
        type: 'linear'
      }
    }
    this.react(data,layout)
  } 
}

customElements.define(TAG_NAME, CustomElem)
customElements.whenDefined(TAG_NAME).then(()=>console.log("!!! defined !!!",TAG_NAME))
