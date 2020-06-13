import React from "react"

function Joke(props) {
    return (
        <div className="card form-check">
            <h3 style={{display: !props.joke.question && "none"}}>Question: {props.joke.question}</h3>
            <h3 style={{color: !props.joke.question && "#ABC"}}>Answer: {props.joke.punchLine}</h3>
            <hr/>
        </div>
    )
}

export default Joke