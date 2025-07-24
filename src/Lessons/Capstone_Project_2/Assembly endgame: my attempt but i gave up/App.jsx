import React from 'react'
import Key from './components/Key.jsx'
import { languages } from "./languages.js"
import { reactWords } from "./words.js"

export default function Hangman() {
    const MAX_HEALTH = 9
    // const [currentWord, setCurrentWord] = React.useState(() => reactWords[Math.floor(Math.random() * reactWords.length)].toUpperCase())
    
    const [currentWord, setCurrentWord] = React.useState("React".toUpperCase())
    const [guessedLetters, setGuessedLetters] = React.useState([])
    const [wrongGuesses, setWrongGuesses] = React.useState([])
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let alphakeys = alphabet.split('').map((letter,index) => 
        ({
                value: letter.toUpperCase(),
                id: index,
                isPressed: false,
                isRight: false,
            })
        ) 
    const [keyboardKeys, setKeyboardKeys] = React.useState(() => alphakeys)
    const keyboardElements = keyboardKeys.map((k) => {
        return (
            <button 
                key={k.id}
                className={k.isPressed ? (k.isRight ? "correct" : "wrong") : "key"}
                onClick={()=> addGuessedLetter(k)}
                >
                    {k.value}
            </button>
        ) 
    })

    const [wordKeys, setWordKeys] = React.useState(() => 
        currentWord.split('').map((letter, index) => 
            (
                {
                    value: letter,
                    id: index,
                    isShown: false
                }
            )
        )
    )


    const wordKeyElements = wordKeys.map(key => {
        return (
            <button 
                className=''
                key={key.id}
            >
                {key.isShown ? key.value : null}
            </button>
        )}
    )
    
    
    // CHECK PRESSED KEY
    function addGuessedLetter(letter){
        if (!letter.isPressed){
            letter.isPressed = true
            letter.isRight = currentWord.includes(letter.value.toUpperCase())
            setWordKeys(prev => 
                prev.map(key =>
                    key.value === letter.value ?
                        { ...key, isShown: true } :
                        key
            ))
            setGuessedLetters(prev => 
                prev.includes(letter) ? 
                    prev :
                    [...prev, letter])
            !letter.isRight && setWrongGuesses(prev => [...prev, letter])
        }
    }

    const [languageObj,setLanguageObj] = React.useState(languages.map(lang => ({...lang, isDead: false})))
   


    // HEALTH POINTS
    const languageChips = languageObj.map((obj,index) => {
        const styles = {
            backgroundColor: obj.backgroundColor,
            color: obj.color,
            opacity: obj.isDead ? 0.1 : 1
        }
        return <div className="hp" key={index} style={styles}>{obj.name}</div>
    })

    const [healthPoints, setHealthPoints] = React.useState(MAX_HEALTH)

    React.useEffect(() => {
        setHealthPoints(prev => prev - 1)
        wrongGuesses.length >= 1 ? languageObj[wrongGuesses.length-1].isDead = true : null
    }, [wrongGuesses])


    // GAME CONDITIONS
    // wordKeys.every(key => key.isShown) && alert("you won!")
    // healthPoints === 0 && alert('Game over')

    // function resetGame(){
    //     setCurrentWord(prev => reactWords[Math.floor(Math.random() * reactWords.length)].toUpperCase())
    //     setWordKeys(prepareWord())
    //     setKeyboardKeys(alphakeys)
    //     setHealthPoints(MAX_HEALTH)
    //     setGuessedLetters([])
    //     setWrongGuesses([])
    // }

    return(
        <main>
            <div className="instructions">
                <h1>Assembly: Endgame</h1>
                <p> Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
                <section className="game-status">
                    <h1>This is a</h1>
                    <p>Conditionally rendered message</p>
                </section>
            </div>


            <div className="languageChips">
                {languageChips}
            </div>

            <div className="currentWord">
                {wordKeyElements}
            </div>

            <div className="keyboard">
                {keyboardElements}
            </div>

            <button className="new-game" onClick={() => resetGame()}>New Game</button>
        </main>
    )
}