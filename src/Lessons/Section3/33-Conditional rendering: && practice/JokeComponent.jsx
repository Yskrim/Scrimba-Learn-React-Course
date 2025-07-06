import React from 'react'

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */

    const [isShown,setIsShown] = React.useState(false);
    return (
        <div>
            {props.setup && <h3 onClick={() => setIsShown(prev => !prev)}>{props.setup}</h3>}
            {isShown && <p >{props.punchline}</p>}
            <hr />
        </div>
    )
}