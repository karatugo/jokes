import React from "react"

function Joke(props) {
    return (
        <div className="card form-check">
            <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
            <h3 style={{color: !props.question && "#ABC"}}>Answer: {props.punchLine}</h3>
            <hr/>
        </div>
    )
}

export default Joke