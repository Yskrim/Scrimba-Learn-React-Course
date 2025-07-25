import { useState, useEffect } from "react"
import { languages } from "./languages"
import { clsx } from "clsx"


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

    function renderGameStatus() {
        if (!isGameOver) {
            return null
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
    }

    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the
                programming world safe from Assembly!</p>
            </header>
            <section className={clsx("game-status", isGameOver ? (isGameLost ? "lost" : "won") : "" )}>
                { renderGameStatus() }
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
