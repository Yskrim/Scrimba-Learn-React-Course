import React from 'react'

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    
    const ingredientListItems = ingredients.map(i => (
        <li key={i}>{i}</li>
    ))

    function handleSubmit (event) {
        event.preventDefault()
        console.log("FoRm HaS bEeN SuBmItTeD");
        const formData = new FormData(event.currentTarget)

//        setIngredients((prev) => !prev.includes(formData.get('ingredient')) ? [...ingredients, formData.get('ingredient')] : (alert('item is already in the list'), [...ingredients]))
//        
        setIngredients(prev => {
            if(!prev.includes(formData.get('ingredient'))){
                return [...ingredients, formData.get('ingredient')]
            } else {
                alert('item is already in the list')
                return [...ingredients]
            }
        })

        console.log(ingredients)
    }

    function addIngredient(formData) {
        setIngredients(prev => {
            if(formData.get('ingredient') && !prev.includes(formData.get('ingredient'))){
                return [...ingredients, formData.get('ingredient')]
            } else {
                alert('item is already in the list')
                return [...ingredients]
            }
        })
        console.log(formData.get(ingredients))
    }

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
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

            </ul>
        </main>
    )
}