import express from "express";
import cors from "cors";
import { getRecipeFromMistral } from "./src/Lessons/Section3/49-API sign ups/ai.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/recipe", async (req, res) => {
    const { ingredients } = req.body;
    try {
        const recipe = await getRecipeFromMistral(ingredients);
        res.json({ recipe });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3001, () => console.log("Server running on port 3001"));