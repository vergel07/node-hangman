import Hangman from './hangman'
import getPuzzle from './request'


const puzzleElement = document.querySelector('#puzzle')
const guessElement = document.querySelector('#guesses')
const resetElement = document.querySelector('#reset')
let game1


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleElement.innerHTML = ''
    guessElement.textContent = game1.statusMsg

    game1.puzzle.split('').forEach((letter) => {
        const letterElement = document.createElement('span')
        letterElement.textContent = letter
        puzzleElement.appendChild(letterElement)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

resetElement.addEventListener('click', startGame)

startGame()