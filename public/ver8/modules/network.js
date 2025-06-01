export const getTemplateHTML = async() => {
  const URL = "./dist/index.html" 
  const res = await fetch(URL)
  const text = await res.text()
  return text
}