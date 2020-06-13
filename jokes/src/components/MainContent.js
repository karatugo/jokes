import React from "react"
import Joke from './Joke.js';


function MainContent(){
    return (
        <main>
            <Joke joke={{ question: "How can you lift an elephant with one hand?", punchLine: "It is not a problem, since you will never find an elephant with one hand." }}/>
            <Joke joke={{ question: "How can a man go eight days without sleep?", punchLine: "He sleeps at night." }}/>
            <Joke joke={{ question: "What often falls but never gets hurt?", punchLine: "Rain" }}/>
            <Joke joke={{ question: "", punchLine: "It's hard to explain puns to kleptomaniacs because they take things literally." }}/>
        </main>
    )
}

export default MainContent