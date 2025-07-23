import React from "react"
import { languages } from "./languages"

/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: 
 * 1. Save a "currentWord" in state. Initialize as "react".
 * 2. Map over the letters of the word (you'll need to turn 
 *    the string into an array of letters first) and display
 *    each one as a <span>. Capitalize the letters when
 *    displaying them.
 * 3. Style to look like the design. You can get the underline 
 *    effect on the box using `border-bottom`.
 */

export default function AssemblyEndgame() {

    const [currentWord, setCurrentWord] = React.useState("react".toUpperCase())

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const currentWordLetters = currentWord.split("").map((letter, index) =>{
        return(
            {
                value: letter,
                isShown: false,
                id: index
            }
        )
    })

    const currentWordElements = currentWordLetters.map((obj,index) =>{
        return <span key={index}>{obj.value}</span>
        })

    const languageChips = languages.map(lang => {
        const styles = {
            backgroundColor : lang.backgroundColor,
            color: lang.color
        }
        return (<span 
            key={lang.name}
            className="chip" 
            style={styles}
            >{ lang.name }</span>
        )
    })

    const keyboardKeys = alphabet.split('').map((letter,index) => {
        return (
            {
                value: letter,
                id: index,
                isPressed: false,
                isRight: false,
            })
    })

    const keyboardElements = keyboardKeys.map((obj, index) => (
        <button className="key" key={index}>{obj.value.toUpperCase()}</button>
    ))

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
                {languageChips}
            </section>
            <section className="word">
                {currentWordElements}
            </section>
            <section className="keyboard">
                {keyboardElements}
            </section>
            <button className="new-game">New Game</button>
        </main>
    )
}
