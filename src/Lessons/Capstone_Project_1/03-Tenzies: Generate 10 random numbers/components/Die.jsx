export default function Die(props) {
    return(
        <div className='die' key={props.key} onClick={props.onClick}>
            {props.value}
        </div>
    )
} 