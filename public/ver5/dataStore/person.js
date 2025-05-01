const targetSample = {
  height: 1.7, //[m]
  weight: 60,  //[kg]
}

export const initialize = () => {
  calc(targetSample)
  person.setData(targetSample)
  console.log("initialize person")
}

export const load = (data) => {
  console.log("load person")
  person.setData(data)
  runEvent(person.data)
}


const eventSet = new Set()
const runEvent = (obj, prop, value) =>{
  const funcList = [...eventSet.values()]
  funcList.forEach(func=>{
    func(obj, prop, value)
  })
}

export const calc = (obj) => {
  const BMI =Math.round(obj.weight/obj.height**2)
  obj.BMI = BMI
}

const handler = {
  get(obj, prop){
    return Reflect.get(obj, prop)
  },
  set(obj, prop, value){
    Reflect.set(obj, prop,value)
    calc(obj) 
    runEvent(obj, prop, value)
    return true
  }
}

export const person = {
  data: {},
  setData(obj){
    this.data = new Proxy(obj, handler)
  },
  addCallback(func){
    eventSet.add(func)
  },
}

initialize()

//dataStore.setData(target)
//
//const draw = (obj, prop, value, name)=> {
//  console.log("draw",obj)
//}
//dataStore.addCallback(draw)
//
//dataStore.data.height = 2
//console.log(dataStore.data)
//
//dataStore.data.width = 2
//console.log(dataStore.data)


