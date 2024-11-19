import state from "./state.js"
import * as el from "./elements.js"

export function countdown() {
  if (!state.isRunning) {
    return
  }

  console.log('inicou')

  setTimeout(() => countdown() , 1000)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = minutes = String(minutes).padStart(2, "0")
  el.seconds.textContent = seconds = String(seconds).padStart(2, "0")
}