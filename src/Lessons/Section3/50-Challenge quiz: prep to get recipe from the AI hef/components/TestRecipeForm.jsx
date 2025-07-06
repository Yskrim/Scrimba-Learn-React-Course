import React from "react";

export default function TestRecipeForm() {
    const [ingredients, setIngredients] = React.useState("flour, eggs, sugar, apples");
    const [recipe, setRecipe] = React.useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("http://localhost:3001/api/recipe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ingredients: ingredients.split(",") }),
        });
        const data = await response.json();
        setRecipe(data.recipe);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={ingredients}
                onChange={e => setIngredients(e.target.value)}
                placeholder="Enter ingredients, comma separated"
            />
            <button type="submit">Get Recipe</button>
            <div>
                <pre>{recipe}</pre>
            </div>
        </form>
    );
}
