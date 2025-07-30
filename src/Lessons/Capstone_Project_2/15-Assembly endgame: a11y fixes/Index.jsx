import React from "react-dom/client"
import App from "./App"
import "./index.css"
import Hangman from "./App"

React
    .createRoot(document.getElementById('root'))
    .render(<Hangman />)