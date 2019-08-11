class Hangman {
    constructor(word, remainingGueses) {
        this.word = word.toLowerCase().split('')
        this.remainingGueses = remainingGueses
        this.guestLetters = []
        this.status = 'playing'
    }
    calculateStatus() {
        const finished = this.word.every((letter) => this.guestLetters.includes(letter) || letter === ' ')

        if (this.remainingGueses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get statusMsg(){
        if (this.status === 'playing') {
            return `Guesess Left: ${this.remainingGueses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}"`
        } else {
            return 'Great work! You guessed the word'
        }
    }

    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guestLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        }) 

        return puzzle
    }

    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guestLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        
        if (this.status !== "playing") {
            return 
        }
        
        if (isUnique) {
            // Spread operators
            this.guestLetters = [...this.guestLetters, guess]
            // this.guestLetters.push(guess)
        }
        
        if (isUnique && isBadGuess) {
            this.remainingGueses--
        }

        this.calculateStatus()
    }
}

export { Hangman as default }

