import { useState, useEffect } from "react"
import { languages } from "./languages"
import { clsx } from "clsx"
import { getFarewellText } from "./utils"

export default function AssemblyEndgame() {
    
    // state values
    const [currentWord, setCurrentWord] = useState("react")
    const [guessedLetters, setGuessedLetters] = useState([])
    
    // Derived values
    const wrongGuesses = guessedLetters.filter(letter => !currentWord.includes(letter)).length

    const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuesses >= languages.length - 1
    const isGameOver = isGameLost || isGameWon
    const lastGuessedLetter = guessedLetters[guessedLetters.length-1]
    const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)

    // static values
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const languageElements = languages.map((lang, index) => {
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color,
        }
        return (
            <span
                className={clsx('chip', index < wrongGuesses && "lost")}
                style={styles}
                key={lang.name}
            >
                {lang.name}
            </span>
        )
    })
    

    function addGuessedLetter(letter) {
        setGuessedLetters(prev => 
            prev.includes(letter) ?
                prev : 
                [...prev, letter])
    }   

    

    const letterElements = currentWord.split("").map((letter, index) => {
        const isShown = guessedLetters.includes(letter)
        return (
            <span 
                key={index}
            >
                {isShown && letter.toUpperCase()}
            </span>
    )})
    
    
    const keyboardElements = alphabet.split("").map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const className = clsx({ correct: isCorrect, wrong: isWrong })

        return (
            <button 
            className={className}
                disabled={isGameOver}
                key={letter}
                aria-disabled={guessedLetters.includes(letter)} 
                aria-label={`letter ${letter}`}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    })

    const gameStatusClass = clsx("game-status",
        {
            won: isGameWon,
            lost: isGameLost,
            farewell: !isGameOver && isLastGuessIncorrect
        }
    )

    function renderGameStatus() {
        if (!isGameOver && isLastGuessIncorrect ) {
            return (
                <p className="farewell-message"> 
                    { getFarewellText(languages[wrongGuesses-1].name) }
                </p>
            )

        }

        if(isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        }

        if (isGameLost){
            return(
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </> 
            )
        }

        return null

    }



    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the
                programming world safe from Assembly!</p>
            </header>

            <section 
                aria-live="polite" 
                role="status" 
                className={gameStatusClass}
                >
                    { renderGameStatus() }
            </section>

            <section className="language-chips">
                { languageElements }
            </section>

            <section className="word">
                { letterElements }
            </section>

            {/* Combined visually hidden aria-live region for status updates */}
            <section 
                className="sr-only"
                aria-live="polite"
                role="status"
                >

                    <p>
                        { 
                            currentWord.includes(lastGuessedLetter) ? `Correct! the letter ${lastGuessedLetter} is in the word` : 
                            `Sorry, the letter ${lastGuessedLetter} is not in the word`
                        }

                        You have {languages.length - 1 - wrongGuesses} attempts left.
                    </p>

                    <p>
                        Current word: {currentWord.split("").map(letter=> guessedLetters.includes(letter) ? letter + "." : "blank.").join(" ")}
                    </p>


            </section>

            <section className="keyboard">
                { keyboardElements }
            </section>
            { isGameOver && <button className="new-game">New Game</button> }
        </main>
    )
}
