import React from "react"
import "./Tweet.css"

const Tweet = (props) => {
    return (
        <div className="Tweet">
            <div>
                <span>
                    <strong>{props.name}</strong>
                </span>
                <span> @{props.id}</span>
                <span> · {props.date}</span>
            </div>

            <div>{props.content}</div>
        </div>
    )
}

export default Tweet
