import state from "./state.js"
import * as el from "./elements.js"
import { reset } from "./actions.js"
import { kitchenTimer } from "./sounds.js"

export function countdown() {

  clearTimeout(state.countdownId)

  if (!state.isRunning) {
    return
  }

  let minutes = Number(el.minutes.textContent)
  let secondes = Number(el.seconds.textContent)

  secondes--

  if (secondes < 0) {
    secondes = 59
    minutes--
  }

  if (minutes < 0) {
    reset()
    kitchenTimer.play()
    return 
  }

  updateDisplay(minutes, secondes)

  state.countdownId = setTimeout(() => countdown() , 1000)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = minutes = String(minutes).padStart(2, "0")
  el.seconds.textContent = seconds = String(seconds).padStart(2, "0")
}