export default function Key(props) {
    return(
        <button 
            className={props.object.isPressed ? (props.object.isRight ? "correct" : "wrong") : "key"}
            onClick={()=> {props.checkKey(props.object); props.showKey(props.object.value)}} 
            >
                {props.object.value}
        </button>
    )
} 
