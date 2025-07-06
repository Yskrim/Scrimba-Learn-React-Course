import React from 'react'

export default function JokeComponent(props) {

    const [upvote, setUpvote] = React.useState(false)
    const [downvote, setDownvote] = React.useState(false)
    const [isShown, setIsShown] = React.useState(false)
    if (upvote && downvote) {
        setDownvote(prevD => !prevD)

    }
    return (
        <div className="joke-component">
            {props.setup && <p className="setup">Setup: { props.setup }</p>}
            {props.punchline && <p className="punchline">Punchline: { props.punchline }</p>}

            {props.isPun}
            <div className="meta">
                <div className="meta-votes">
                    {props.upvotes && <p onClick={() => setUpvote(prev => !prev)}>👍 {props.upvotes + upvote}</p>}
                    {props.downvotes && <p onClick={() => setDownvote(prev => !prev)}>👎 {props.downvotes + downvote}</p>}
                </div>
                {props.isPun && <p className="isPun">this joke is a pun</p>}
            </div>

            
            {props.comments && (
                <>
                    <label onClick={() => setIsShown(prev => !prev)} htmlFor='comment-section'>{isShown ? "Hide Comments" : "Show Comments"}</label>
                    {isShown && <div id='comment-section' className="comment-section">
                        {props.comments.map(comment =>
                            <p className="comment">{comment.text}</p>
                        )}
                    </div>}
                </>
                )
            }
        </div>
    )
}