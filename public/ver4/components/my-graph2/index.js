import {CustomElem as NecoPlotly} from "neco-components/plotly/index.js"
import *as Person from "../../dataStore/person.js"
import {utility} from "../../database/utility.js"

export const TAG_NAME = "my-graph2"


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
    const BMI_DATA = utility.BMI_DISTRIBUTION
    const property = Person.person.data
    const BMI = property.BMI
    const b1 = utility.calcBMI_DISTRIBUTION(BMI)
    const  trace1 = {
      x: BMI_DATA.map(v=>v[0]),
      y: BMI_DATA.map(v=>v[1]),
      mode: 'lines',
      name: 'statistical data',
      type: 'scatter',
    }
    const  trace2 = {
      x: [BMI, BMI],
      y: [0,b1],
      mode: 'lines',
      name: 'YOU',
      type: 'scatter',
    }

    const data = [trace1,trace2]
    const layout = {
      autosize: true,
      title: 'BMI Distribution',
      xaxis: {
        title: 'BMI [-]',
        autorange: true,
        type: 'linear'
      },
      yaxis: {
        title: 'density distribution [%]',
        autorange: true,
        type: 'linear'
      }
    }
    this.react(data,layout)
  } 
}

customElements.define(TAG_NAME, CustomElem)
customElements.whenDefined(TAG_NAME).then(()=>console.log("!!! defined !!!",TAG_NAME))
