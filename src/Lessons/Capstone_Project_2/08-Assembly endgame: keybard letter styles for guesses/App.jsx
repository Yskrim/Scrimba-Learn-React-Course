import { useState } from "react"
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
    const [currentWord, setCurrentWord] = useState("react")
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const languageElements = languages.map(lang => {
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        return (
            <span
                className="chip"
                style={styles}
                key={lang.name}
            >
                {lang.name}
            </span>
        )
    })

    const [guessedLetters, setGuessedLetters] = useState([])
    
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
                key={letter} 
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    })

    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the
                programming world safe from Assembly!</p>
            </header>
            <section className="game-status">
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </section>
            <section className="language-chips">
                {languageElements}
            </section>
            <section className="word">
                {letterElements}
            </section>
            <section className="keyboard">
                {keyboardElements}
            </section>
            <button className="new-game">New Game</button>
        </main>
    )
}
