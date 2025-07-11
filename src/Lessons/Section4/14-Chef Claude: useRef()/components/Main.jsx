import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"

export default function Main() {

    const [ingredients, setIngredients] = React.useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )


    const [recipe, setRecipe] = React.useState("");
    const recipeSection = React.useRef(null);

    async function getRecipe() {

        console.log("loading")
        const response = await fetch("http://localhost:3001/api/recipe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ingredients: [...ingredients]}),
        });
        
        
        const data = await response.json();
        console.log("done!")
        setRecipe(data.recipe);
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>

            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && 
                <IngredientsList 
                    ref={recipeSection}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                    />
            
            }
            {recipe ? <ClaudeRecipe recipe={recipe}/> : null} 
        </main>
    )
}