export default function Die(props) {
    return(
        <div 
            className={ props.die.isSelected ? 'die-active' : 'die' } 
            onClick={() => props.handlePadClick(props.die.id)}
            aria-pressed={props.die.isSelected}
            aria-label={`Die with value of ${props.die.value}, ${props.die.isSelected ? "held" : "not held"}`}
            >
                {props.die.value}
        </div>
    )
} 