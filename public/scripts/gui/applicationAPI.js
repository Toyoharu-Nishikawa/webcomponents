import {enableButtons,setInput,getResults,setResults,run,send} from "./viewModel.js"

export const initialize = (wb) => {
  const app= wb.express()

  app.use("initialize",()=>{
    enableButtons() 
  })

  app.get("/:source/results",(req,res)=> {
    console.log("request", req)
    console.log("response", res)
    console.log("params", req.params)
    const obj = getResults()
    res.json(obj)
  })

  app.get("/results",(req,res)=> {
    console.log("request", req)
    console.log("response", res)
    const obj = getResults()
    res.json(obj)
  })

  app.post("/inputs",(req,res)=> {
    console.log("request", req)
    console.log("response", res)
    const input = req.body.input
    setInput(input)
    res.json({msg:"ok"})
  })

  app.update("/run",(req,res)=> {
    console.log("run on WBA")
    run()    
    res.json({msg:"run"})
  })

  app.update("/send",(req,res)=> {
    console.log("send to  downstream")
    send()    
    res.json({msg:"send"})
  })

  app.get("/register/data",(req,res)=> {
    const data = getResults() 
    res.json(data)
  })
  app.post("/register/data",(req,res)=> {
    console.log("req",req)
    const data = req.body
    setResults(data)
    res.json()
  })
}



