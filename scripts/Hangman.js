class Hangmen{
    // Constructor of the class
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split("")
        this.guessedLetter = []
        this.remainingGuesses = remainingGuesses
        this.status = "Playing"
    }

    // returns the puzzle
    get puzzle(){
        let puzzle = ``
        let count = 0
        this.word.forEach((letter) => {
            if (this.guessedLetter.includes(letter)){
                puzzle = puzzle+`${letter}`
            }else if(letter === " "){
                puzzle = puzzle + ` `
            }else{
                puzzle = puzzle+`*`
            }
            count = count + 1
        })
        return puzzle
    }

    // sets the guess
    setGuess(letter){
        const isUnique = !this.guessedLetter.includes(letter)
        const isBadGuess = !this.word.includes(letter)
        if (this.status === "Playing"){
            if (isUnique){
                this.guessedLetter.push(letter)
            }
        
            if (isUnique && isBadGuess){
                this.remainingGuesses--
            }
        }
    }

    // returns the status messages
    get statusMessage(){
        if (this.status === "Playing"){
            return `Guesses Left ${this.remainingGuesses}`
        } else if(this.status === "Failed"){
            return `Nice Try! the word was "${this.word.join("")}"`
        } else{
            return `Great Work! You Guessed The Word`
        }
    }

    // Recalculates the status
    recalculate(){
        const gameOver = (this.remainingGuesses <= 0)
        let count = 0
        for (let i = 0; i <= this.word.length; i++){
            if(this.puzzle.includes(this.word[i])){
                count++
            }
        }

        if(count === this.word.length){
            this.status = "Finished"
        }

        if (gameOver){
            this.status = "Failed"
        }
    }
}