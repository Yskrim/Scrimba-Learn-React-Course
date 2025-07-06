export default function Main() {
    function handleClick() {
        console.log("Clicked")
    }

    /**
    * Challenge: Log something to the console when the mouse
    * hovers over the image
    */

    function handleHover() {
        console.log('mouse entered!')
    }

    return(
        <main>
            <form>
                <input onMouseEnter={e => {console.log('Mouse is hovering over input')}} onMouseLeave={e => {console.log('Mouse left the input')}} aria-label="ingredient" className="ingredient" placeholder="e.g. oregano"/>
                <button onClick={handleClick}>Add ingridient</button>
            </form>
        </main>
    )
}