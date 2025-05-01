const targetSample = {
  autoRun: true, 
}

export const initialize = () => {
  settings.setData(targetSample)
}
const eventSet = new Set()
const handler = {
  get(obj, prop){
    return Reflect.get(obj, prop)
  },
  set(obj, prop, value){
    Reflect.set(obj, prop,value)
    return true
  }
}
 
export const settings = {
  data: {},
  setData(obj){
    this.data = new Proxy(obj, handler)
  },
  addCallback(func){
    eventSet.add(func)
  },
}
 
initialize()
  