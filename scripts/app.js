const puzzleResult = document.querySelector('#puzzle')
const remainingGuess = document.querySelector('#guesses')
let game1

// event listener fires when a user use keyboard to enter the values
window.addEventListener("keypress", (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.setGuess(guess)
    renderHangman()
})

// sets the guesses and remainig guesses
const renderHangman = () => {
    puzzleResult.innerHTML = ''
    game1.recalculate()
    remainingGuess.textContent = game1.statusMessage

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleResult.appendChild(letterEl)
    })
}

// function using async/await operator to start the game
// async/await operator is used to get promises
const startGame = async () => {
    const puzzle = await getPuzzle(2)
    game1 = new Hangmen(puzzle, 5)
    renderHangman()
}

// An event listerner for rest button
document.querySelector('#rest').addEventListener('click', (e) => {
    startGame()
})

startGame()

// getPuzzle(2).then((puzzle) => {
//     console.log(puzzle)
// }).catch((error) => {
//     console.log(error)
// })

// getCurrentCountry().then((country) => {
//     console.log(country)
// }).catch((error) => {
//     console.log(error)
// })

