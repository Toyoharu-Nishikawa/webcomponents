import * as view from "./view.js"
import * as applicationAPI from "./applicationAPI.js"

let wb = null
export const initialize = (workbench) => {
  wb = workbench 
  applicationAPI.initialize(wb)
  view.button.initialize()
}

const wait = (timeout) => new Promise((resolve)=>setTimeout(resolve, timeout))

export const run = () => {
  const input1 = view.table.getInput()
  const output1 = input1+1
  view.table.setOutput(output1)

}

export const enableButtons = () =>{
  view.button.showButtons()  
}

export const setInput = (input) => {
  view.table.setInput(input)
}

export const getResults = () => {
  const input = view.table.getInput()
  const output = view.table.getOutput()
  const obj = {input, output}
  return obj
}

export const setResults = (data) => {
  const input = data.input
  const output = data.output
  view.table.setInput(input)
  view.table.setOutput(output)
}

export const send = () => {
  const obj = getResults()
  const data = {
    body: obj,
    method: "PUSH",
    stream: "DOWNSTREAM",
    identifier: "NAME",
  }
  wb.fetch("/wbb/wba/results",data) 
}

export const getInfo = async () => {
  const inf = await wb.getAppInfo()
  console.log("information", inf)
}

export const global = async () => {
  const obj = getResults()
  const data = {
    body: obj,
    method: "PUSH",
    stream: "GLOBAL",
    identifier: "NAME",
  }
  wb.fetch("/wbb/wba/results",data) 

}

export const label = async () => {
  const obj = getResults()
  const data = {
    body: obj,
    method: "PUSH",
    stream: "GLOBAL",
    identifier: "LABEL",
  }
  wb.fetch("/test/wba/results",data) 

}
export const itrTest = async () => {
  let count = 0
  while(count<20){
    const list = [...Array(1E6)].map((v,i)=>i)
    const data = {
      body: {data:list},
      method: "POST",
      stream: "DOWNSTREAM",
      identifier: "NAME",
    }
    const res = await wb.fetch("/wbb/calc",data) 
    //console.log("count",count,"res",res)
    console.log("count",count)
    await wait(10)
    count++
  }

}
export const get10 = async () => {
  const res = await wb.fetch("/wbb/get10",{stream: "DOWNSTREAM"}) 
  console.log("res",res)
}
export const get1 = async () => {
  const res = await wb.fetch("/wbb/get1",{stream: "DOWNSTREAM"}) 
  //const res = await wb.fetch("/wbb/results",{stream: "DOWNSTREAM"}) 
  console.log("res",res)
}

export const WORKBENCHtest = () => {
  wb.fetch("/WORKBENCH/test") 
}
