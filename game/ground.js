import {
  getCustomProperty,
  incrementCustomProperty,
  setCustomProperty,
} from "./updateCustomProperty.js"

const SPEED = 0.05
const groundElems = document.querySelectorAll("[data-ground]")

export function setupGround() {
  setCustomProperty(groundElems[0], "--left", 0)
  setCustomProperty(groundElems[1], "--left", 300)
}

export function updateGround(delta, speedScale) {
  groundElems.forEach(ground => {
    incrementCustomProperty(ground, "--left", delta * speedScale * SPEED * -1)
    // reloop - pak pravi loop za da ne run out of space
    if (getCustomProperty(ground, "--left") <= -300) {
      incrementCustomProperty(ground, "--left", 600)
    }
  })
}
