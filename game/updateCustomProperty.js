// get css variable into js update it and back into css
export function getCustomProperty(elem, prop) {
  // getComputedStyle allows for getting css value
  // this returns string we will convert to float
  // the default is 0
  return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0
}

export function setCustomProperty(elem, prop, value) {
  elem.style.setProperty(prop, value)
}

export function incrementCustomProperty(elem, prop, inc) {
  setCustomProperty(elem, prop, getCustomProperty(elem, prop) + inc)
}
