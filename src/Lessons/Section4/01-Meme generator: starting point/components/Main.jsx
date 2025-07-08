import React from 'react'
export default function Main() {

    const [meme, setMeme] = React.useState({
        topText: "One does not simply",
        bottomText: "walk into mordor",
        image: "http://i.imgflip.com/1bij.jpg"
    })

    function handleInput(e){
        e.preventDefault()
        let input = e.currentTarget
        console.log(input)
        input.name === 'topText' ? setMeme(prev => ({...prev, topText:input.value})) : setMeme(prev => ({...prev, bottomText:input.value}))
    }
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        onInput={handleInput}
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                    />
                </label>

                <label>Bottom Text
                    <input
                        onInput={handleInput}
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.image} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}