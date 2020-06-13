import React from "react"
import Joke from './Joke.js';
import jokesData from "./jokesData"

function MainContent() {
    const jokeComponents = jokesData.map(
        joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
    return (
        <main>
            {jokeComponents}
        </main>
    )
}

export default MainContent