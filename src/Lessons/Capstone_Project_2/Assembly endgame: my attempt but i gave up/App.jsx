import React from 'react'
import Key from './components/Key.jsx'
import {languages} from "./languages.js"
import { reactWords } from "./words.js"

export default function Hangman() {
    // const [guessedWord, setGuessedWord] = React.useState(() => reactWords[Math.floor(Math.random() * reactWords.length)].toUpperCase())
    const [guessedWord, setGuessedWord] = React.useState("React".toUpperCase())
    
    const [wordKeys, setWordKeys] = React.useState(guessedWord.split('').map((letter, index) => 
       ({
            value: letter,
            id: index,
            isShown: false
        })
    ))


    const wordKeyElements = wordKeys.map(key => <button key={key.id}>{key.isShown && key.value}</button>)
    
    // <button key={index}>{letter.toUpperCase()}</button>)

    const [keys, setKeys] = React.useState(() => loadKeys())
    
    // KEYBOARD
    function loadKeys(){
        let keys = []
        for(let i = 65; i < 91; i++) {
            keys.push({ 
                value: String.fromCharCode(i),
                id: i - 65,
                isPressed: false,
                isRight: false
            })
        }
        return keys
    }

    const [guessedLetters, setGuessedLetters] = React.useState([])
    
    // CHECK PRESSED KEY
    function checkKey(obj) {
        setKeys(prev => 
            prev.map(key => 
                key.id === obj.id ?
                    {
                        ...obj, 
                        isPressed: true, 
                        isRight: guessedWord.includes(obj.value.toUpperCase()) 
                    } :
                    key
                ))
        // console.log(obj)
    }
    console.log(guessedLetters)
    
    guessedLetters.forEach(letter => letter.isRight ? languages[guessedLetters.length - 1].isDead = false : true )

    // SHOW PRESSED KEY IN THE WORD
    function showKey(value) {
        setWordKeys(prev => 
            prev.map(key =>
                key.value === value ?
                    {
                        ...key,
                        isShown: true
                    } :
                    key
            ))
    }

    const keysElements = keys.map((k) => 
        <Key key={k.id} object={k} checkKey={checkKey} showKey={showKey}/>)

    
    // HEALTH POINTS
    const languageChips = languages.map((obj,index) => {
        const styles = {
            backgroundColor: obj.backgroundColor,
            color: obj.color,
            opacity: obj.isDead ? 0.1 : 1
        }
        return <div className="hp" key={index} style={styles}>{obj.name}</div>
    })


    // GAME WON CONDITION
    // wordKeys.every(key => key.isShown) && alert("you won!")
    
    // function setMessage(){
    //     if(wordKeys.every(key => key.isShown)) {
    //         return <Message title={} msg={}/>
    //     }
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

            <div className="guessedWord">
                {wordKeyElements}
            </div>

            <div className="keyboard">
                {keysElements}
            </div>
        </main>
    )
}