const elements = {
  input1: document.getElementById("input1"),
  output1: document.getElementById("output1"),
}

export const setInput = (input) => {
  elements.input1.value = Number(input)
}

export const getInput = () => {
  const input1 = Number(elements.input1.value)
  return input1
}
export const getOutput = () => {
  const output1 = Number(elements.output1.value)
  return output1
}

export const setOutput = (output) => {
  elements.output1.value = output
}
