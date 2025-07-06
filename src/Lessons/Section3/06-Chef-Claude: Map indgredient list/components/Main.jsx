export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    const ingredientListItems = ingredients.map(i => (
        <li key={i}>{i}</li>
    ))
    /**
     * Review Challenge:
     * Map over the list of ingredients and render them as list items
     * 
     * Note: We're doing things a weird way here. Don't worry,
     * we're building up to learning the right way 🙂
     */
    

    /**
    * Challenge:
    * Add an `onSubmit` event listener on the form. Have the function
    * simply console.log("Form submitted!") for now
    */

    function handleSubmit (event) {
        event.preventDefault()
        console.log("FoRm HaS bEeN SuBmItTeD");
        const formData = new FormData(event.currentTarget)
        ingredients.push(formData.get('ingredient'));
        console.log(ingredients)
    }

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input 
                    name="ingredient"
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>

                {ingredients.map(i => {
                    return(<li key={i}>{i}</li>)
                })}

                {ingredientListItems}
            </ul>
        </main>
    )
}