import { useState, useEffect } from "react"
import { languages } from "./languages"
import { clsx } from "clsx"

/**
 * Goal: Allow the user to start guessing the letters
 * 
 * Challenge: Create a new array in state to hold user's
 * guessed letters. When the user chooses a letter, add
 * that letter to this state array.
 * 
 * Think: what would be the best way to store the user's
 * guessed letters? 
 */

export default function AssemblyEndgame() {
    // state values
    const [currentWord, setCurrentWord] = useState("react")
    const [guessedLetters, setGuessedLetters] = useState([])
    
    // Derived values
    const wrongGuesses = guessedLetters.filter(letter => !currentWord.includes(letter)).length

    const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuesses >= languages.length - 1
    console.log(languages.length)
    const isGameOver = isGameLost || isGameWon

    // const statusMessage = isGameLost && "Better luck next time" || isGameWon && "Well done!"
    // const statusTitle = isGameLost && "You lost" || isGameWon && "You win!"

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
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    })

    const gameStatusClass = clsx("game-status")
    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the
                programming world safe from Assembly!</p>
            </header>
            <section className={clsx("game-status", isGameOver ? (isGameLost ? "lost" : "won") : "" )}>
                { isGameOver ? 
                    ( isGameWon ? (
                            <>
                                <h2>You win!</h2>
                                <p>Well done! 🎉</p>
                            </>
                        ) : (
                            <>
                                <h2>Game over!</h2>
                                <p>You lose! Better start learning Assembly 😭</p>
                            </>
                        )
                    ) : ( 
                        null 
                    )
                }
            </section>
            <section className="language-chips">
                { languageElements }
            </section>
            <section className="word">
                { letterElements }
            </section>
            <section className="keyboard">
                { keyboardElements }
            </section>
            { isGameOver && <button className="new-game">New Game</button> }
        </main>
    )
}
