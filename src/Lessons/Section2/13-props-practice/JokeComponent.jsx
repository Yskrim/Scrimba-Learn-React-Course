

export default function JokeComponent(props) {

    
    return (
        <div className="joke-component">
            {props.setup && <p className="setup">Setup: { props.setup }</p>}
            {props.punchline && <p className="punchline">Punchline: { props.punchline }</p>}

            {props.isPun}
            <div className="meta">
                <div className="meta-votes">
                    {props.upvotes && <p>👍 {props.upvotes}</p>}
                    {props.downvotes && <p>👎 {props.downvotes}</p>}
                </div>
                {props.isPun && <p className="isPun">this joke is a pun</p>}
            </div>

            
            {props.comments && (
                
                <div className="comment-section">
                    <label>Comments:</label>
                    {props.comments.map(comment =>
                        <p className="comment">{comment.text}</p>
                    )}
                </div>
                )
            }
        </div>
    )
}