import {run, send, getInfo, global, label,itrTest,get10,get1} from "../viewModel.js"

const elements = {
  runBt: document.getElementById("runBt"),
  sendBt: document.getElementById("sendBt"),
  infoBt: document.getElementById("infoBt"),
  globalBt: document.getElementById("globalBt"),
  labelBt: document.getElementById("labelBt"),
  itrTestBt: document.getElementById("itrTestBt"),
  get10Bt: document.getElementById("get10Bt"),
  get1Bt: document.getElementById("get1Bt"),
}


export const initialize = () => {
  elements.runBt.onclick = execRun
  elements.sendBt.onclick = execSend
  elements.infoBt.onclick = execGetInfo
  elements.globalBt.onclick = execGlobal
  elements.labelBt.onclick = execLabel
  elements.itrTestBt.onclick = execItrTest
  elements.get10Bt.onclick = execGet10
  elements.get1Bt.onclick =  execGet1 

  elements.sendBt.style.display    = "none"
  elements.infoBt.style.display    = "none"
  elements.globalBt.style.display  = "none"
  elements.labelBt.style.display   = "none"
  elements.itrTestBt.style.display = "none"
  elements.get10Bt.style.display   = "none"
  elements.get1Bt. style.display   = "none"

}

const execRun = () =>  {
  run() 
}

const execSend = () =>  {
  send() 
}

const execGetInfo = () =>  {
  getInfo() 
}

const execGlobal = () =>  {
  global() 
}
const execLabel = () =>  {
  label() 
}
const execItrTest = () =>  {
  itrTest() 
}

const execGet10 = () =>  {
  get10() 
}

const execGet1 = () =>  {
  get1() 
}

export const showButtons = () => {
  elements.sendBt.style.display    = "flex"
  elements.infoBt.style.display    = "flex"
  elements.globalBt.style.display  = "flex"
  elements.labelBt.style.display   = "flex"
  elements.itrTestBt.style.display = "flex"
  elements.get10Bt.style.display   = "flex"
  elements.get1Bt. style.display   = "flex"
}
