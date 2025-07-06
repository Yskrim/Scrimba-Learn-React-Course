import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function Star(props) {
    return (
        <button
            onClick={props.handleClick}
            aria-pressed={props.isFilled}
            aria-label={props.isFilled ? "remove from favorites" : "Add to favorites"}
            className="favorite-button"
        >
            <img
                src={props.isFilled ? starFilled : starEmpty}
                alt="star icon"
                className="favorite"
            />
        </button>
    )
}