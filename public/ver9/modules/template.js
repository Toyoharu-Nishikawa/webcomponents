import {getTemplateHTML} from "./network.js"

export const makeHTML = async (data) => {
  const originalHTML = await getTemplateHTML() 
  const reg = /(window.__APP_DATA__ = )(.*)/
  const rep = "$1"+ JSON.stringify(data)
  const textOfHTML = originalHTML.replace(reg, rep)
  return textOfHTML
}
