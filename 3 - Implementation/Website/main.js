const gameContainer = document.querySelector('.gameContainer')

const gameStatsArea = document.createElement('div')
const gameWordArea = document.createElement('div')
const gameTypingArea = document.createElement('div')
const gameResetButton = document.createElement('div')
const gameTypingField = document.createElement('input')
const gameProgress = document.createElement('span')
gameStatsArea.classList.add("gameStatsArea")
gameWordArea.classList.add("gameWordArea")
gameTypingArea.classList.add("gameTypingArea")
gameResetButton.classList.add("gameResetButton")
gameTypingField.classList.add("gameTypingField")
gameTypingField.setAttribute("type", "text")
gameProgress.classList.add("gameProgress")

window.onload = () => {
  gameContainer.appendChild(gameStatsArea)
  gameContainer.appendChild(gameWordArea)
  gameContainer.appendChild(gameTypingArea)
  gameContainer.appendChild(gameResetButton)
  gameTypingArea.appendChild(gameTypingField)
  gameStatsArea.appendChild(gameProgress)
}
