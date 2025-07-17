export default function Die(props) {
    return(
        <div className={ props.die.isSelected ? 'die-active' : 'die' } onClick={() => props.handlePadClick(props.die.id)}>
            {props.die.value}
        </div>
    )
} 