import {initialize} from "./gui/viewModel.js"

const sleep = t => new Promise(resolve=>setTimeout(resolve,t))

const main = async () =>{
//  try{
    const necoengine = await import("/necoengine/scripts/necoengine/index.js")
    necoengine.login.setLoginButton()
    necoengine.login.visit()
    const workbench = new necoengine.Workbench()
    initialize(workbench)
    workbench.informInitializationComplete({retry:10,interval:1E3})
//  }
//  catch(e){
//    console.log("necoengine is not alive")
//  }
}

main()


