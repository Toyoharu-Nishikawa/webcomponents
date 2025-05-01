import {data as BMI_DISTRIBUTION} from "./BMI.js"
import {polyline} from "../modules/interpolation.js"


const Utility = class{
  constructor(){
  }
  setBMI_DISTRIBUTION(BMI_DISTRIBUTION){
    const x = BMI_DISTRIBUTION.map(v=>v[0])
    const y = BMI_DISTRIBUTION.map(v=>v[1])
    this.BMI_DISTRIBUTION = BMI_DISTRIBUTION
    this.BMI_FUNC = polyline(x,y)
  }
  calcBMI_DISTRIBUTION(BMI){
    return this.BMI_FUNC.f(BMI)
  }
}

export const utility = new Utility()

export const initialize = () => {
  console.log("initialize utility")
  utility.setBMI_DISTRIBUTION(BMI_DISTRIBUTION)
}

initialize()
